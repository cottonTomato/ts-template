/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  testEnvironment: 'node',
  testRegex: '.e2e-spec.ts$',
  rootDir: '.',
  moduleFileExtensions: ['ts', 'json', 'js'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
};
