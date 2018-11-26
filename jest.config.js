module.exports = {
  roots: ['<rootDir>/src'],
  testMatch: ['**/__tests__/**/*.ts?(x)'],
  testPathIgnorePatterns: ['/node_modules', '__tests__/utils', 'test-utils'],
  testURL: 'http://localhost',
  coverageDirectory: './coverage/',
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  collectCoverage: true,
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.cjs.json',
      diagnostics: true,
    },
  },
  preset: 'ts-jest',
};
