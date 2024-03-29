---
title: Installation
description: The simplest way to connect a wallet on Sui
---

EthosConnect is the simplest way to integrate a connect wallet experience into your React dApp on Sui.

---

## In a new project

You can scaffold a new app with [Next.js](https://nextjs.org/) and EthosConnect with:

```bash
npm init EthosWallet/ethosconnect@latest
# or
yarn create EthosWallet/ethosconnect@latest
# or
pnpm create EthosWallet/ethosconnect@latest
```

This will prompt you for a project name, generate a new directory containing a boilerplate project, and install all required dependencies.

Alternatively, you can manually integrate EthosConnect into your existing project.

---

## Add to an existing project

```bash
npm install ethos-connect
```

or

```bash
yarn add ethos-connect
```

{% callout title="Note: EthosConnect is a React library. CHANGE MY STYLING PLEASE" / %}

### Configure and wrap providers

Start by importing Ethos and create an `EthosConfiguration` and decide what to do when the wallet gets connected. Then wrap your app with the `EthosWrapper`.

```js
import { EthosWrapper } from 'ethos-connect';

const App = () => {
  return (
    <EthosConnectProvider
      hideEmailSignIn={true} // defaults to false
    >
      <YourApp />
    </EthosConnectProvider>
  );
};
```

If you'd like to show the email option to users, please [contact us](mailto:support@ethoswallet.xyz) to get an API key. Learn more in [Customize sign in options](sign-in-options).

### Add the sign in button

Then, in your app, import and render the `SignInButton` component.

```js
import { SignInButton } from 'ethos-connect'
export const YourApp = () => {
  return <SignInButton />
}
```

Learn how to customize your `SignInButton` component with [Sign in button](sign-in-button)

---

## See some examples

To look at some examples of EthosConnect, see the [official examples](https://github.com/EthosWallet/ethosconnect/tree/main/examples).
