import { allFiles } from 'eslint-config-base';
import importConfigs from 'eslint-config-base/import-plugin';
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';
import { configs as tsEslintConfigs } from 'typescript-eslint';
import tsRules from './rules/index.js';

export default function getTsConfigs({
  tsconfigRootDir,
  tsRootDir = '',
  rules = {},
} = {}) {
  const files = [`${tsRootDir}**/*.{ts,cts,mts,tsx,d.ts}`];
  return Object.freeze([
    importConfigs.typescript,
    {
      files: allFiles,
      settings: {
        'import-x/resolver-next': [
          createTypeScriptImportResolver({
            alwaysTryTypes: true,
            project: './tsconfig.json',
          }),
        ],
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
          projectService: true,
          tsconfigRootDir,
        },
      },
      rules: { ...tsRules, ...rules },
    },
  ]);
}
