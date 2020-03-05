const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

module.exports = merge(baseConfig, {
    mode: 'production',
    entry:{
        kview:'./examples/index'
    }, 
    output: {
        path: path.resolve(process.cwd(), './dist'),
        publicPath: './',
        filename: '[name]/index.js',
        chunkFilename: '[id]/index.js',
        libraryTarget: 'umd'
    },
    optimization: {
        minimize: false
    },
})