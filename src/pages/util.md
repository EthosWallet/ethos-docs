---
title: Utility Functions
description: Utility functions for common use cases when building on Sui.
---

EthosConnect provides a variety of utility functions that you might find useful while developing on Sui.

---

# `TransactionBlock`

TransactionBlock from the `@mysten/sui.js` is provided as a top level export for convenience:

```js
import { ethos, TransactionBlock } from 'ethos-connect'
```


# `dripSui`

The `ethos.dripSui(address)` call takes a valid wallet address and will attempt to drip
Sui into the wallet. This can be helpful to enusre users can use your dApp if they do
not yet have Sui. This feature is only available on devnet.

```js
import { useEffect } from 'react'
import { ethos } from 'ethos-connect'

function App() {
  const { wallet } = ethos.useWallet()

  useEffect(() => {
    if (!wallet) return

    ethos.dripSui({ address: wallet.address })
  }, [wallet])

  return <div>Wallet balance: {wallet?.suiBalance || '---'}</div>
}
```

# `formatBalance`

The `ethos.formatBalance(suiBalance)` vall takes the suiBalance of a wallet in mist and
converts it to Sui.

```js
import { ethos } from 'ethos-connect'

function App() {
  const { wallet } = ethos.useWallet()

  return (
    <div>
      <p>Mist: {ethos.formatBalance(wallet?.suiBalance)}</p>
      <p>Sui: {wallet?.suiBalance}</p>
    </div>
  )
}
```

# `lookup`

The `ethos.lookup(addressOrName)` call takes either the address of an on-chain wallet (e.g. `0x56e69614585a2430d0ae7e6ab69cff3f8116d51d`) or a SuiNS name. If an address is provided the lookup will return the associated name if one exists. If the name is provided then the lookup will provide the address associated with that name.

```js
import { useEffect, useState } from 'react'
import { ethos } from 'ethos-connect'

function App() {
  const [name, setName] = useState<string | undefined>()
  const { wallet } = ethos.useWallet();

  useEffect(() => {
    if (!wallet) return;

    ethos.lookup(wallet.address).then(
        (n) => setName(n)
    )
  }, [wallet])

  return (
    <div>
      Name: {name || 'searching...'}
    </div>
  )
}
```

# `truncateMiddle`

The `ethos.truncateMiddle(address)` call takes any string and truncates the middle. You
can optionally specify the number of digits to display on either side of the truncation
`ethos.truncateMiddle(address, length)`

```js
import { ethos } from 'ethos-connect'

function App() {
  const { wallet } = ethos.useWallet()

  return <div>Address: {truncateMiddle(wallet?.address, 4)}</div>
}
```
