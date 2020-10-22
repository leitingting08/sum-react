module.exports = {
  modulePaths: ['<rootDir>/components/'],
  moduleNameMapper: {
    '.(css|less)$': '<rootDir>/__test__/NullModule.js',
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  collectCoverage: true,
  coverageDirectory: '<rootDir>/components/',
  coveragePathIgnorePatterns: ['<rootDir>/__test__/'],
  coverageReporters: ['text'],
};
