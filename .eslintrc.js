module.exports = {
  extends: [
    "airbnb",
    "prettier",
    "prettier/react",
    "plugin:prettier/recommended",
    "eslint-config-prettier",
  ],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2017,
    ecmaFeatures: {
      impliedStrict: true,
      classes: true,
      jsx: true,
    },
  },
  env: {
    jest: true,
    node: true,
    es6: true,
  },
  globals: {},
  plugins: ["prettier"],
  rules: {
    "arrow-body-style": [2, "as-needed"],
    "no-console": 0,
    "linebreak-style": 0,
    "no-use-before-define": 0,
    "import/no-extraneous-dependencies": 0,
    "react/no-danger": 0,
    "import/prefer-default-export": 0,
    import: 0,
    "func-names": 0,
    "import/extensions": 0,
    "no-underscore-dangle": 0,
    "consistent-return": 0,
    "react/display-name": 0,
    "react/react-in-jsx-scope": 0,
    "react/forbid-prop-types": 0,
    "react/no-unescaped-entities": 0,
    "jsx-a11y/accessible-emoji": 0,
    "prettier/prettier": "error",
    "jsx-a11y/href-no-hash": "off",
    "react/prefer-stateless-function": 0,
    "jsx-a11y/label-has-for": 0,
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx"],
      },
    ],
    "jsx-a11y/anchor-is-valid": [
      "warn",
      {
        aspects: ["invalidHref"],
      },
    ],
    "jsx-a11y/label-has-associated-control": [
      2,
      {
        controlComponents: ["Field"],
        depth: 3,
      },
    ],
    "react/no-multi-comp": 0,
    "jsx-a11y/img-redundant-alt": 0,
  },
};
