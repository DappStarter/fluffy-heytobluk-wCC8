require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid glove flower smooth name reflect nominee company hunt beach bubble street'; 
let testAccounts = [
"0x8aaf6da453a07a274f625c8a4151f699aab07c540e0d0dcbbf093fcea8e6375a",
"0xd885fc368452ea3deb19840bc4f1cac8f74185a90fd0b7ded05b1eb1b41aa33d",
"0x0966ef1fd19c23cdc22582bac9c75b80008f39cf4bc1a856fffaaa15dfb23250",
"0xda20c07352566c2b2f415e80d1700761f0cb74c0fc630c24c672e61365f76141",
"0x6191728fc764dcbd2f0fe015b5a2c40d555826f7c0dddbc85155cde06a98e81e",
"0xacacdeabcd75e979228d145ce91d4a2a1f05dd6571fce1b9d2643d680fd57c2c",
"0x1177e287eed0d59ef0bb272d9f41627bdcc0e2972ce87b17737df37d1899f444",
"0xa51028f41b2c8a4141e2f845d0d167dd7884337e87a0a92038c64ba503d8af19",
"0xa74a893cf348f08b00d11a952f2a45160d6035230e14edefbcd7368e33408c4f",
"0xa0470bad8dc94c5ade3b8ba97e44b6027979ec8696474dcf987435ead8b2e84c"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


