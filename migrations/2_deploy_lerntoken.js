const LERNToken = artifacts.require('LERNToken')

module.exports = async function(deployer, network, accounts) {
  // Deploy LERN Token
  await deployer.deploy(LERNToken)
  const lernToken = await LERNToken.deployed()
}
