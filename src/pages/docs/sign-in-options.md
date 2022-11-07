---
title: Sign in options
description: Configure how your users can connect
---

Configure how your users can connect to your website. Options include browser extension wallets and [EthosConnect's sign in feature](how-it-works#email-sign-in).

---

## Hiding email sign in

Although it is recommended to include email sign in to expand your dApp's audience, you may hide it with one simple code change.

```js
import { EthosWrapper } from 'ethos-wallet-beta';

const App = () => {
  return (
    <EthosProvider
        hideEmailSignIn={true}
    >
      <YourApp />
    <EthosProvider />
  );
};
```

---

## Adding support for new wallets on Sui

Is your wallet not shown here? [Contact us](mailto:support@ethoswallet.xyz) to get a new wallet added.
