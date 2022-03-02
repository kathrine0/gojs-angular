module.exports = {
  moduleNameMapper: {
    'src/(.*)': '<rootDir>/src/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.(html|svg)$',
      diagnostics: {
        // silence "(WARN) message TS151001: If you have issues related to imports" warning
        ignoreCodes: [151001],
      },
    },
  },
  preset: 'jest-preset-angular',
  transformIgnorePatterns: ['node_modules/(?!.*.mjs$|@datorama/akita)'],
  testRunner: 'jest-jasmine2',
};
