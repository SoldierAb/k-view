const path = require('path');
const uglify = require('uglifyjs-webpack-plugin');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const Components = require('./components.json');

module.exports = merge(baseConfig, {
    mode: 'production',
    entry: Components,
    output: {
        path: path.resolve(__dirname, './lib'),
        publicPath: '/dist/',
        filename: '[name]/index.js',
        libraryTarget: 'commonjs2'
    },
    optimization: {
        minimize: false
      },
    plugins: [
        new uglify(),
        new BundleAnalyzerPlugin()
    ]
})