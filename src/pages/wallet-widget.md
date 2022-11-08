---
title: Wallet widget
description: The component that shows the users balance and more
---

The wallet widget is the UI component that shows the user's balance and various default and customizable action buttons.

For color customizations, refer to [Theming](theming).

---

## Show/hide balance

By default the connected wallet's SUI balance is shown. However, this may be disabled.

```js
import { WalletWidget } from 'ethos-connect';

const YourApp = () => {
  return (
    <WalletWidget
        hideBalance={true}
    />
  );
};
```

---

## Changing the buttons

This component comes with a few buttons by default: "Wallet explorer" and "Log out". However, these can be removed and/or more buttons can be added.

### Adding custom buttons

```js
import { WalletWidget } from 'ethos-connect';
import { PlusIcon } from '@heroicons/react/24/outline';

const startGame = () => {
    // Your custom action
}

const customButtons = [
    {
        label: 'Start new game',
        icon: <PlusIcon />,
        action: startGame
    }
]

const YourApp = () => {
  return (
    <WalletWidget
        customButtons={customButtons}
    />
  );
};
```

The `icon` property takes in any JSX. We recommend using [Heroicons](https://heroicons.com/). **No need to add classes to your icon, EthosConnect will take care of that.**


### Removing default buttons

You may hide any of the default buttons by passing in optional properties into the `WalletWidget` component.

```js
import { WalletWidget } from 'ethos-connect';

const YourApp = () => {
  return (
    <WalletWidget
        hideExplorerButton={true}
        hideLogoutButton={true}
    />
  );
};
```

The `icon` property takes in any JSX. We recommend using [Heroicons](https://heroicons.com/).

{% callout title="Note" %}
No need to add classes to your icon, EthosConnect will take care of that.
{% /callout %}