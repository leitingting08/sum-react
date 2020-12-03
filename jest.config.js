module.exports = {
  // preset: "babel-jest",
  transform: {
    // 将.js后缀的文件使用babel-jest处理
    '^.+\\.(js|jsx)$': 'babel-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!(@testing-library|react))'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootdir>/components/$1',
  },
  collectCoverage: true,
  coverageDirectory: '<rootDir>/__test__/',
  coveragePathIgnorePatterns: ['<rootDir>/__test__/'],
  coverageReporters: ['text'],
};
