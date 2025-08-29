import { Linter } from 'eslint';

export default function getWebFlatConfigs(...configs: Linter.Config[]): Linter.Config[];
export const webConfigs: Readonly<{
    files: string[];
    languageOptions: {
        globals: Linter.Globals
    };
    rules: Linter.RulesRecord;
}>;