require("@nomiclabs/hardhat-waffle");

const projectId = "05d8cf86ff2248a28520032f40b7be63"

// retrieved from infura.io

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${projectId}`,
      accounts: []
    },
    mainnet: {
      url: `https://polygon-mainnet.infura.io/v3/${projectId}`,
      accounts: []
    }
  }
  solidity: "0.8.4",
};


