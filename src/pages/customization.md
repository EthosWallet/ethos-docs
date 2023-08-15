---
title: Customization
description: Using and customizing the themes
---

The EthosConnect sign-in modal copy can be edited to your liking.

---

## Modal Text

The dApp name, icon, and message can be edited:

```js
import { EthosConnectProvider } from 'ethos-connect';

const App = () => {
  return (
    <EthosConnectProvider
      dappName="<your dApp's Name>"
      dappIcon={<ExampleIcon />}
      connectMessage='Your connect message goes here!'
    >
      <YourApp />
    </EthosConnectProvider>
  );
};
```

Which would look like this:

![Sign in button with accent color](/images/modal-copy-customization.png)

---

{% callout title="Note" %}
Custom light/dark theme and accent colors are coming soon.
{% /callout %}
