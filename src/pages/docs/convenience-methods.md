---
title: Convenience methods
description: Quickly get info about and interact with on-chain objects
---

EthosConnect provides some convenience methods to quickly get information about and interacti with on-chain assets.

---

## Interact with a smart contract

You can use the `transact` method to interact with a Sui contract

### `transact`

Given the details of your contract, `transact` will call the function and module.

```js
import { ethos } from 'ethos-wallet-beta';

const mintDetails = {
              network: 'devNet',
              address: '0xd21d2fb75eb88b945c7ea30d96ec6040463e15cd',
              moduleName: 'game_8192',
              functionName: 'create',
              inputValues: [],
              gasBudget: 5000
            };

export const mint = async () => {
    return await ethos.transact(mintDetails);
}
```

The return object will be of type `Transaction` and look like this:

{% callout title="RETURN TYPE NOT IMPLEMENTED" / %}

---

## Sign a raw transaction

The `sign` method will prompt the user to sign a given transaction.

### `sign`

{% callout title="PARAM TYPE NOT IMPLEMENTED" / %}

```js
import { ethos } from 'ethos-wallet-beta';

const unsignedTransaction = {...}

export const signTxn = async () => {
    return await ethos.sign(unsignedTransaction);
}
```

The return object will be of type `Transaction` and look like this:

{% callout title="RETURN TYPE NOT IMPLEMENTED" / %}