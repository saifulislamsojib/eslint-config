import confusingBrowserGlobals from '../constants/confusingBrowserGlobals.js';
import restrictedGlobals from './restricted-globals.js';

export default Object.freeze({
  'no-alert': 'warn',
  'no-script-url': 'error',
  'no-restricted-globals': restrictedGlobals.concat(confusingBrowserGlobals),
});
