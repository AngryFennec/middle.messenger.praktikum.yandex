module.exports = {
  extends: ['airbnb-typescript'],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "no-useless-escape": "off",
    "linebreak-style": "off",
  }
};
