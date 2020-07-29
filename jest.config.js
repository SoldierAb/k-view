const path = require('path');

module.exports = {
  rootDir: path.resolve(__dirname, './'), // 类似 webpack.context
  moduleFileExtensions: [ // 类似 webpack.resolve.extensions
    'js',
    'json',
    'vue',
  ],
  moduleNameMapper: {
    '^vue$': 'vue/dist/vue.common.js',
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
    '\\.(gif|ttf|eot|svg)$': '<rootDir>/__mocks__/fileMock.js',
  },
  // moduleDirectories: ['node_modules', 'bower_components', 'shared'],
  testPathIgnorePatterns: [
    'node_modules',
  ],
  transformIgnorePatterns:[
    'node_modules/(?!(ant-design-vue|element-ui))',
  ],
  testMatch: [
    '**/__tests__/**/*.spec.(js|jsx|ts|tsx)',
  ],
  testURL: 'http://localhost/',
  transform: { // 类似 webpack.module.rules
    '.*\\.(vue|md)$': '<rootDir>/node_modules/vue-jest',
    '^.+\\.[t|j]sx?$': '<rootDir>/node_modules/babel-jest',
  },
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  setupFiles: ['<rootDir>/test/unit/setup'], // 类似 webpack.entry
  coverageDirectory: '<rootDir>/coverage', // 类似 webpack.output
  collectCoverageFrom: [ // 类似 webpack 的 rule.include
    'src/**/*.{js,vue}',
    '!src/main.js',
    '!src/router/index.js',
    '!**/node_modules/**',
  ],
  globals: {
    "vue-jest": {
      "hideStyleWarn": true,
      "experimentalCSSCompile": true,
    },
  },
};