module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'prettier', 'react-native-globals', 'react', 'react-native'],
  extends: [
    'eslint:recommended',
    'plugin:react-native/all',
    'universe',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  env: {
    'react-native/react-native': true,
    // 'react-native-globals/all': true,
  },
  rules: {
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': ['error'],
    'react-native/no-single-element-style-arrays': 'off',
    '@typescript-eslint/no-unused-vars': ['error']
  },
  settings: {
    react: {
      version: 'detect' // React version. "detect" automatically picks the version you have installed.
    }
  }
}
