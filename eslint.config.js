// @ts-check

import getFlatConfigs from '@stack-lint/base';
// import reactConfigs from '@stack-lint/react';
import getNodeConfig from '@stack-lint/node';

export default getFlatConfigs(getNodeConfig(true), { ignores: ['**/*.d.ts'] });
