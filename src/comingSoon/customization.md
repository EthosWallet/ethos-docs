===========
COMING SOON
===========

The EthosConnect UI can be customized to match your branding. You can change the theme to light or dark, as well as add a custom accent color.

---

## Theme

There are two options for theme, which govern the background color and text color:

- `Light` (default)
- `Dark`

```js
import { EthosConnectProvider, Themes } from 'ethos-connect';

const App = () => {
  return (
    <EthosConnectProvider
      theme={Themes.Dark}
    >
      <YourApp />
    <EthosConnectProvider />
  );
};
```
---

## Accent color

You can use any hex value for your accent color. This will affect the button color and other primary accents.

```js
import { EthosConnectProvider } from 'ethos-connect';

const App = () => {
  return (
    <EthosConnectProvider
      accentColor="#0891b2"
    >
      <YourApp />
    <EthosConnectProvider />
  );
};
```

Which would look like this:
![Sign in button with accent color](/images/accent-color-sign-in-button.png)
