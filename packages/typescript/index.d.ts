import { Linter } from 'eslint';

export default function getTsConfigs(options?: {
    tsconfigRootDir?: string;
    tsRootDir?: string;
    rules?: Linter.RulesRecord;
} | undefined): Linter.Config[];
