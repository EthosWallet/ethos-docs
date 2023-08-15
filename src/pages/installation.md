---
title: Installation
description: The simplest way to connect a wallet on Sui
---

EthosConnect is the simplest way to integrate a connect wallet experience into your React dApp on Sui.

---

## Install

```bash
npm install ethos-connect
```

or

```bash
yarn add ethos-connect
```

{% callout title="Note" %}
EthosConnect is a [React](https://reactjs.org/) library. For [Vue](https://vuejs.org/) support see [EthosConnectVue](/example-vue-app)
{% /callout %}

### Configure and wrap providers

Start by importing Ethos and create an `EthosConfiguration` and decide what to do when the wallet gets connected. Then wrap your app with the `EthosConnectProvider`.

```js
import { EthosConnectProvider } from 'ethos-connect';

const App = () => {
  return (
    <EthosConnectProvider
      ethosConfiguration={{
        apiKey: [YOUR API KEY] // Optional. Required for email signin. Please contact support@ethoswallet.xyz to acquire an API key.
        chain: [CHAIN IDENTIFIER] // Optional. Defaults to sui:devnet - An enum containing acceptable chain identifier strings can be imported from the ethos-connect package 
        network: [RPC URL] // Optional. Defaults to https://fullnode.testnet.sui.io/ 
        hideEmailSignIn: true // Optional.  Defaults to false
      }}
    >
      <YourApp />
    </EthosConnectProvider>
  );
};
```

If you would like to switch your dapp from one network to another you need to change both `chain` and `network` in the `ethosConfiguration`.

Interested in customizing the text shown in the sign-in modal? Check out the [Customization page](customization).

If you'd like to show the email option to users, please [contact us](mailto:support@ethoswallet.xyz) to get an API key.

### Add the sign in button

Then, in your app, import and render the `SignInButton` component.

```js
import { SignInButton } from 'ethos-connect'
export const YourApp = () => {
  return <SignInButton />
}
```

Learn how to customize your `SignInButton` component with [Sign in button](sign-in-button)
