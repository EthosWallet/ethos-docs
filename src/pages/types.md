---
title: Types
description: Typescript types, interfaces, and enums
---

EthosConnect ships with full [Typescript](https://www.typescriptlang.org/) support for types, interfaces, and enums.

## Types

### `SuiClient`

### `EthosConfiguration`

```js
interface EthosConfiguration {
  apiKey?: string
  walletAppUrl?: string
  chain?: Chain
  network?: string
  hideEmailSignIn?: boolean
  hideWalletSignIn?: boolean
  preferredWallets?: string[]
  redirectTo?: string
}
```

### `Chain`

```js
enum Chain {
  SUI_DEVNET = 'sui:devnet',
  SUI_TESTNET = 'sui:testnet',
  SUI_CUSTOM = 'sui:custom',
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
    type: SignerType,
    name?: string,
    icon?: string,
    getAddress: () => Promise<SuiAddress | null>
    accounts: readonly WalletAccount[],
    currentAccount: WalletAccount | null,
    signAndExecuteTransactionBlock: (input: EthosSignAndExecuteTransactionBlockInput) => Promise<SuiTransactionBlockResponse>,
    requestPreapproval: (preApproval: Preapproval) => Promise<boolean>,
    signMessage: (input: EthosSignMessageInput) => Promise<SuiSignMessageOutput>,
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
