module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
    requireConfigFile: false,
  },
  settings: {
    react: {
      version: "18.0",
    },
    "import/resolver": {
      node: {
        paths: ["src"],
        extensions: [".js", ".jsx"],
      },
    },
  },
  plugins: ["react", "prettier", "jsx-a11y", "simple-import-sort"],
  rules: {
    quotes: [
      "error",
      "double",
      {
        avoidEscape: true,
      },
    ],
    "react/jsx-uses-react": ["off"],
    "react/react-in-jsx-scope": ["off"],
    "react/jsx-props-no-spreading": ["warn"],
    "no-shadow": "off",
    "no-console": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight"],
        aspects: ["invalidHref", "preferButton"],
      },
    ],
  },
};
