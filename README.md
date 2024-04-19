# Integration of Aura Network with Band Protocol: A Comprehensive Overview

This document elucidates the intricate integration process between Aura Network and Band Protocol. The integration encompasses the deployment of a <b>Data Source</b>, an <b>Oracle Script</b> on the Band Chain, and a <b>Smart Contract</b> on Aura Network.

The objective of this integration is to facilitate the extraction of APIs and services from the conventional web, including platforms like Coingecko, CoinmarketCap, and various centralized and decentralized exchanges, to ascertain the AURA Price.

![Aura Network Integration with Band Protocol](https://docs.bandchain.org/assets/images/The_BandChain_Oracle-cc65920748b7ce9db427f7b12ec5caf1.png)

Source: [The BandChain Oracle](https://docs.bandchain.org/introduction/oracle-and-bandchain)

## Data Source
The data source is the fundamental unit at the heart of BandChain's oracle system. Essentially, it is an executable that delineates the procedure for extracting specific data types.

A comprehensive introduction to Band Protocol's data source can be found [here](https://docs.bandchain.org/develop/custom-scripts/data-source/introduction).

In the initial phase of integration, we will utilize the `CoinGecko` data source, a data source designed to extract price data from CoinGecko's API.

Data Source ID on laozi-testnet: [745](https://laozi-testnet6.cosmoscan.io/data-source/745)

The codebase is situated within the [data-source](https://github.com/aura-nw/band-consumer/tree/main/data-source) directory of this repository.

## Oracle Script

When a user intends to request data from BandChain’s oracle, they do not interact directly with the data sources. Instead, they invoke an [oracle script](https://docs.bandchain.org/develop/custom-scripts/oracle-script/introduction), which in turn executes the necessary data sources.

The primary function of an oracle script, unlike a data source, is to compile the results from various data sources to ensure on-chain security. Therefore, an oracle script, akin to a smart contract on other platforms such as Ethereum, Near, Solana and Aura Network, is executed on-chain rather than off-chain.

Oracle Script ID on laozi-testnet: [550](https://laozi-testnet6.cosmoscan.io/oracle-script/550)

The codebase is situated within the [oracle-script](https://github.com/aura-nw/band-consumer/tree/main/oracle-script) directory of this repository.

## How to Run
First of all, you need to config the network in deploy-band/config/chain.js:

1. Deploy the data source on BandChain with AURA API.
Run the following command:
```
node ./data-source.js
```
The result will be the data source ID. Ex:
```
Successfully deployed AURA CoinGecko Price : 796
Successfully deployed AURA CoinMarketCap Price : 797
Successfully deployed AURA MEXC Price : 798
```

2. Deploy the oracle script on BandChain.
```
node ./oracle-script.js
```
The result will be the oracle script ID. Ex: Successfully deployed OracleScript ID: 550


## CW-Band Smart Contract
The cw-band introduces a standard for those seeking to integrate data from Band's oracle into their CosmWasm smart contract on a Cosmos-SDK-based blockchain via Inter-Blockchain Communication (IBC). The standard comprises data types necessary for requesting and receiving data.

Workflow:

![Work Flow](https://user-images.githubusercontent.com/13800683/229094449-924cd62b-1c0e-4733-875f-adfe34001e16.png)

Cw-band Contract Address on Euphoria Testnet: [aura1rsjfz405ned8dd3yfjkl99lgu7d5a9h86xc4pe8yzk7d3thhtxqqfzcvay](https://euphoria.aurascan.io/contracts/aura1rsjfz405ned8dd3yfjkl99lgu7d5a9h86xc4pe8yzk7d3thhtxqqfzcvay)

[Cw-band contract repository](https://github.com/bandprotocol/cw-band)
