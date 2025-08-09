import js from '@eslint/js';
import { flatConfigs as importConfigs } from 'eslint-plugin-import';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import base from './rules/base.js';
import imports from './rules/import.js';

export { default as testFiles } from './constants/testFiles.js';
export { default as restrictedGlobals } from './rules/restricted-globals.js';

export const allFiles = ['**/*.{js,cjs,mjs,jsx,ts,cts,mts,tsx,d.ts}'];

export default function getFlatConfigs(...rest) {
  return Object.freeze([
    { ignores: ['node_modules', 'dist', 'out', 'build', '.next'] },
    js.configs.recommended,
    importConfigs.recommended,
    {
      files: allFiles,
      languageOptions: {
        ecmaVersion: 2023,
        sourceType: 'module',
      },
      settings: {
        'import/resolver': {
          typescript: { alwaysTryTypes: true },
        },
      },
      rules: { ...base, ...imports },
    },
    ...rest,
    prettierRecommended,
  ]);
}
