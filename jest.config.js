module.exports = {
  verbose: true,
  setupFiles: [
    './test/setup.js',
  ],
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': '<rootDir>/test/styleMock.js',
  },
};
