require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz entire sun food plunge rice sad promote goddess light army giggle'; 
let testAccounts = [
"0x95faf12f551409841fd4047aaa714cad660e311468aa2ce60f4f9e8838e61f15",
"0x545642101cc6c0f90aba1adab2d6043c25e7e1b9266561b5acbf81ca517be6f7",
"0xbd83e0a623a2e77cb8c104f601e5111a8618c3008d246b4bf482c23238dc4082",
"0x7468486e8aba1618d88ecb057f37927a2e8a33c27e620da5ffd4c15417666525",
"0x81afb6e50e0b4edd35cfa6429a91f99b684cbf74212e152746bd2cbcb8a6b00c",
"0x6c55bd3ae783185f2fe9197b04f33b9d8300bd89de13d14d61a670e80bede44c",
"0x6e17db1efe1985db9cf7121c557e29d6829790e1d214c65e51c3c3d40d831014",
"0x0a56c9ea115a2cae6776145e25c692a795fb6c38a5a212521de8d5729bac9ac1",
"0x5d2b5cc742f3875f4cce576d0141a7eb3a9dea5d52c01e3402b221676502b814",
"0xe49677cda201f4bb18ab5fd7b7e48eeb62d57c174a81b0059b3974aed4149a27"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
