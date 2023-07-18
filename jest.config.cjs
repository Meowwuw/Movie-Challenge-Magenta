module.exports = {
  testEnvironment: 'jest-environment-jsdom',
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
    moduleNameMapper: {
      '^.+\\.(css|less|scss)$': 'babel-jest',
    },
  };
  