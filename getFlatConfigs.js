import js from '@eslint/js';
import { flatConfigs as importConfigs } from 'eslint-plugin-import';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import base from './rules/base.js';
import esmRestGlobals from './rules/esm-rest-globals.js';
import imports from './rules/import.js';
import restrictedGlobals from './rules/restricted-globals.js';

export const allFiles = ['**/*.{js,cjs,mjs,jsx,ts,cts,mts,tsx,d.ts}'];

export default function getFlatConfigs(isNodeEsm = false, flat = {}, ...rest) {
  const rules = { ...base, ...imports };

  if (isNodeEsm) {
    rules['no-restricted-globals'] = esmRestGlobals;
    rules['import/no-commonjs'] = 'error';
    rules['import/extensions'] = ['error', 'ignorePackages'];
  } else {
    rules['no-restricted-globals'] = restrictedGlobals;
  }

  return Object.freeze([
    { ignores: ['node_modules', 'dist', 'out', 'build', '.next'] },
    js.configs.recommended,
    importConfigs.recommended,
    prettierRecommended,
    flat,
    {
      files: allFiles,
      languageOptions: {
        ecmaVersion: 2023,
        sourceType: 'module',
      },
      rules,
    },
    ...rest,
  ]);
}
