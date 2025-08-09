import testFiles from '../constants/testFiles.js';

export default Object.freeze({
  'import/no-self-import': 'error',
  'import/no-named-default': 'error',
  'import/no-absolute-path': 'error',
  'import/prefer-default-export': 'error',
  'import/newline-after-import': 'error',
  'import/no-dynamic-require': 'error',
  'import/no-import-module-exports': 'error',
  'import/no-cycle': ['error', { maxDepth: '∞' }],
  'import/no-useless-path-segments': 'error',
  'import/order': ['error', { groups: [['builtin', 'external', 'internal']] }],
  'import/no-duplicates': 'error',
  'import/first': 'error',
  'import/no-mutable-exports': 'error',
  'import/no-amd': 'error',
  'import/no-deprecated': 'warn',
  'import/extensions': [
    'error',
    'ignorePackages',
    {
      js: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
    },
  ],
  'import/no-extraneous-dependencies': [
    'error',
    {
      devDependencies: [
        '{vite,vitest,eslint,next,postcss,jest,rollup}.config.{js,ts,mjs,mts,cjs}',
        ...testFiles,
      ],
    },
  ],
});
