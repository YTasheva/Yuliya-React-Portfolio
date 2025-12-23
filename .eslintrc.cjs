/* Basic ESLint setup for the React/Vite project */
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "react/no-unescaped-entities": "off",
    "react/jsx-no-target-blank": [
      "warn",
      { allowReferrer: true, enforceDynamicLinks: "always" },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  overrides: [
    {
      files: ["vite.config.js"],
      env: { browser: false, node: true },
    },
    {
      files: ["server.js"],
      env: { node: true },
    },
  ],
};
