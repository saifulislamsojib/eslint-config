import globals from 'globals';
import getFlatConfigs, { allFiles } from '../index.js';
import webRules from '../rules/web.js';

export const webConfigs = Object.freeze({
  files: allFiles,
  languageOptions: {
    globals: { ...globals.es2023, ...globals.browser },
  },
  rules: webRules,
});

export default function getWebFlatConfigs(...configs) {
  return getFlatConfigs(webConfigs, ...configs);
}
