import globals from 'globals';
import getFlatConfigs, { allFiles } from './getFlatConfigs.js';

export default function getNodeFlatConfigs(isNodeEsm = false, ...rest) {
  const globalsObj = { ...globals.es2023, ...globals.node };
  if (isNodeEsm) {
    globalsObj.__dirname = 'off';
    globalsObj.__filename = 'off';
    globalsObj.exports = 'off';
    globalsObj.module = 'off';
    globalsObj.require = 'off';
  }
  return getFlatConfigs(
    isNodeEsm,
    {
      files: allFiles,
      languageOptions: {
        globals: globalsObj,
      },
    },
    ...rest,
  );
}
