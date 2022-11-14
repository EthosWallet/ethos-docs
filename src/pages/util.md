---
title: Utility Functions
description: Utility functions for common use cases when building in Sui.
---

EthosConnect provides a variety of utility functions that you might find useful while developing.

---

# `lookup`

The `ethos.lookup(addressOrName)` call takes either the address of an on-chain wallet (e.g. `0x56e69614585a2430d0ae7e6ab69cff3f8116d51d`) or a SuiNS

```js
import { ethos, SignInButton, type EthosConnectStatus } from 'ethos-connect'

function App() {
  const { status } = ethos.useWallet()

  return (
    <>
      {status === EthosConnectStatus.Loading ? (
        <div>Loading...</div>
      ) : status === EthosConnectStatus.NoConnection ? (
        <div>
          No wallet connected
          <SignInButton />
        </div>
      ) : (
        // status is EthosConnectStatus.Connected
        <div>
          Wallet connected
          <TheRestOfTheApp />
        </div>
      )}
    </>
  )
}
```
