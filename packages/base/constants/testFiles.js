const ext = 'js,jsx,ts,tsx,mjs,mts,cjs';

export default [
  '**/test/**',
  '**/tests/**',
  '**/spec/**',
  '**/__tests__/**',
  '**/__mocks__/**',
  `**/test.*.{${ext}}`,
  '**/{test.setup,setupFile,testSetup,setupTest,jest.setup,vitest.setup,setup,global.setup,globalSetup}.{js,ts,mjs,mts}',
  `**/*{.,_}{test,spec}.{${ext}}`,
];
