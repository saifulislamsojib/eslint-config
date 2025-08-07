import globals from 'globals';
import getFlatConfigs, { allFiles } from './getFlatConfigs.js';
import web from './rules/web.js';

export default function getWebFlatConfigs(...rest) {
  return getFlatConfigs(
    false,
    {
      files: allFiles,
      languageOptions: {
        globals: globals.browser,
      },
      rules: web,
    },
    ...rest,
  );
}
