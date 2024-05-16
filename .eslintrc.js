module.exports = {
  root: true,
  extends: ["expo", "prettier"],
  plugins: ["prettier"],
  rules: {
    // Ensures props and state inside functions are always up-to-date
    "react-hooks/exhaustive-deps": "warn",
    "prettier/prettier": ["error"],
  },
};
