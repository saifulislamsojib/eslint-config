import { Linter } from 'eslint';

export default function getFlatConfigs(
  ...configs: Linter.Config[]
): Linter.Config[];
export { flatConfigs as importConfigs } from 'eslint-plugin-import-x';
export { default as testFiles } from './constants/testFiles.js';
export { devDepsImportAllowedFiles } from './rules/import.js';
export { default as restrictedGlobals } from './rules/restricted-globals.js';
export const allFiles: string[];
