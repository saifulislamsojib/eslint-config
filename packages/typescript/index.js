import { importConfigs } from '@stack-lint/base';
import tsEslint from '@typescript-eslint/eslint-plugin/use-at-your-own-risk/raw-plugin';
import tsRules, { dtsOnlyRules } from './rules/index.js';

export default function getTsConfigs({
  tsconfigRootDir,
  tsRootDir = '',
  rules = {},
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
      rules: { ...tsRules, ...rules },
    },
    {
      files: [`${tsRootDir}**/*.d.ts`],
      rules: dtsOnlyRules,
    },
  ]);
}
