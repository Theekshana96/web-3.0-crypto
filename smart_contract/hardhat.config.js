//https://eth-mainnet.alchemyapi.io/v2/-m8MCNeP72gf_V6uWhF_y-fVpBm6RzSg

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/mHe7pDIx77wYHzzkYFCGhVkBNGfh9J0y',
      accounts: ['6a3b521e346e304b5f2439314e98b0fbfd3801b52bfc4def2e173017b4fc0d44'],
    },
  },
};