module.exports = {
  extends: [
    '@innovixx/eslint-config/configs/base',
    '@innovixx/eslint-config/configs/typescript',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    'import/no-unresolved': 'off',
  },
};
