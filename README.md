# smartMaze

## MAZE - mineable smartBCH (SEP20) token based on [0xBitcoin](https://0xbitcoin.org/#/)

```
Symbol: MAZE
Name: MAZE
Decimals: 6
smartBCH contract address: 0x481de06dca0198844faa36fca04db364e5c2f86c
Genesis transaction: https://www.smartscan.cash/transaction/0xce71475419dca1a39fa12555f70909974aa34d2eed1150c29cf3225bc412c7c1
Initial supply: 0
Max total supply: 21000000
Mining reward: 800 MAZE
```

## Mining (CPU)

The miner is based on 0xBitcoin [miner](https://github.com/0xbitcoin/0xbitcoin-miner)

Download/clone the smartMaze repository, open `miner-config.json` file in any editor and paste your wallet address and private key. Do not change the gas price (1050000000) - it is 1.05 gwei

```
{
  "mining_account_public_address":"your-wallet-address",
  "mining_account_private_key":"your-wallet-address-key",
  "mining_style":"solo",
  "contract_address":"0x481de06dca0198844faa36fca04db364e5c2f86c",
  "pool_url":"",
  "gas_price_gwei": 1050000000,
  "cpu_thread_count": 1,
  "web3provider": "wss://smartbch-wss.greyh.at"
}
```

Install on Linux:

- install Nodejs and Node Version Manager (nvm)

- navigate to smartMaze directory and type:

`nvm install 10`

`nvm use 10`

`npm install`

`sudo apt-get install build-essential`

`npm run build`

`npm run miner`

_*Ignore warnings. If the miner is not working try `node-gyp rebuild`_

More detailed tutorial and token description soon






