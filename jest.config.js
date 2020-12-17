module.exports = {
  transform: {
    // 将.js后缀的文件使用babel-jest处理
    '^.+\\.(js|jsx)$': 'babel-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!(enzyme))'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootdir>/components/$1',
    '^.+\\.(css|less)$': 'identity-obj-proxy',
  },
  collectCoverage: true,
  coverageDirectory: '<rootDir>/coverage/',
  coveragePathIgnorePatterns: ['<rootDir>/coverage/'],
};
