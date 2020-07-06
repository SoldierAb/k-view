const path = require('path');

module.exports = {
  rootDir: path.resolve(__dirname, './'), // 类似 webpack.context
  moduleFileExtensions: [ // 类似 webpack.resolve.extensions
    'js',
    'json',
    'vue',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // 类似 webpack.resolve.alias
  },
  testPathIgnorePatterns: ['/node_modules/', 'node'],
  transform: { // 类似 webpack.module.rules
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest',
    '^.+\\.[t|j]sx?$': '<rootDir>/node_modules/babel-jest',
  },
  snapshotSerializers: ["<rootDir>/node_modules/jest-serializer-vue"],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js',
  },
  setupFiles: ['<rootDir>/test/unit/setup'], // 类似 webpack.entry
  coverageDirectory: '<rootDir>/test/coverage', // 类似 webpack.output
  collectCoverageFrom: [ // 类似 webpack 的 rule.include
    'src/**/*.{js,vue}',
    '!src/main.js',
    '!src/router/index.js',
    '!**/node_modules/**',
  ],
  globals: {
    "vue-jest": {
      "hideStyleWarn": true,
      "experimentalCSSCompile": true
    }
  }
};