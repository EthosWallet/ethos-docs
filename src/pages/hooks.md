---
title: Hooks
description: React hooks for interacting with the wallet
---

EthosConnect ships with hooks to interact with the wallet and Sui blockchain.

---

# `useWallet`

This hook gives you information about the user's wallet. Click the name of each to jump to an example of its implementation.

[comment]: <> (@dev Here's a handy markdown table generator: https://www.tablesgenerator.com/markdown_tables)

| Property                     | Return type                                        | Description                                                                                                                                                                                                                                                                    |
| ---------------------------- | -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [`provider`](hooks#provider) | [`JsonRpcProvider`](types#json-rpc-provider)       | A read-only connection to the Sui blockchain.                                                                                                                                                                                                                                  |
| [`status`](hooks#status)     | [`EthosConnectStatus`](types#ethos-connect-status) | Wallet connection status. `loading` means EthosConnect is searching for a cached wallet. `no_connection` means the search is complete, and no connected wallet was found. `connected` means that a wallet has been successfully connected and the `wallet` object may be used. |
| [`wallet`](hooks#wallet)     | [`Wallet`](types#wallet)                           | EthosConnect is in the process of detecting if the users has a connected wallet.                                                                                                                                                                                               |

---

## `provider`

The `provider` is your read-only connection to the blockchain. You can see objects owned by an address, read transactions, and more. Full documentation from [@mysten/sui.js](http://typescript-sdk-docs.s3-website-us-east-1.amazonaws.com/classes/Provider.html).

---

## `status`

The `status` object can be used to tell you if a wallet is connected to your site or if EthosConnect is in the process of detecting if the users has a connected wallet.

`status` returns one of three possible states of the `EthosConnectStatus`](types#ethos-connect-status) enum:

- `loading`
- `no_connection`
- `connected`

They can be used like so:

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

---

## `wallet`

The `wallet` object is what is used for the majority of calls related to the user's wallet.

### `wallet.address`

A synchronous call to get the connected wallet's address.

```js
import { ethos } from 'ethos-connect'

function App() {
  const { wallet } = ethos.useWallet()

  return <div>Address: {wallet?.address}</div>
}
```

### `wallet.contents`

Used to get the wallet's SUI balance, other token balance, and NFTs. Returns an object of type [`WalletContents`](types#wallet-contents). The `contents` will update every few seconds providing
up-to-date information about the contents of the connected wallet.

The contents includes:

`suiBalance` - The total amount of Mist (the lowest denomination of Sui) in the connected wallet.

`tokens` - A breakdown of all tokens in the connected wallet. Presented as a map with the token name
as the key and an object with list of `coins` and the overall `balance` as the value for each token.

Example: `{ "0x2::sui::SUI": { balance: 500000, coins: [...] }}`

`nfts` - An array of all non-coin objects in the connected wallet.

```js
import { ethos } from 'ethos-connect'

function App() {
  const { wallet } = ethos.useWallet()

  if (!wallet) return <></>

  const { suiBalance, tokens, nfts } = wallet.contents;

  return (
    <div>
      Balance: {suiBalance}
      Tokens: {
        for (let tokenName in tokens) {
          let token = tokens[tokenName];
          return (<>
            {tokenName}: {token.balance}
          </>)
        }
      }
      Balance: {
        nfts.map((nft) => {
          return <>
            {nft.name}
            {nft.description}
          </>
        })
      }
    </div>
  )
}
```

### `wallet.disconnect()`

Disconnects the user's wallet. Returns `void`.

```js
import { ethos } from 'ethos-connect'

function App() {
  const { wallet } = ethos.useWallet()

  return <button onClick={wallet.disconnect}>Sign Out</button>
}
```

### `wallet.signAndExecuteTransaction()`

Used to sign and submit a transaction to the blockchain. Takes a [`SignableTransaction`](https://github.com/MystenLabs/sui/blob/e45b188a80a067700efdc5a099745f18e1f41aac/sdk/typescript/src/signers/txn-data-serializers/txn-data-serializer.ts#L137) and returns a [`Promise<SuiTransactionResponse>`](http://typescript-sdk-docs.s3-website-us-east-1.amazonaws.com/modules.html#SuiTransactionResponse).

```js
import { ethos } from 'ethos-connect'

function App() {
  const { wallet } = ethos.useWallet()

  const mint = useCallback(async () => {
    if (!wallet) return;

    try {
      const signableTransaction = {
        kind: "moveCall" as const,
        data: {
          packageObjectId: contractAddress,
          module: 'devnet_nft',
          function: 'mint',
          typeArguments: [],
          arguments: [
            "Example NFT Name",
            'This is a description',
            'https://ethoswallet.xyz/assets/images/ethos-email-logo.png'
          ],
          gasBudget: 10000
        }
      };

      wallet.signAndExecuteTransaction(signableTransaction)
    } catch (error) {
      console.log(error);
    }
  }, [wallet]);

  return <>...</>
}
```

### `wallet.requestPreapproval()`

As blockchain games are becoming more on-chain and on-chain interactions less expensive, it becomes sluggish to request the user to sign each individual transaction. Some wallets, ([Ethos Wallet](ethoswallet.xyz)) being the first, allow for users to safely preapprove transactions. This allows the app to sign multiple transactions within a strict set of guidelines.

Learn more in our [blog post about preapproving transactions](https://medium.com/@ethoswallet/why-we-built-on-sui-part-3-complex-nfts-are-the-future-of-apps-f6c2a4963fab) and our fully on-chain game, [Sui 8192](https://ethoswallet.github.io/Sui8192/)

Takes a [`Preapproval`](types#preapproval) and returns a `Promise<boolean>` denoting if the user accepted the request.

```js
import { ethos } from 'ethos-connect'

function App() {
  const { wallet } = ethos.useWallet()

  const mint = useCallback(async () => {
    if (!wallet) return

    try {
      const result = await wallet.preapprove({
        signer: walletSigner,
        preapproval: {
          packageObjectId: contractAddress,
          objectId: activeGameAddress,
          module: 'game_8192',
          function: 'make_move',
          description:
            'Pre-approve moves in the game so you can play without signing every transaction.',
          totalGasLimit: 500000,
          maxTransactionCount: 25,
        },
      })

      preapproval = result.approved
    } catch (e) {
      console.log('Error requesting preapproval', e)
      preapproval = false
    }
  }, [wallet])

  return <>...</>
}
```

### `wallet.sign()`

Prompts the user to sign a message.

```js
import { ethos } from 'ethos-connect'

function App() {
  const { wallet } = ethos.useWallet()

  const mint = useCallback(async () => {
    if (!wallet) return

    try {
      const result = await wallet.sign({
        message: 'sign me!',
      })
    } catch (e) {
      console.log('Error signing message', e)
    }
  }, [wallet])

  return <>...</>
}
```
