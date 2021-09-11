# smartMaze miner

## COOL - mineable smartBCH (SEP20) token based on [0xBitcoin](https://0xbitcoin.org/#/)

You can take this token and do whatever you want e.g. build a project, website, social network group, create an icon, ...

COOL contract is in contracts directory (cool.sol)

Read about smartBCH [here](https://smartbch.org) and [here](https://docs.smartbch.org/smartbch/)

[smartBCH explorer](https://smartscan.cash)

```
Symbol: COOL
Name: COOL
Decimals: 8
smartBCH contract address: 0x9cc5804e944eaca94400e37dc09cc40b932759cf
Initial supply: 0
Max total supply: 21000000
Mining reward: 50 COOL, 25 when supply is 10500000, ...
Mining transaction fee: about 9800 BCH satoshis
Difficulty readjustement every 1024 blocks
```

#### RISK: there is no guarantee that you will get mining reward and transaction gas could be spent even if you do not mine anything. Please read [How EIP918 Mining Works](https://0xbitcoin.org/#/)

--------------------------------------------------------------------------------------------

## smartBCH network and wallet

Use [MetaMask](https://metamask.io/)

Add network:

```
Network name: SmartBCH
RPC URL: https://smartbch.greyh.at
or
https://smartbch.fountainhead.cash/mainnet
or
https://global.uat.cash

Chain ID: 10000
Currency Symbol: BCH
```

Get SEP20 BCH:

Deposit Bitcoin Cash to your [CoinFlex](https://coinflex.com/) wallet and withdraw Bitcoin Cash SEP20 to your smartBCH MetaMask wallet address

--------------------------------------------------------------------------------------------

## Mining (CPU)

The miner is based on 0xBitcoin [miner](https://github.com/0xbitcoin/0xbitcoin-miner)

Download/clone the smartMaze repository, go to COOL_token, open `miner-config.json` file in any editor and paste your wallet address and private key. Do not change the gas price (1050000000) - it is 1.05 gwei. To change web3provider go to `index.js` file lines 16-20 (comment and remove comment to choose provider) and replace provider uri in `miner-config.json` 

```
{
  "mining_account_public_address":"your-wallet-address",
  "mining_account_private_key":"your-wallet-address-key",
  "mining_style":"solo",
  "contract_address":"0x9cc5804e944eaca94400e37dc09cc40b932759cf",
  "pool_url":"",
  "gas_price_gwei": 1050000000,
  "cpu_thread_count": 1,
  "web3provider": "wss://smartbch-wss.greyh.at"
}
```

Install the miner on Linux or Linux subsystem for Windows 10:

- Open Windows Control panel - go to "Programs" - go to "Turn Windows features on or off" - select "Windows Subsystem for Linux" and check the box, click ok and reboot Windows

- Download and install Ubuntu 20.4 LTS (or Debian) from Microsoft Store

- Open Linux terminal (command line)

- Setup your username and password

- In a command line type commands (press enter after every command):

`cd /mnt/c`

`sudo apt update`

`sudo apt upgrade`

`sudo apt-get install wget curl`

`curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -`

`sudo apt-get install -y nodejs`

`sudo apt-get install git cmake gcc g++ make`

- Install Node Version Manager (nvm)

`curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash`

`source ~/.profile`

- navigate to COOL_token directory and type commands:

`nvm install 10`

`nvm use 10`

`npm install`

`sudo apt-get install build-essential`

`npm run build`

`npm run miner`

- to stop the miner use Ctrl C

_*Ignore warnings. If the miner is not working try `node-gyp rebuild`. Every time you close the command line and open it again, navigate to COOL_token directory and run `nvm use 10` first_

----------------------------------------------------------------------------------------

[smartBCH explorer](https://smartscan.cash)





