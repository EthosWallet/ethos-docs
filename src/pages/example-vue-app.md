---
title: Example Vue App
description: An example app with code using the Ethos sign in
---

This sample app uses Vue with TypeScript.

[View the live app](https://ethoswallet.github.io/ethos-connect-vue-example-app/)

[See the code](https://github.com/EthosWallet/ethos-connect-vue-example-app)

## Important files in this repository

Here are the places in the code that implement EthosConnect:

### `src/main.ts`

Install the `EthosConnectPlugin` with a valid [EthosConfiguration](/types#ethos-configuration).

```js
import { createApp } from "vue";
import App from "./App.vue";
import {
  EthosConnectPlugin,
  EthosConfiguration,
} from "ethos-connect-vue";
import "./assets/main.css";

const config: EthosConfiguration = {
  apiKey: "vue-example-app",
};

createApp(App).use(EthosConnectPlugin, config).mount("#app");
```


### `src/App.vue`

The `EthosConnectProvider` wraps the whole app:

```js
<script setup lang="ts">
import TheContents from "./components/TheContents.vue";
</script>

<template>
  <EthosConnectProvider>
    <div className="app">
      <TheContents />
    </div>
  </EthosConnectProvider>
</template>
```

### `src/components/TheHeader.vue`

You can reference components like the `AddressWidget` directly in any component:

```js
<template>
  <div className="header">
    <div>Ethos Connect Vue Example App</div>
    <AddressWidget />
  </div>
</template>
```

### `src/components/TheWallet.vue`

You can reference the context of the package, which has information about the connected wallet and allows you to execute transactions:

```js
<script setup lang="ts">
import { ethosForVue } from "ethos-connect-vue";

const { context } = ethosForVue() || {};
const { wallet } = context?.wallet || {};

const mint = () => {
  if (!wallet) return;

  wallet.signAndExecuteTransaction({
    kind: "moveCall",
    data: {
      packageObjectId: "0x0000000000000000000000000000000000000002",
      module: "devnet_nft",
      function: "mint",
      typeArguments: [],
      arguments: [
        "Ethos Example NFT",
        "A sample NFT from Ethos Wallet.",
        "https://ethoswallet.xyz/assets/images/ethos-email-logo.png",
      ],
      gasBudget: 10000,
    },
  });
};
</script>

<template>
  <div v-if="!!wallet" className="main">
    <div className="wallet-name">
      <img :src="wallet.icon" />
      {{ wallet.name }}
    </div>
    <div v-if="!!wallet.contents" className="wallet-balance">
      Balance: {{ wallet.contents.suiBalance }} MIST
    </div>
    <div v-if="!!wallet.contents?.nfts && wallet.contents.nfts.length > 0">
      <div className="subtitle">NFT From Wallet:</div>
      <div>
        <img
          :src="wallet.contents.nfts[wallet.contents.nfts.length - 1].imageUri"
          className="nft"
          height="300"
          width="300"
        />
      </div>
    </div>
    <div>
      <button :onClick="mint" className="button">Mint A New NFT</button>
    </div>
  </div>
</template>
```

...and more!
