---
title: Introduction
pageTitle: EthosConnect Docs
description: The easiest sign-in experience on Sui
---

EthosConnect is an NPM package that makes it easy to connect a wallet to your dApp on Sui. It is currently available for React ([example app](/example-react-app) & [npm package](https://www.npmjs.com/package/ethos-connect)) and Vue ([example app](/example-vue-app) & [npm package](https://www.npmjs.com/package/ethos-connect-vue))

With EthosConnect you don't have to worry about which wallets can connect with your dApp. Any wallet that implements the [Sui Wallet Standard](https://github.com/MystenLabs/sui/tree/main/sdk/wallet-adapter#wallet-standard) will be able to connect to your dApp and when someone developers a new wallet that implements the Wallet Standard it will be able to connect to your dApp with no changes on your part.

And when you are ready you can enable email wallets, which allow wallet-less users to connect to your dApp through their email (social login coming soon) with no extra effort on your part (email wallets look identical to all other wallets from the dApp's perspective).

Already have the interface covered? Check out [Ethos REST API](https://api-docs.ethoswallet.xyz/rest-concepts), an OpenAPI 3.0 compliant REST API that lets you create new wallets for your customers and use them to sign data in your applications. You control the experience!

{% .lead %}

{% quick-links %}

{% quick-link title="Installation" icon="installation" href="/installation" description="Follow the step-by-step guide to installing the library." /%}

{% quick-link title="Example app with code" icon="presets" href="/example-app" description="View the code base for an example app using Ethos." /%}

{% quick-link title="Advanced API reference" icon="plugins" href="/hooks" description="Leverage the APIs to give your users a tailored experience." /%}

{% quick-link title="Theme options" icon="theming" href="/customization" description="Match the Ethos connect flow with the theme of your app." /%}

{% quick-link title="REST API reference" icon="plugins" href="/rest-concepts" description="Use our new REST API and let Ethos take care of the wallet creation and data signing." /%}


{% /quick-links %}

Have feedback on Ethos? [Send us a note](mailto:support@ethoswallet.xyz).
