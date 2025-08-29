import confusingBrowserGlobals from '../constants/confusingBrowserGlobals.js';
import restrictedGlobals from './restricted-globals.js';

export default {
  'no-alert': 'warn',
  'no-script-url': 'error',
  'no-restricted-globals': restrictedGlobals.concat(confusingBrowserGlobals),
  'import-x/no-nodejs-modules': ['error', { allow: ['path'] }],
  'import-x/no-commonjs': 'error',
};
