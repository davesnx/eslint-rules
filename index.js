module.exports = {
  parser: 'babel-eslint',
  extends: [
    'plugin:react/recommended',
    'standard',
    'standard-jsx',
    'prettier',
    'prettier/react',
    'prettier/standard'
  ],
  plugins: ['filenames', 'react', 'standard', 'react-hooks'],
  settings: {
    react: {
      version: '16'
    }
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      generators: true
    }
  },
  globals: { fixture: true, FS: true },
  rules: {
    complexity: ['warn', { max: 7 }],
    'filenames/match-regex': ['warn', '^_?[a-z0-9-.]+$'],
    'react-hooks/rules-of-hooks': 'error',
    'react/no-unsafe': 'warn',
    'react/display-name': 'warn',
    'react/prop-types': 'warn',
    'react/jsx-no-bind': 0,
    'react/jsx-handler-names': 'warn',
    curly: 'error',
    'no-shadow': 'warn',
    'no-else-return': 'warn',
    'no-nested-ternary': 'warn',
    'no-unneeded-ternary': 'warn',
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true
      }
    ]
  }
}
