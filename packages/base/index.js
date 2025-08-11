import js from '@eslint/js';
import { flatConfigs as importConfigs } from 'eslint-plugin-import-x';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import base from './rules/base.js';
import imports, { devDepsImportAllowedFiles } from './rules/import.js';

const allFiles = ['**/*.{js,cjs,mjs,jsx,ts,cts,mts,tsx,d.ts}'];

export default function getFlatConfigs(...configs) {
  return Object.freeze([
    { ignores: ['node_modules', 'dist', 'out', 'build', '.next'] },
    js.configs.recommended,
    importConfigs.recommended,
    {
      files: allFiles,
      settings: {
        'import-x/extensions': ['.js', '.mjs', '.cjs'],
      },
      languageOptions: {
        ecmaVersion: 2023,
        sourceType: 'module',
      },
      rules: { ...base, ...imports },
    },
    ...configs,
    prettierRecommended,
  ]);
}

export { default as testFiles } from './constants/testFiles.js';
export { default as restrictedGlobals } from './rules/restricted-globals.js';
export { allFiles, devDepsImportAllowedFiles, importConfigs };
