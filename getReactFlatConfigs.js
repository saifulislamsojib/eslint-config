import react from 'eslint-plugin-react';
import getFlatConfigs from './getFlatConfigs.js';
import reactConfig from './reactConfig.js';

export default function getReactFlatConfigs(...rest) {
  return getFlatConfigs(false, react.configs.flat.recommended, reactConfig, ...rest);
}
