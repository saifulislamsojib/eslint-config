import { importConfigs } from '@stack-lint/base';
import tsEslint from '@typescript-eslint/eslint-plugin/use-at-your-own-risk/raw-plugin';
import tsRules, { dtsOnlyRules } from './rules/index.js';

export default function getTsConfigs({
  tsconfigRootDir,
  tsRootDir = '',
  rules = {},
  typeDefinition = 'type',
} = {}) {
  const files = [`${tsRootDir}**/*.{ts,cts,mts,tsx,d.ts}`];
  return Object.freeze([
    ...tsEslint.flatConfigs['flat/recommended-type-checked'].map((config) => ({
      files,
      ...config,
    })),
    {
      files,
      settings: importConfigs.typescript.settings,
      languageOptions: {
        parserOptions: {
          projectService: true,
          tsconfigRootDir,
        },
      },
      rules: {
        ...tsRules,
        '@typescript-eslint/consistent-type-definitions': [
          'error',
          typeDefinition,
        ],
        ...rules,
      },
    },
    {
      files: [`${tsRootDir}**/*.d.ts`],
      rules: dtsOnlyRules,
    },
  ]);
}
