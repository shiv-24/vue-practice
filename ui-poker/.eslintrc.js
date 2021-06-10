module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        mocha: true,
      },
    },
  ],
  resolve: {
    extensions: ['.js', '.vue', '.json', '.ts'],
    alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': resolve('src'),
    }
  }
  // settings: {
  //   "import/resolver": {
  //     "node": {
  //       "paths": ["src"],
  //       "extensions": [".js", ".jsx", ".ts", ".tsx"],
  //     }
  //   },
  // }
};
