import { Linter } from 'eslint';

export default function getWebFlatConfigs(...configs: Linter.Config[]): Linter.Config[];
export const webConfigs: Readonly<{
    files: string[];
    languageOptions: {
        globals: Linter.Globals
    };
    rules: {
        'no-alert': 'warn';
        'no-script-url': 'error';
        'no-restricted-globals': ['error', {
            name: string;
            message: string;
        } | string];
        'import-x/no-nodejs-modules': 'error';
        'import-x/no-commonjs': 'error';
    };
}>;