import jsxA11y from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import { allFiles } from './getFlatConfigs.js';
import web from './rules/web.js';

export default Object.freeze({
  files: allFiles,
  languageOptions: {
    globals: globals.browser,
  },
  settings: {
    react: { version: '19.1' },
  },
  plugins: {
    'react-hooks': reactHooks,
    'jsx-a11y': jsxA11y,
  },
  rules: {
    ...web,
    ...react.configs['jsx-runtime'].rules,
    ...reactHooks.configs.recommended.rules,
    ...jsxA11y.flatConfigs.recommended.rules,
  },
});
