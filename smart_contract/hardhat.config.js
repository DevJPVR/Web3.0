// https://eth-ropsten.alchemyapi.io/v2/8acZqKS_YebUPsHmYZ5Hrz_nZ3W9HRaa

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/8acZqKS_YebUPsHmYZ5Hrz_nZ3W9HRaa',
      accounts: [ '9e368efa22330b47b48d96a9fe1426bac7653b2bd8b20250b7000cac1e7b41ed' ]
    }
  }
}