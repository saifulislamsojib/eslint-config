# @stack-lint/node

**Node.js ESLint configuration** with best practices tailored for backend and server-side JavaScript projects.  
Part of the **Stack Lint** family — designed to be combined with `@stack-lint/base` and others.

---

## 📦 Installation

```sh
npm install --save-dev eslint prettier @stack-lint/base @stack-lint/node
# or
yarn add -D eslint prettier @stack-lint/base @stack-lint/node
# or
pnpm add -D eslint prettier @stack-lint/base @stack-lint/node
```

## 🚀 Usage

**eslint.config.js** (or **eslint.config.mjs** if not `"type": "module"`):

```js
import getFlatConfigs from '@stack-lint/base';
import getNodeConfig from '@stack-lint/node';

export default getFlatConfigs(getNodeConfig(true)); // true if ESM, false or omit if CJS
```

### Node + TypeScript

```bash
npm install --save-dev @stack-lint/typescript typescript
# or
yarn add -D @stack-lint/typescript typescript
# or
pnpm add -D @stack-lint/typescript typescript
```

**eslint.config.js**:

```js
import getFlatConfigs from '@stack-lint/base';
import getNodeConfig from '@stack-lint/node';
import getTsConfigs from '@stack-lint/typescript';

export default getFlatConfigs(
  getNodeConfig(true), // true if ESM, false or omit if CJS
  ...getTsConfigs({
    tsconfigRootDir: import.meta.dirname,
    // tsRootDir: 'src/' your tsconfigs files rootDir, if * then no need the field
  }),
);
```

---

### Explanation

- `getNodeConfig(true || { extension: true })` returns the Node.js ESLint configuration optimized for ESM (ECMAScript Modules) environments.
- Passing `true` enables ESM-specific rules and settings; pass `false` or omit the argument for CommonJS environments.
- Passing `{ extension: true }` enables ESM-specific rules and settings and `extension: true` for omit extension check if you use bundler for resolve extension
- `getFlatConfigs(...)` takes one or more ESLint config objects and merges them into a single flat configuration that ESLint can directly use.
