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

Code can be found in data-source folder of this repository.

## Oracle Script
