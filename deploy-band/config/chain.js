const testnet = {
    grpcURL: 'https://laozi-testnet6.bandchain.org/grpc-web',
    mnemonic: 'opera barely inside smart roof bargain among announce fitness useful media attitude',
}

const mainnet = {
    grpcURL: 'https://laozi1.bandchain.org/grpc-web',
    mnemonic: '',
}

let defaultChain = testnet;

module.exports = {
    defaultChain,
    testnet,
    mainnet,
}