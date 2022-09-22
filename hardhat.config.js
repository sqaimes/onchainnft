require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config()

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const POLYGON_URL = process.env.POLYGON_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const POLYGON_KEY = process.env.POLYGON_KEY;

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.10",
  networks: {
    mumbai: {
      url: POLYGON_URL,
      accounts: [PRIVATE_KEY]
    },
  },
  etherscan: {
 apiKey: {
      polygonMumbai: POLYGON_KEY
    }  }
};