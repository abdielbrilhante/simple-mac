# simple-mac
Shamelessly simple MAC address getter for Node.js

I needed to obtain the MAC address in a few Electron-based systems in the company I currently work at, and [getmac](https://www.npmjs.com/package/getmac) was not being very reliable once they were used in production. The blame for that is **not** on the NPM package, but on the Windows executable that it calls to get the address, so I made this (kinda overkill, I know) package, which comprises of just a few lines using Node's `OS` to get the available addresses.

## Usage

```node
const addresses = require('simple-mac');

console.log(addresses()) // Prints array with available MAC addresses
console.log(addresses(true)) // Does not filter internal/non-accessible interfaces
```
