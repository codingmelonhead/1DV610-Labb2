export default {
  testEnvironment: "node",

  transform: {
    "^.+\\.js$": "babel-jest",
  },

  testRegex: "test/.*\\.(test|spec)\\.js$",
};