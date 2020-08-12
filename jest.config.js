module.exports = {
  setupFiles: ["jest-canvas-mock"],
  moduleFileExtensions: ["js", "json", "vue"],
  transform: {
    "^.+\\.vue$": "vue-jest",
    ".+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$":
      "jest-transform-stub",
    "^.+\\.jsx?$": "babel-jest"
  },
  transformIgnorePatterns: [
    "<rootDir>/node_modules/(?!(babel-jest|lodash-es|ag-grid-vue|jest-vue-preprocessor|flag-icon-css|@dory|@storybook|animejs)/)",
  ],
  snapshotSerializers: ["jest-serializer-vue"],
  testMatch: ["**/**/*.spec.(js|jsx|ts|tsx)"],
  testURL: "http://localhost/",
};
