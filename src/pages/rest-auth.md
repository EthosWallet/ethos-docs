---
title: Authorization
description: The REST API allows developers server-to-server access to Ethos products using an API Key for authentication and authorization.
---

Ethos' API is protected by API Keys that are meant to be used server-to-server only.

---

## How to get set up
Contact Ethos Support to get an API Key and get started.  Self service setup tools are planned for 2023.

[support@ethoswallet.xyz](mailto:support@ethoswallet.xyz) 

---

Once you get your API key, authorization is supported via the HTTP Authorization Header:

- Location: HTTP Header
- HTTP Header Name: Authorization
- HTTP Header Value: <api_key> provided by Ethos

** Note: The API Key should never be exposed to the public via your client applications.
