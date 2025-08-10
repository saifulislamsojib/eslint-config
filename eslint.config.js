import getFlatConfigs from '@stack-lint/base';
import getNodeConfig from '@stack-lint/node';

export default getFlatConfigs(
  getNodeConfig(true),
  { ignores: ['**/*.d.ts'] },
  { rules: { 'import-x/no-relative-packages': 'off' } },
);
