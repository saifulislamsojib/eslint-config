import globals from 'globals';
import getFlatConfigs, { allFiles } from '../index.js';
import webRules from '../rules/web.js';

export const webConfigs = Object.freeze({
  files: allFiles,
  languageOptions: {
    /**
     * @type {typeof globals}
     */
    globals: { ...globals.es2023, ...globals.browser },
  },
  rules: webRules,
});

/**
 * @param configs  {Linter.Config[]}
 * @returns {Linter.Config[]}
 */
export default function getWebFlatConfigs(...configs) {
  return getFlatConfigs(webConfigs, ...configs);
}
