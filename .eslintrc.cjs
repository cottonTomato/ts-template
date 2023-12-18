/* eslint-env node */
module.exports = {
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:jest/recommended',
    'prettier',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.eslint.json'],
  },
  plugins: ['@typescript-eslint', 'jest'],
  root: true,
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-misused-promises': 'off',
  },
  ignorePatterns: [
    '.eslintrc.cjs',
    'jest.config.cjs',
    'e2e/jest-e2e.config.cjs',
    '.prettierrc.cjs',
    'node_modules',
    'dist',
  ],
  overrides: [
    {
      files: ['e2e', 'src/**/*.spec.ts'],
      env: { jest: true },
    },
  ],
};
