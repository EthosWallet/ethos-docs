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
EthosConnect is a [React](https://reactjs.org/) library.
{% /callout %}

### Configure and wrap providers

Start by importing Ethos and create an `EthosConfiguration` and decide what to do when the wallet gets connected. Then wrap your app with the `EthosConnectProvider`.

```js
import { EthosConnectProvider } from 'ethos-connect';

const App = () => {
  return (
    <EthosConnectProvider
      ethosConfiguration={{
        hideEmailSignIn: true // defaults to false
      }}
    >
      <YourApp />
    <EthosConnectProvider />
  );
};
```

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
