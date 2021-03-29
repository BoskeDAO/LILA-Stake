const LERNToken = artifacts.require("LERNToken");

module.exports = async function(callback) {
  let lernToken = await LERNToken.deployed();
  
  console.log(lernToken.address);
  callback();
};
