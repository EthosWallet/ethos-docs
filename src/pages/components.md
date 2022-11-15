---
title: Components
description: Commonly used components.
---

EthosConnect Components make it easy to assemble the basic building blocks for a dApp experience.

---

## `AddressWidget`

The `ethos.components.AddressWidget` is a dynamic widget that provides:

- A `Sign In` button with customizable text
- A widget displaying the connected wallet's address and Sui balance
- An optional drop-down menu with additional functionality:
  - Click to copy the wallet address of the connected wallet
  - A direct link to the Ethos Wallet Explorer
  - A button to log out or disconnect the connected wallet
  - The ability to remove or add your own buttons
- The ability to display a message to a user

```js
import { ethos } from 'ethos-connect'

function App() {
  return (
    <div>
      <ethos.components.AddressWidget />
    </div>
  )
}
```

## Customization Options

The `AddressWidget` can be customized with any of the options specified in the [`AddressWidgetProps`](types#address-widget-props)

### Hiding the dropdown menu

```js
import { ethos } from 'ethos-connect'

function App() {
  return (
    <div>
      <ethos.components.AddressWidget includeMenu={false} />
    </div>
  )
}
```

### Changing the color of the buttons in the dropdown menu

```js
import { ethos } from 'ethos-connect'

function App() {
  return (
    <div>
      <ethos.components.AddressWidget buttonColor="red" />
    </div>
  )
}
```

### Removing buttons from the dropdown menu

You can exclude the default buttons from the `AddressWidget` dropdown menu. The options to exclude are:

- ethos.enums.AddressWidgetButtons.CopyWalletAddress
- ethos.enums.AddressWidgetButtons.WalletExplorer
- ethos.enums.AddressWidgetButtons.Logout

```js
import { ethos } from 'ethos-connect'

function App() {
  return (
    <div>
      <ethos.components.AddressWidget />
    </div>
  )
}
```

### Adding extra buttons to the dropdown menu

In order for a new button to look similar to the existing buttons we recommend using
`ethos.components.MenuButton` like so, with an onClick and children that transition between
black and white on hover:

#### Defining the extra button

```js
import { useCallback } from 'react'
import { ethos } from 'ethos-connect'

const {
  components: { MenuButton },
} = ethos

const NewGameButton = () => {
  const newGame = useCallback(() => {
    // function logic here
  }, [])

  const children = useCallback(
    (hover: boolean) => (
      <>
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 9V15M15 12H9M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
            stroke={hover ? 'white' : 'black'}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        New Game
      </>
    ),
    []
  )

  return (
    <MenuButton
      className="item-center flex gap-1"
      onClick={newGame}
      hoverChildren={children(true)}
    >
      {children(false)}
    </MenuButton>
  )
}

export default NewGameButton
```

#### Using the extra button

```js
import { ethos } from 'ethos-connect'
import NewGameButton from './NewGameButtons'

function App() {
  return (
    <div>
      <ethos.components.AddressWidget
        extraButtons={[<NewGameButton key="new-game" />]}
      />
    </div>
  )
}
```
