---
title: Sign in options
description: Configure how your users can connect
---

Configure how your users can connect to your website. Options include browser extension wallets and email sign-in.

---

## Hiding email sign in

Although it is recommended to include email sign in to expand your dApp's audience, you may hide it with one simple code change.

```js
import { EthosConnectProvider } from 'ethos-connect';

const App = () => {
  return (
    <EthosConnectProvider
        hideEmailSignIn={true}
    >
      <YourApp />
    </EthosConnectProvider>
  );
};
```
---

## Showing email sign in

In order to have access to the email sign-in functionality, you must first register an API key.

Please [contact us](mailto:support@ethoswallet.xyz) to get an API key.

```js
import { EthosConnectProvider } from 'ethos-connect';

const App = () => {
  return (
    <EthosConnectProvider
        ethosConfiguration={ apiKey: 'your-api-key'}
    >
      <YourApp />
    </EthosConnectProvider>
  );
};
```
