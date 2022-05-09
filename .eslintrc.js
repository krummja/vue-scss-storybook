module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    '@vue/standard',
    'plugin:vue/vue3-essential',
    'plugin:storybook/recommended'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/no-unused-vars': [
      'error', {
        ignorePattern: '^_'
      }],
    'vue/script-setup-uses-vars': 1,
    'vue/multiline-html-element-content-newline': ['error', {
      ignoreWhenEmpty: true,
      allowEmptyLines: true
    }],
    'vue/singleline-html-element-content-newline': ['error', {
      ignoreWhenEmpty: true,
      ignoreWhenNoAttributes: true
    }],
    'vue/html-indent': 2,
    'vue/multi-word-component-names': ['error', {
      ignores: [
        'Button',
        'Flex',
      ]
    }],
    'no-multiple-empty-lines': [2, {
      max: 2,
      maxEOF: 1
    }],
    semi: [2, 'always'],
    'comma-dangle': ['error', 'only-multiline'],
    'space-before-function-paren': ['error', 'never'],
  }
};
