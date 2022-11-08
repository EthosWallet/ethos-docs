---
title: Types
description: Typescript types, interfaces, and enums
---

EthosConnect ships with full [Typescript](https://www.typescriptlang.org/) support for types, interfaces, and enums.

## Types

### `JsonRpcProvider`

From [`@mysten/sui.js`](http://typescript-sdk-docs.s3-website-us-east-1.amazonaws.com/classes/JsonRpcProvider.html)

### `EthosConnectStatus`

```js
type EthosConnectStatus = {
    Loading = "loading",
    NoConnection = "no_connection",
    Connected = "connected"
}
```

### `Wallet`

```js
interface Wallet = {
    address: SuiAddress,
    contents: WalletContents,
    getAccounts: () => Promise<string[]>,
    getAddress: () => Promise<string>,
    signAndExecuteTransaction: (transaction: SignableTransaction) => Promise<SuiTransactionResponse>,
    requestPreapproval: (preApproval: Preapproval) => Promise<boolean>,
    sign: (message: any) => Promise<any>,
    disconnect: () => void
}
```

### `WalletContents`

```js
interface WalletContents = {
  suiBalance: bigint,
  coins: Coin[],
  nfts: Nft[],
}
```

### `Preapproval`

```js
export interface Preapproval {
  module: string;
  function: string;
  objectId: ObjectId;
  description: string;
  totalGasLimit: number;
  perTransactionGasLimit: number;
  maxTransactionCount: number;
}
```
