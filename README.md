# Paymon Coin

## Project structure

-   `contracts` - source code of all the smart contracts of the project and their dependencies.
-   `wrappers` - wrapper classes (implementing `Contract` from ton-core) for the contracts, including any [de]serialization primitives and compilation functions.

## How to use

### Build

`bun blueprint build` or `yarn blueprint build`

### Add a new contract

`bun blueprint create ContractName` or `yarn blueprint create ContractName`
