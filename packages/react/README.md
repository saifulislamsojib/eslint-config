# @stack-lint/react

React-specific ESLint flat configuration for ESLint v9+.  
Built on top of `@stack-lint/base` and includes Prettier integration.
Designed for ESLint's **flat config** system — export an array from `eslint.config.js` or `eslint.config.mjs`.

---

## 📦 Installation

```bash
npm install --save-dev eslint prettier @stack-lint/base @stack-lint/react
```

---

## 🚀 Usage

Create or update your `eslint.config.js` or `eslint.config.mjs` at the root of your project:

```js
import getFlatConfigs from '@stack-lint/base';
import reactConfigs from '@stack-lint/react';

export default getFlatConfigs(...reactConfigs);
```

---

### 2️⃣ Next Js

**eslint.config.js**:

```js
import getFlatConfigs from '@stack-lint/base';
import nextConfigs from '@stack-lint/react/next';

export default getFlatConfigs(...nextConfigs);
```

---

## 📖 Explanation

- **ESLint v9 Flat Configs**  
  ESLint v9+ only supports the new flat config system. Instead of `.eslintrc`, you now define an array of configs in `eslint.config.js`.  
  Read more: [ESLint New Config System – Part 2](https://eslint.org/blog/2022/08/new-config-system-part-2/)

- **Why `@stack-lint/react`?**
  - Pre-configured for React projects.
  - Based on `@stack-lint/base` rules.
  - Includes Prettier for formatting consistency.

- **`getFlatConfigs(...configs)`**
  - Helper from `@stack-lint/base` that merges multiple flat config objects into a single export. and also provide base configs

---

## 📝 Example Project Structure

```
my-react-app/
├── eslint.config.mjs
├── package.json
├── src/
│   ├── App.jsx
│   └── index.jsx
```

---

## ✅ Run ESLint

```bash
npx eslint .
```

---

## 📜 License

MIT
