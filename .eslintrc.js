module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/recommended",
    "eslint:recommended"
  ],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "vue/max-attributes-per-line": [
      "warn",
      {
        singleline: 3,
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ],
    "vue/require-default-prop": 0,
    "no-unused-vars":0,
  }
};
