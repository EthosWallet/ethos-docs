---
title: Account API
description: The Account API lets 
---

# Account 

The is the entity to which a set of keys are associated.  Those keys can be used to sign data and retrieve the signature. 

---

# Account Resources

We have an expanding list of REST resources for developers to use:

## Create
POST: /api/v1/accounts

## Get By Account ID
GET: /api/v1/accounts/{id}

## Get All (all accounts for a tenant)
GET: /api/v1/accounts

## Sign Base64
PUT: /api/v1/accounts/{id}/signbase64