module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: 'babel-eslint',
  plugins: ['react'],
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: false,
    codeFrame: true,
  },
  /*
    0 = off, 1 = warn, 2 = error

    'off' or 0 - turn the rule off
    'warn' or 1 - turn the rule on as a warning (doesn't affect exit code)
    'error' or 2 - turn the rule on as an error (exit code is 1 when triggered)
  */
  rules: {
    quotes: [2, 'single', {avoidEscape: true}],
    'no-use-before-define': 0,
    'react/prop-types': 0,
    strict: 2,
    semi: 0,
    'no-alert': 2,
    'no-empty-function': 0,
    'no-empty-pattern': 2,
    'no-multi-spaces': 2,
    'no-eq-null': 2,
    'no-useless-return': 2,
    'require-await': 2,
    'no-unused-vars': 0,
    'no-console': 0, // Disable in Dev Env, Enable in Prod Env
    'max-len': [2, {code: 200}],
  },
};
