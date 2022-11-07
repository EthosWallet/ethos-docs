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
    <EthosConnectProvider />
  );
};
```
