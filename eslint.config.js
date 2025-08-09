import getFlatConfigs from './packages/base/index.js';
import nodeConfigs from './packages/node/index.js';

export default getFlatConfigs(nodeConfigs(true));
