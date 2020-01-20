const path = require('path');
const uglify = require('uglifyjs-webpack-plugin');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const Components = require('../components.json');

module.exports = merge(baseConfig, {
    devtool: 'source-map',
    mode: 'production',
    entry: Components,
    output: {
        path: path.resolve(__dirname, '../lib'),
        publicPath: '../lib/',
        filename: '[name]/index.js',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    optimization: {
        minimize: false
      },
    plugins: [
        new uglify(),
        new BundleAnalyzerPlugin()
    ]
})