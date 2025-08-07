import react from 'eslint-plugin-react';
import getTsFlatConfigs from './getTsFlatConfigs.js';
import reactConfig from './reactConfig.js';

export default function getReactTsFlatConfigs(tsRules, ...rest) {
  return getTsFlatConfigs(
    { isNodeEsm: false, rules: tsRules },
    react.configs.flat.recommended,
    reactConfig,
    ...rest,
  );
}
