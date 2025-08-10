import { allFiles } from '@stack-lint/base';
import globals from 'globals';
import esmRestGlobals from './rules/esm-rest-globals.js';

/**
 * @returns {Linter.Config}
 */
export default function getNodeConfig(isNodeEsm = false) {
  const globalsObj = { ...globals.es2023, ...globals.node };

  const rules = {};
  if (isNodeEsm) {
    globalsObj.__dirname = 'off';
    globalsObj.__filename = 'off';
    globalsObj.exports = 'off';
    globalsObj.module = 'off';
    globalsObj.require = 'off';
    rules['no-restricted-globals'] = esmRestGlobals;
    rules['import-x/no-commonjs'] = 'error';
    rules['import-x/extensions'] = ['error', 'ignorePackages'];
  }
  return Object.freeze({
    files: allFiles,
    languageOptions: { globals: globalsObj },
    rules,
  });
}
