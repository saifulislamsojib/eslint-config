import { restrictedGlobals } from '../../base/index.js';

export default restrictedGlobals.concat([
  {
    name: 'require',
    message: '`require` is not available in ESM. Use `import` instead.',
  },
  {
    name: 'module',
    message: '`module` is not available in ESM. Use `export` instead.',
  },
  {
    name: 'exports',
    message: '`exports` is not available in ESM. Use `export` instead.',
  },
  {
    name: '__dirname',
    message:
      '`__dirname` is not available in ESM. Use `import.meta.dirname` instead.',
  },
  {
    name: '__filename',
    message:
      '`__filename` is not available in ESM. Use `import.meta.filename` instead.',
  },
]);
