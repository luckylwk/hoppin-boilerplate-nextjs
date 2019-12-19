const eslint = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'eslint:recommended', 'prettier'],
  rules: {
    semi: 2,
    'max-len': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-no-bind': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/destructuring-assignment': 'off',
    'react/forbid-prop-types': 'off',
    'react/prefer-stateless-function': 'off',
    'react/no-danger': 'off',
    'no-console': 'off',
    'no-param-reassign': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'implicit-arrow-linebreak': 'off',
    'object-curly-newline': 'off',
    'react/jsx-closing-tag-location': 'off',
    'no-restricted-syntax': 'off',
    'operator-linebreak': 'off',
    'arrow-body-style': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'no-nested-ternary': 'off',
    'arrow-parens': ['error', 'always'],
    'react/no-array-index-key': 'off',
    'global-require': 'off',
    'no-confusing-arrow': 'off',
  },
  parserOptions: {
    ecmaVersion: 9,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['.'],
      },
    },
  },
  plugins: ['react', 'babel'],
  env: {
    browser: true,
    node: true,
    jest: true,
  },
};

module.exports = eslint;
