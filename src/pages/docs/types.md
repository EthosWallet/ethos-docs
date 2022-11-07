---
title: Types
description: Typescript types and interfaces
---

EthosConnect ships with full [Typescript](https://www.typescriptlang.org/) support for types and interfaces.

## Types

### `WalletContents`

```js
type WalletContents = {
    suiBalance: bigint,
    coins: Coin[],
    nfts: Nft[]
}
```

### `Coin`

```js
type Coin = {
    ...
}
```

### `Nft`

```js
type Nft = {
    ...
}
```