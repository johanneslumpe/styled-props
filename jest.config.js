module.exports = {
  roots: ['<rootDir>/src'],
  testMatch: ['**/__tests__/**/*.ts?(x)'],
  testPathIgnorePatterns: ['/node_modules', '__tests__/utils'],
  testURL: 'http://localhost',
  coverageDirectory: './coverage/',
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  collectCoverage: true,
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.cjs.json',
      enableTsDiagnostics: true,
    },
  },
  preset: 'ts-jest',
};
