---
title: Theming
description: Using and customizing the themes
---

The EthosConnect UI can be cusromized to match your branding. You can change the theme to light or dark, as well as add a custom accent color.

---

## Theme

There are two options for theme, which govern the background color and text color:

- `Light` (default)
- `Dark`

```js
import { EthosWrapper, Themes } from 'ethos-wallet-beta';

const App = () => {
  return (
    <EthosProvider
      theme={Themes.Dark}
    >
      <YourApp />
    <EthosProvider />
  );
};
```
---

## Accent color

You can use any hex value for your accent color. This will affect the button color and other primary accents.

```js
import { EthosWrapper } from 'ethos-wallet-beta';

const App = () => {
  return (
    <EthosProvider
      accentColor="#0891b2"
    >
      <YourApp />
    <EthosProvider />
  );
};
```

Which would look like this:
![Sign in button with accent color](/images/accent-color-sign-in-button.png)
