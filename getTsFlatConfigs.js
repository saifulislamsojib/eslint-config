import { flatConfigs as importConfigs } from 'eslint-plugin-import';
import { configs as tsEslintConfigs } from 'typescript-eslint';
import getFlatConfigs, { allFiles } from './getFlatConfigs.js';

export default function getTsFlatConfigs(
  { isNodeEsm = false, tsRootDir = '', rules } = {},
  ...rest
) {
  const files = [`${tsRootDir}**/*.{ts,tsx,d.ts}`];
  return getFlatConfigs(
    isNodeEsm,
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
          tsconfigRootDir: import.meta.dirname,
        },
      },
      rules,
    },
    ...rest,
  );
}
