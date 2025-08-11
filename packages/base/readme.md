# @stack-lint/base

Base ESLint flat configuration for ESLint v9+.  
Includes Prettier integration and works with the ESLint **flat config** system (ESM).  
This package serves as the foundation for other `@stack-lint` configurations like React, Node, Web, and TypeScript.

---

## 📦 Installation

```sh
npm install --save-dev eslint prettier @stack-lint/base
# or
yarn add -D eslint prettier @stack-lint/base
# or
pnpm add -D eslint prettier @stack-lint/base
```

---

## 🚀 Usage

You can combine `@stack-lint/base` with other `@stack-lint` configs depending on your project type.

### 1️⃣ Base Only

**eslint.config.js** (or **eslint.config.mjs** if not `"type": "module"`):

```js
import getFlatConfigs from '@stack-lint/base';

export default getFlatConfigs();
```

---

### 2️⃣ Base Web

**eslint.config.js**:

```js
import getWebFlatConfigs from '@stack-lint/base/web';

export default getWebFlatConfigs();
```

---

### 3️⃣ Base + React

```bash
npm install --save-dev @stack-lint/react
# or
yarn add -D @stack-lint/react
# or
pnpm add -D @stack-lint/react
```

**eslint.config.js**:

```js
import getFlatConfigs from '@stack-lint/base';
import reactConfigs from '@stack-lint/react';

export default getFlatConfigs(...reactConfigs);
```

---

### 4️⃣ Base + Node

```bash
npm install --save-dev @stack-lint/node
# or
yarn add -D @stack-lint/node
# or
pnpm add -D @stack-lint/node
```

**eslint.config.js**:

```js
import getFlatConfigs from '@stack-lint/base';
import getNodeConfig from '@stack-lint/node';

export default getFlatConfigs(getNodeConfig(true)); // true if ESM, false or omit if CJS
```

---

### 5️⃣ Base + TypeScript

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
import getTsConfigs from '@stack-lint/typescript';

export default getFlatConfigs(
  ...getTsConfigs({
    tsconfigRootDir: import.meta.dirname,
    // tsRootDir: 'src/' your tsconfigs files rootDir, if * then no need the field
  }),
);
```

---

### 6️⃣ Base + React + TypeScript

```bash
npm install --save-dev @stack-lint/react @stack-lint/typescript typescript
# or
yarn add -D @stack-lint/react @stack-lint/typescript typescript
# or
pnpm add -D @stack-lint/react @stack-lint/typescript typescript
```

**eslint.config.js**:

```js
import getFlatConfigs from '@stack-lint/base';
import reactConfigs from '@stack-lint/react';
import getTsConfigs from '@stack-lint/typescript';

export default getFlatConfigs(
  ...reactConfigs,
  ...getTsConfigs({ tsconfigRootDir: import.meta.dirname }),
);
```

---

### 7️⃣ Base + Node + TypeScript

```bash
npm install --save-dev @stack-lint/node @stack-lint/typescript typescript
# or
yarn add -D @stack-lint/node @stack-lint/typescript typescript
# or
pnpm add -D @stack-lint/node @stack-lint/typescript typescript
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

## 📖 Notes

- ESLint v9+ **only** supports the new flat config system.  
  Instead of `.eslintrc`, you define your config in `eslint.config.js` or `eslint.config.mjs`.
- If your project is **not** `"type": "module"`, rename the file to `eslint.config.mjs`.

More info: [ESLint New Config System – Part 2](https://eslint.org/blog/2022/08/new-config-system-part-2/)

---

## ✅ Run ESLint

```bash
npx eslint .
```

---

## 📜 License

MIT
