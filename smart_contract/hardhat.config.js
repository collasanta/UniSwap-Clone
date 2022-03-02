require("@nomiclabs/hardhat-waffle");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
   rinkeby: {
      url: 'https://rinkeby.infura.io/v3/b848982b54114550a606be7f327a5f89',
      accounts: [
         'fe993055d2f19a881c0d64c86d8c155f45e60a23eb2c36c63ec7a848c3bffec4'
      ],
   },

  },
};
