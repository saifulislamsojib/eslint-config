import next from '@next/eslint-plugin-next';
import globals from 'globals';
import reactConfigs from './index.js';

export default Object.freeze([
  { ignores: ['.next', 'next-env.d.ts'] },
  ...reactConfigs,
  {
    languageOptions: { globals: globals.node },
    plugins: { '@next/next': next },
    rules: {
      'import-x/no-nodejs-modules': 'off',
      ...next.configs.recommended.rules,
      ...next.configs['core-web-vitals'].rules,
    },
  },
]);
