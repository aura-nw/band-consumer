const { Client, Wallet, Message, Coin, Transaction, Fee } = require('@bandprotocol/bandchain.js')
const fs = require('fs')
const path = require('path')
const chainConfig = require('./config/chain').defaultChain;

// Setup the client
const grpcURL = chainConfig.grpcURL;
const mnemonic = chainConfig.mnemonic;
const sourceCodeUrl = 'https://ipfs.io/ipfs/bafkreih2yiy2wu3pch2gv7iysh7wc6vr7z37xpavvqgoma7vfsx377uc3y'

const client = new Client(grpcURL)

// Setup the client
async function createOracleScript() {
    // Setup the wallet
    const { PrivateKey } = Wallet
    const privateKey = PrivateKey.fromMnemonic(mnemonic)
    const publicKey = privateKey.toPubkey()
    const sender = publicKey.toAddress().toAccBech32()

    // Setup the transaction's properties
    const chainId = await client.getChainId()
    const execPath = path.resolve(__dirname, '../oracle-script/target/wasm32-unknown-unknown/release/aura_price.wasm')
    const code = fs.readFileSync(execPath)

    let feeCoin = new Coin()
    feeCoin.setDenom('uband')
    feeCoin.setAmount('500000')

    const requestMessage = new Message.MsgCreateOracleScript(
        'AURA Price!', // oracle script name
        code, // oracle script code
        sender, // owner
        sender, // sender
        '', // description
        '{symbols:[string], minimum_source_count:u8}/{responses:[{symbol:string, response_code:u8, rate:u64}]}', // schema
        sourceCodeUrl // source code url
    )

    // Construct the transaction
    const fee = new Fee()
    fee.setAmountList([feeCoin])
    fee.setGasLimit(1600000)

    const txn = new Transaction()
    txn.withMessages(requestMessage)
    await txn.withSender(client, sender)
    txn.withChainId(chainId)
    txn.withFee(fee)
    txn.withMemo('')

    // Sign the transaction
    const signDoc = txn.getSignDoc(publicKey)
    const signature = privateKey.sign(signDoc)
    const txRawBytes = txn.getTxData(signature, publicKey)

    // Broadcast the transaction
    const sendTx = await client.sendTxBlockMode(txRawBytes)

    const rawLog = JSON.parse(sendTx.rawLog)
    const oracleScriptId = rawLog[0].events[0].attributes[0].value

    return oracleScriptId
}

;(async () => {
    console.log("Successfully deployed DataSource ID:", await createOracleScript())
})();
