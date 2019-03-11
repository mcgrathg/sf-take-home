const path = require('path');

module.exports = {
  verbose: true,
  setupFilesAfterEnv: [require.resolve('./test/setup.js')],
  moduleDirectories: ['node_modules', path.join(__dirname, 'test')],
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': '<rootDir>/test/styleMock.js',
  },
  collectCoverageFrom: ['**/src/**/*.js'],
  coverageThreshold: {
    global: {
      statements: 17,
      branches: 4,
      lines: 17,
      functions: 20,
    },
  },
};
