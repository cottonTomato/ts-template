/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  testEnvironment: 'node',
  collectCoverageFrom: ['src/**/*.ts'],
  coverageDirectory: './coverage',
  testRegex: '.*\\.spec\\.ts$',
  rootDir: 'src',
  moduleFileExtensions: ['ts', 'json', 'js'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
};
