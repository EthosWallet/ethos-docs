---
title: Hooks
description: React hooks for interacting with the wallet
---

EthosConnect ships with hooks to interact with the wallet and Sui blockchain.

NOTE make useWallet - same iterface as mysten but remove adapters, wallets, select. Add in useWalletContents and useAddress. Can also get signer from this. Also replace signAndExecuteTransaction with `transact`. Also `signTransaction` convenience method

https://github.com/MystenLabs/sui/blob/main/sdk/wallet-adapter/packages/react-providers/src/WalletContext.tsx

---

## `useWallet`

These hooks give you information about the user's wallet. Click the name of each to jump to an example of its implementation.

[comment]: <> (@dev Here's a handy markdown table generator: https://www.tablesgenerator.com/markdown_tables)

| Property                                                            | Return type                               | Description                                                                                                                   |
|---------------------------------------------------------------------|-------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------|
| [`connected`](hooks#connected-and-connecting)                       | `boolean`                                 | Wallet is connected. Returns false while connection is loading.                                                               |
| [`connecting`](hooks#connected-and-connecting)                      | `boolean`                                 | EthosConnect is in the process of detecting if the users has a connected wallet.                                              |
| `disconnect()`                                                      | `Promise<void>`                           | Method to disconnect the user's wallet from this site. The Logout button of the `WalletWidget` component has this by default. |
| [`address`](hooks#address)                                          | `SuiAddress`                              | The user's wallet address                                                                                                     |
| `getAccounts()`                                                     | `Promise<SuiAddress[]>`                   | Gets the user's connected wallet addresses. The first item in the array is the connected wallet.                              |
| [`contents`](hooks#contents)                                        | [`WalletContents`](types#wallet-contents) |                                                                                                                               |
| [`signAndExecuteTransaction()`](hooks#sign-and-execute-transaction) | `Promise<SuiTransactionResponse>`         | Takes a single `SignableTransaction` param and calls a Sui contract.                                                          |
| [`signTransaction()`](hooks#sign-transaction)                       | `Promise<SuiTransactionResponse>`         | Takes a single `SignableTransaction` param and prompts the user to sign the given transaction.                                |

### `connected` and `connecting`

The `connected` and `connecting` objects can be used in conjunction to tell you if a wallet is connected to your site or if EthosConnect is in the process of detecting if the users has a connected wallet.

```js
import { useWallet, SignInButton } from 'ethos-connect'

function App() {
  const { connected, connecting } = useWallet()

  return (
    <>
      {connecting ? (
        <div>Loading...</div>
      ) : connected ? (
        <div>
          Wallet connected
          <TheRestOfTheApp />
        </div>
      ) : (
        <div>
          No wallet connected
          <SignInButton />
        </div>
      )}
    </>
  )
}
```

### `address`

The `address` property will give you the current wallet's address

```js
import { useWallet } from 'ethos-connect'

function App() {
  const { address } = useWallet()

  return <div>Address: {address}</div>
}
```

### `contents`

The `contents` property will tell you the user's SUI balance and what coins and NFTs are in the user's wallet.

```js
import { useWallet } from 'ethos-connect'

function App() {
  const { contents } = useWallet()
  const { suiBalance, coins, nfts } = contents

  return (
    <>
      <div>Balance: {suiBalance}</div>
      <div>
        {coins.map((coin) => {
          return (
            <span>
              {coin.name}: {coin.balance}
            </span>
          )
        })}
      </div>
      <div>
        {nfts.map((nft) => {
          return <img src={nft.src} alt={nft.name} />
        })}
      </div>
    </>
  )
}
```

### `signAndExecuteTransaction`

Given the details of your contract, `signAndExecuteTransaction` will call the function and module.

```js
import { useWallet } from 'ethos-connect'

function App() {
  const { signAndExecuteTransaction } = useWallet()

  const mintDetails = {
    network: 'devNet',
    address: '0xd21d2fb75eb88b945c7ea30d96ec6040463e15cd',
    moduleName: 'game_8192',
    functionName: 'create',
    inputValues: [],
    gasBudget: 5000,
  }

  const mint = useCallback(() => {
    return signAndExecuteTransaction(mintDetails)
  }, [signAndExecuteTransaction])

  return <button onClick={mint}>
    Mint
  </div>
}
```

The return object will be of type `Transaction` and look like this:

{% callout title="RETURN TYPE NOT IMPLEMENTED" / %}

---

### `signTransaction`

The `signTransaction` method will prompt the user to sign a given transaction.

{% callout title="PARAM TYPE NOT IMPLEMENTED" / %}

```js
import { useWallet } from 'ethos-connect'

function App() {
  const { signTransaction } = useWallet()

  const unsignedTransaction = {...}

  const mint = useCallback(() => {
    return signTransaction(unsignedTransaction)
  }, [signTransaction])

  return <button onClick={mint}>
    Sign
  </div>
}
```

The return object will be of type `Transaction` and look like this:

{% callout title="RETURN TYPE NOT IMPLEMENTED" / %}
