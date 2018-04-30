module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    sourceType: 'module'
  },
  plugins: ['react', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier',
    'plugin:prettier/recommended'
  ],
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['warn', 'single'],
    semi: ['error', 'always'],
    'no-unused-vars': [
      'warn',
      { vars: 'all', args: 'none', ignoreRestSiblings: false }
    ],
    'prettier/prettier': 'error'
  }
};
