module.exports = {
  root: true,
  env: {browser: true, es2021: true},
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', '@typescript-eslint'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      {allowConstantExport: true},
    ],
    "react/react-in-jsx-scope": "off",
    "no-extra-boolean-cast": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/ban-ts-comment": "warn",
    "no-constant-condition": "warn",
    "react/display-name": "warn",
    "@typescript-eslint/no-inferrable-types": "warn",
    "no-prototype-builtins": "warn",
    "react/prop-types": "off",
    "react/no-children-prop": "off"
  },
}
