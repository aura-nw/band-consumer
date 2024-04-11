const { Client, Wallet, Message, Coin, Transaction, Fee } = require('@bandprotocol/bandchain.js')
const fs = require('fs')
const path = require('path')
const chainConfig = require('./config/chain').defaultChain;

// Setup the client
const grpcURL = chainConfig.grpcURL;
const mnemonic = chainConfig.mnemonic;
const execPath = path.resolve(__dirname, '../data-source/aura_price-coingecko.py')
const dataSourceName = 'AURA MEXC Price'

const client = new Client(grpcURL)

async function createDataSource() {
    // Setup the wallet
    const { PrivateKey } = Wallet
    const privateKey = PrivateKey.fromMnemonic(mnemonic)
    const publicKey = privateKey.toPubkey()
    const sender = publicKey.toAddress().toAccBech32()

    // Setup the transaction's properties
    const chainId = await client.getChainId()
    const file = fs.readFileSync(execPath, 'utf8')
    const executable = Buffer.from(file).toString('base64')

    let feeCoin = new Coin()
    feeCoin.setDenom('uband')
    feeCoin.setAmount('50000')

    const requestMessage = new Message.MsgCreateDataSource(
    dataSourceName, // Data source name
    executable, // Data source executable
    sender, // Treasury address
    sender, // Owner address
    sender, // Sender address
    [feeCoin], // Fee
    '' // Data source description
    )

  // Construct the transaction
    const fee = new Fee()
    fee.setAmountList([feeCoin])
    fee.setGasLimit(80000)

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
    const dataSourceId = rawLog[0].events[0].attributes[0].value
    return dataSourceId
}

;(async () => {
    console.log("Successfully deployed DataSource ID:", await createDataSource())
})()

