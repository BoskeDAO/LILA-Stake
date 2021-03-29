const LERNToken = artifacts.require("LERNToken");
const TokenFarm = artifacts.require("TokenFarm");

module.exports = async function(deployer, network, accounts) {
  // Deploy TokenFarm
  const lernToken = await LERNToken.deployed();
  await deployer.deploy(TokenFarm, lernToken.address);
  const tokenFarm = await TokenFarm.deployed();
  await lernToken.transfer(tokenFarm.address, "1000000000000000000000000");

  if (network.startsWith("kovan") || network.startsWith("live")) {
    // LINK Token address
    await tokenFarm.addAllowedTokens(
      "0xa36085F69e2889c224210F603D836748e7dC0088"
    );
    await tokenFarm.setPriceFeedContract(
      "0xa36085F69e2889c224210F603D836748e7dC0088",
      "0x3Af8C569ab77af5230596Acf0E8c2F9351d24C38"
    );
    // FAU Token address. Pretending FAU is DAI
    await tokenFarm.addAllowedTokens(
      "0xFab46E002BbF0b4509813474841E0716E6730136"
    );
    await tokenFarm.setPriceFeedContract(
      "0xFab46E002BbF0b4509813474841E0716E6730136",
      "0x777A68032a88E5A84678A77Af2CD65A7b3c0775a"
    );
    // LERN Token Address - also dai
    await tokenFarm.addAllowedTokens(lernToken.address);
    await tokenFarm.setPriceFeedContract(
      lernToken.address,
      "0x777A68032a88E5A84678A77Af2CD65A7b3c0775a"
    );
  }

//arreglar esto cuando quiera asignar los PriceFeeds
//de la red que elija para usar

  if (network.startsWith("rinkeby")) {
    
    // LINK Token address
    await tokenFarm.addAllowedTokens(
      "0x01BE23585060835E02B77ef475b0Cc51aA1e0709"
    );
    
    await tokenFarm.setPriceFeedContract(
      "0x01BE23585060835E02B77ef475b0Cc51aA1e0709",
      "0xd8bD0a1cB028a31AA859A21A3758685a95dE4623"
    );
    
    // CREO QUE FAU NO EXISTE EN RINKEBY
    // FAU Token address. Pretending FAU is DAI
    //await tokenFarm.addAllowedTokens(
    //  "0xFab46E002BbF0b4509813474841E0716E6730136"
    //);
    //await tokenFarm.setPriceFeedContract(
    //  "0xFab46E002BbF0b4509813474841E0716E6730136",
    //  "0x777A68032a88E5A84678A77Af2CD65A7b3c0775a"
    //);
    
    // DAPP Token Address - also dai
    
    await tokenFarm.addAllowedTokens(lernToken.address);
    
    await tokenFarm.setPriceFeedContract(
      lernToken.address,
      "0x2bA49Aaa16E6afD2a993473cfB70Fa8559B523cF"
    );
  }
};
