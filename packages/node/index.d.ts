import { Linter } from 'eslint';

export default function getNodeConfig(isNodeEsm?: boolean): Linter.Config;
export default function getNodeConfig(esmOption: { extension: boolean }): Linter.Config;
