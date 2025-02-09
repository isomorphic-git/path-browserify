# path-browserify [![Tests](https://github.com/isomorphic-git/path-browserify/actions/workflows/test.yml/badge.svg)](https://github.com/isomorphic-git/path-browserify/actions/workflows/test.yml)

> The `path` module from Node.js for browsers

This implements the Node.js [`path`][path] module for environments that do not have it, like browsers.

> `path-browserify` currently matches the **Node.js 10.3** API.

## Install

```
npm install @isomorphic-git/path-browserify
```

## Usage

```javascript
import path from '@isomorphic-git/path-browserify';

const filename = 'logo.png';
const logo = path.join('./assets/img', filename);
document.querySelector('#logo').src = logo;
```

Methods under `path` can be imported individually.

```javascript
import { join } from '@isomorphic-git/path-browserify';
```

If your project uses CommonJS, this is also supported.

```javascript
const path = require('@isomorphic-git/path-browserify');
```

## API

See the [Node.js path docs][path]. `path-browserify` currently matches the Node.js 10.3 API.
`path-browserify` only implements the POSIX functions, not the win32 ones.

## Contributing

PRs are very welcome! The main way to contribute to `path-browserify` is by porting features, bugfixes and tests from Node.js. Ideally, code contributions to this module are copy-pasted from Node.js and transpiled to ES5, rather than reimplemented from scratch. Matching the Node.js code as closely as possible makes maintenance simpler when new changes land in Node.js.
This module intends to provide exactly the same API as Node.js, so features that are not available in the core `path` module will not be accepted. Feature requests should instead be directed at [nodejs/node](https://github.com/nodejs/node) and will be added to this module once they are implemented in Node.js.

If there is a difference in behaviour between Node.js's `path` module and this module, please open an issue!

## License

[MIT](./LICENSE)

[path]: https://nodejs.org/docs/v10.3.0/api/path.html
