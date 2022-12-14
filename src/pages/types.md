---
title: Types
description: Typescript types, interfaces, and enums
---

EthosConnect ships with full [Typescript](https://www.typescriptlang.org/) support for types, interfaces, and enums.

## Types

### `JsonRpcProvider`

From [`@mysten/sui.js`](http://typescript-sdk-docs.s3-website-us-east-1.amazonaws.com/classes/JsonRpcProvider.html)

### `EthosConfiguration`

```js
interface EthosConfiguration {
  apiKey?: string
  walletAppUrl?: string
  hideEmailSignIn?: boolean
  hideWalletSignIn?: boolean
}
```

### `EthosConnectStatus`

```js
enum EthosConnectStatus = {
    Loading = "loading",
    NoConnection = "no_connection",
    Connected = "connected"
}
```

### `AddressWidgetButtons`

```js
enum AddressWidgetButtons {
    CopyWalletAddress = "copy_wallet_address",
    WalletExplorer = "wallet_explorer",
    Logout = "logout"
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
  objects: SuiObject[]
}
```

### `Preapproval`

```js
interface Preapproval {
  module: string;
  function: string;
  objectId: ObjectId;
  description: string;
  totalGasLimit: number;
  perTransactionGasLimit: number;
  maxTransactionCount: number;
}
```

### `AddressWidgetProps`

```js
interface AddressWidgetProps {
  includeMenu?: boolean;
  buttonColor?: string;
  extraButtons?: ReactNode[];
}
```
