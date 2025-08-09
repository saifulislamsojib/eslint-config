import { allFiles } from 'eslint-config-base';
import { flatConfigs as importConfigs } from 'eslint-plugin-import';
import { configs as tsEslintConfigs } from 'typescript-eslint';
import tsRules from './rules/rules.js';

export default function getTsConfigs({
  tsconfigRootDir = import.meta.dirname,
  tsRootDir = '',
  rules = {},
} = {}) {
  const files = [`${tsRootDir}**/*.{ts,cts,mts,tsx,d.ts}`];
  return Object.freeze([
    importConfigs.typescript,
    {
      files: allFiles,
      settings: {
        'import/resolver': {
          typescript: {
            alwaysTryTypes: true,
            project: './tsconfig.json',
            extensions: ['.ts', '.cts', '.mts', '.tsx'],
          },
        },
      },
    },
    ...tsEslintConfigs.recommendedTypeChecked.map((config) => ({
      files,
      ...config,
    })),
    {
      files,
      languageOptions: {
        parserOptions: {
          project: true,
          tsconfigRootDir,
        },
      },
      rules: { ...tsRules, ...rules },
    },
  ]);
}
