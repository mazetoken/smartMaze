const Miner = require("./MazeTokenminer-accel");
const miningLogger = require("./lib/mining-logger");

var pjson = require('./package.json');
var minerConfig = require('./miner-config.json');

var Web3 = require('web3');

var ContractInterface = require("./contracts/DeployedContractInfo");

var NetworkInterface = require("./lib/network-interface");

var PoolInterface = require("./lib/pool-interface");

var Web3 = require("web3");
// let web3 = new Web3(new Web3.providers.WebsocketProvider("wss://smartbch.fountainhead.cash/ws/mainnet"));
var web3 = new Web3(new Web3.providers.WebsocketProvider("wss://smartbch-wss.greyh.at"));
// var web3 = new Web3(new Web3.providers.HttpProvider("https://smartbch.greyh.at"));

var running = true;

console.log('Welcome to The MAZE');
console.log('Version: ',pjson.version);
console.log('\n');

function loadConfig()
{
  console.log('loaded config: ', minerConfig);

  web3.setProvider(minerConfig.web3provider);

  miningLogger.init();
  //NetworkInterfaces

    NetworkInterface.init(web3, miningLogger, minerConfig.contract_address, minerConfig.gas_price_gwei, minerConfig.mining_account_private_key);
    PoolInterface.init(web3, miningLogger, minerConfig.contract_address, minerConfig.pool_url);

  Miner.init(minerConfig.contract_address, web3, miningLogger);
  Miner.setNetworkInterface(NetworkInterface);
  Miner.setPoolInterface(PoolInterface);
}

async function initMining ()
{
  Miner.mine(minerConfig.mining_style,minerConfig.mining_account_public_address,minerConfig.mining_account_private_key,minerConfig.pool_url,minerConfig.gas_price_gwei);

}

loadConfig();
initMining();