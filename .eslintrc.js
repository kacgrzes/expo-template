module.exports = {
  root: true,
  extends: ["expo", "prettier"],
  plugins: ["expo", "prettier"],
  rules: {
    "expo/no-dynamic-env-var": "error",
    "expo/no-env-var-destructuring": "error",
    "prettier/prettier": ["error"],
    // Ensures props and state inside functions are always up-to-date
    "react-hooks/exhaustive-deps": "warn",
  },
};
