const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const Components = require('../components.json');

module.exports = merge(baseConfig, {
    mode: 'production',
    entry: Components,  
    output: {
        path: path.resolve(process.cwd(), './lib'),
        publicPath: '/dist/',
        filename: '[name]/index.js',
        chunkFilename: '[id]/index.js',
        libraryTarget: 'commonjs2'
    },
    optimization: {
        minimize: false
    },
    plugins: [
        new BundleAnalyzerPlugin()
    ]
})