const path = require('path');

module.exports = {
  verbose: true,
  setupFilesAfterEnv: [require.resolve('./test/setup.js')],
  moduleDirectories: ['node_modules', path.join(__dirname, 'test')],
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': '<rootDir>/test/styleMock.js',
  },
  collectCoverageFrom: ['**/src/**/*.js'],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
};
