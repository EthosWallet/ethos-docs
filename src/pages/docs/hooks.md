---
title: Hooks
description: React hooks for interacting with the wallet
---

EthosConnect ships with hooks to interact with the wallet and Sui blockchain.

---

## Wallet hooks

These hooks give you information about the user's wallet.

### useConnect

The `useConnect` hook will tell you if a wallet is connected to your site, or if EthosConnect is in the process of detecting if the users has a connected wallet.

```js
import { useConnect, SignInButton } from 'ethos-wallet-beta'

function App() {
  const { isConnected, isLoading, error } = useConnect()

  return (
    <>
        {
            isLoading ? (
                <div>Loading...</div>
            ) : isConnected ? (
                <div>
                    Wallet connected
                    <TheRestOfTheApp />
                </div>
                ) : (
                <div>
                    No wallet connected
                    <SignInButton />
                </div>
            )
        }

        {error && <div>{error.message}</div>}
    </>
  )
}
```

### useWalletContents

The `useWalletContents` hook will tell you what coins and NFTs are in the user's wallet.

```js
import { useWalletContents } from 'ethos-wallet-beta'

function App() {
  const { suiBalance, coins, nfts } = useWalletContents()

  return (
    <>
      <div>
          Balance: {suiBalance}
      </div>
      <div>
          {coins.map(coin => {
            return <span>{coin.name}: {coin.balance}</span>
          })}
      </div>
      <div>
          {nfts.map(nft => {
            return (
              <img
                src={nft.src}
                alt={nft.name}
              />
            )
          })}
      </div>
    </>
  )
}
```
