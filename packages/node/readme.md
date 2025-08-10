# @stack-lint/node

**Node.js ESLint configuration** with best practices tailored for backend and server-side JavaScript projects.  
Part of the **Stack Lint** family — designed to be combined with `@stack-lint/base` and others.

---

## 📦 Installation

```sh
npm install --save-dev eslint @stack-lint/base @stack-lint/node
# or
yarn add -D eslint @stack-lint/base @stack-lint/node
# or
pnpm add -D eslint @stack-lint/base @stack-lint/node
```

## ⚙️ Usage

You can import and compose ESLint configs programmatically for advanced use cases:

```js
import getFlatConfigs from '@stack-lint/base';
import getNodeConfig from '@stack-lint/node';

export default getFlatConfigs(
  getNodeConfig(true), // Pass `true` if using ESM, otherwise `false` or omit
);
```

### Explanation

- `getNodeConfig(true)` returns the Node.js ESLint configuration optimized for ESM (ECMAScript Modules) environments.
- Passing `true` enables ESM-specific rules and settings; pass `false` or omit the argument for CommonJS environments.
- `getFlatConfigs(...)` takes one or more ESLint config objects and merges them into a single flat configuration that ESLint can directly use.
- This allows you to dynamically compose and customize your ESLint setup by combining multiple modular configs programmatically.
