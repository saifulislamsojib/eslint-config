import getFlatConfigs from './packages/base/index.js';
import getNodeConfig from './packages/node/index.js';

export default getFlatConfigs(getNodeConfig(true), {
  rules: {
    'import-x/no-relative-packages': 'off',
  },
});
