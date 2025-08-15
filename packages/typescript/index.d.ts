import { Linter } from 'eslint';

export default function getTsConfigs(options?: {
    tsconfigRootDir?: string;
    tsRootDir?: string;
    rules?: Linter.RulesRecord;
    typeDefinition?: 'type' | 'interface'
} | undefined): Linter.Config[];
