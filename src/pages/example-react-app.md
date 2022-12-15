---
title: Example React App
description: An example app with code using the Ethos sign in
---

This sample app uses React with TypeScript, Next JS, and Tailwind CSS.

[View the live app](https://ethos-example-app.onrender.com)

[See the code](https://github.com/EthosWallet/ethos-example-app)

## Important files in this repository

Here are the places in the code that implement EthosConnect:

### `_app.tsx`

The `EthosConnectProvider` wraps the whole app:

```js
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <EthosConnectProvider>
      <Component {...pageProps} />
    </EthosConnectProvider>
  );
}
```

### `index.tsx`

This is the rest of the app. It's a simple app for signing in with a wallet, funding the wallet with the DevNet faucet, and minting an NFT.

It uses the `EthosConnect` hooks:

```js
  const { status, wallet } = ethos.useWallet();
```

The `SignInButton` component:

```js
<SignInButton />
```

...and more!
