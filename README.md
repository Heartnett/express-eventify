# express-eventify

[![Greenkeeper badge](https://badges.greenkeeper.io/Heartnett/express-eventify.svg)](https://greenkeeper.io/)
[![Travis](https://img.shields.io/travis/Heartnett/express-eventify.svg)](https://travis-ci.org/Heartnett/express-eventify) [![Dependency Status](https://gemnasium.com/badges/github.com/Heartnett/express-eventify.svg)](https://gemnasium.com/github.com/Heartnett/express-eventify) [![David](https://img.shields.io/david/dev/Heartnett/express-eventify.svg)](https://david-dm.org/Heartnett/express-eventify?type=dev) [![Version npm](https://img.shields.io/npm/v/express-eventify.svg?style=flat-square)](https://www.npmjs.com/package/electron-aware) [![npm Downloads](https://img.shields.io/npm/dm/express-eventify.svg?style=flat-square)](https://www.npmjs.com/package/express-eventify) [![license](https://img.shields.io/github/license/Heartnett/electron-aware.svg)](https://github.com/Heartnett/express-eventify/blob/master/LICENSE) [![Gratipay User](https://img.shields.io/gratipay/user/Heartnett.svg)](https://gratipay.com/Heartnett/) [![Package Quality](http://npm.packagequality.com/shield/express-eventify.svg)](http://packagequality.com/#?package=express-eventify)

[![NPM](https://nodei.co/npm/express-eventify.png?downloads=true)](https://nodei.co/npm/express-eventify/) [![Package Quality](http://npm.packagequality.com/badge/express-eventify.png)](http://packagequality.com/#?package=express-eventify)

Converts an express app instance into an object which can subscribe to REST requests like events.

---
## Installation
```sh
# Install via NPM
npm install express-eventify
# OR
# Install via Yarn
yarn add express-eventify
```
---
## Usage
`express-eventify` extends an express app by introducing the `$on` function.

### Initialize
```javascript
const express = require('express');
const eventify = require('express-eventify');

// create a new express app
let app = express();
// initialize the new express app
app = eventify(app);
```
### Subscribe
There are two ways of subscribing to express with `express-eventify`

```javascript
// notice the '!' - it seperates the REST method and the path i.e. "{method}!{path}"
// in this case it's 'get' and '/'
app.$on("get!/", (req, res) => res.send("Using express-eventify")); 
```
The second way discribes shows how the `$on` function consumes an object as a parameter.
```javascript
app.$on({
    get: {
        "/": function(req, res) {
            // all parameters passed to a normal express method 
            // are also sent to this callback (request, response, next, etc..)
        }
    },
    post: {
        // post routes
    }
});
```
---
## Notes
The following express methods are wrapped by `express-eventify`:
- delete
- get
- param
- post
- put
- render
---
## License
[MIT](https://github.com/heartnett/express-eventify/blob/master/LICENSE)

----
## Donating
Please support this project via [gratipay](https://gratipay.com/Heartnett/).

[![Support via Gratipay](https://cdn.rawgit.com/gratipay/gratipay-badge/2.3.0/dist/gratipay.svg)](https://gratipay.com/Heartnett/)