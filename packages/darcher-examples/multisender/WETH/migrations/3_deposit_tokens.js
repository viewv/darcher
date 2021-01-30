let contract = artifacts.require("WETH9");


module.exports = async function (deployer, network, accounts) {
    const instance = await contract.deployed();
    console.log(await instance.deposit({value: "100000000000000000000"}));
};
