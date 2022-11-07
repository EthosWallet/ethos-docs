---
title: Sign in button
description: Customize the button to sign in
---

This is the button the user will click on to see their options for logging in. You can customize the text or press this button programmatically.

---

## Button label

Customize the button label by simply adding text as a child to the component. 

```js
import { SignInButton } from 'ethos-connect';

const YourApp = () => {
  return (
    <SignInButton
    >
        Connect wallet
    <SignInButton />
  );
};
```

Note the default text is "Sign in".

---

## Opening the sign in modal programatically

If you want to simulate the click of the `SignInButton`, you can programatically open and close the sign in modal.

```js
import { ethos } from 'ethos-connect';

const CustomSignInButtons = () => {
  return (
    <>
        <button
            onClick={() => ethos.showSignInModal}
        >
            Show sign in
        <button />
        <button
            onClick={() => ethos.hideSignInModal}
        >
            Hide sign in
        <button />
    </>
  );
};
```