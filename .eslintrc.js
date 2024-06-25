/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: "latest",
    files: ["*.ts", "*.tsx"],
    project: "./tsconfig.json",
    sourceType: "module",
    tsconfigRootDir: __dirname,
  },
  extends: [
    "plugin:react-hooks/recommended",
    "plugin:react-native-a11y/all",
    "expo",
    "prettier", // this has to be the last one
  ],
  plugins: [
    "react-compiler",
    "@typescript-eslint",
    "react-native-globals",
    "expo",
    "prettier",
  ],
  rules: {
    "react-compiler/react-compiler": "warn",
    "expo/no-dynamic-env-var": "error",
    "expo/no-env-var-destructuring": "error",
    "prettier/prettier": ["error"],
    // Ensures props and state inside functions are always up-to-date
    "react-hooks/exhaustive-deps": "warn",
  },
  env: {
    "react-native-globals/all": true,
  },
};
