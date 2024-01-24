# Aura Network Integration with Band Protocol

This README provides an overview of the integration between Aura Network and Band Protocol. The integration involves the deployment of a <b>Data Source</b>, an <b>Oracle Script</b> on the Band Chain, and a <b>Smart Contract</b> on Aura Network.

The purpose of this integration is to enable the retrieval of APIs and services from the conventional web, such as Coingecko, CoinmarketCap, and other centralized and decentralized exchanges, in order to obtain the AURA Price.

![Aura Network Integration with Band Protocol](https://docs.bandchain.org/assets/images/The_BandChain_Oracle-cc65920748b7ce9db427f7b12ec5caf1.png)

Source: [The BandChain Oracle](https://docs.bandchain.org/introduction/oracle-and-bandchain)

## Data Source
At the core of BandChain's oracle system, a data source serves as the fundamental unit. In its simplest form, it is an executable that defines the procedure for retrieving specific types of data.

Introduction to Band Protocol's data source can be found [here](https://docs.bandchain.org/develop/custom-scripts/data-source/introduction).

In the first integration phase, we will be using the `CoinGecko` data source, which is a data source that retrieves price data from CoinGecko's API.

Data Source ID on laozi-testnet: [745](https://laozi-testnet6.cosmoscan.io/data-source/745)

The code is located within the [data-source](https://github.com/aura-nw/band-consumer/tree/main/data-source) folder of this repository.

## Oracle Script

When an individual intends to request data from BandChain’s oracle, they do not directly interact with or call the data sources. Instead, they invoke an [oracle script](https://docs.bandchain.org/develop/custom-scripts/oracle-script/introduction), which subsequently executes the requisite data sources.

An oracle script's job, unlike a data source, is to be responsible for compiling the results from various data sources to enable on-chain security. As such, an oracle script, similarly to a smart contract on other platforms such as Ethereum, Near, Solana and Aura Network, is executed on-chain rather than off-chain

Oracle Script ID on laozi-testnet: [550](https://laozi-testnet6.cosmoscan.io/oracle-script/550)

The code is located within the [oracle-script](https://github.com/aura-nw/band-consumer/tree/main/oracle-script) folder of this repository.

## CW-Band Smart Contract
The cw-band introduces a standard for anyone looking to integrate data from Band's oracle into their CosmWasm smart contract on a Cosmos-SDK-based blockchain through Inter-Blockchain Communication (IBC). The standard itself consists of data types that require for requesting and receiving data.

Work Flow:

![Work Flow](https://user-images.githubusercontent.com/13800683/229094449-924cd62b-1c0e-4733-875f-adfe34001e16.png)

Cw-band Contract Address on Aura Network: [aura1rsjfz405ned8dd3yfjkl99lgu7d5a9h86xc4pe8yzk7d3thhtxqqfzcvay](https://euphoria.aurascan.io/contracts/aura1rsjfz405ned8dd3yfjkl99lgu7d5a9h86xc4pe8yzk7d3thhtxqqfzcvay)

[Cw-band contract repository](https://github.com/bandprotocol/cw-band)
