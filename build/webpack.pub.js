const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const Components = require('../components.json');

module.exports = merge(baseConfig, {
    mode: 'production',
    entry: Object.assign(
        {
            kview:'./src/index.js',
        },  
        Components
    ),
    output: {
        path: path.resolve(process.cwd(), './lib'),
        publicPath: '/dist/',
        filename: '[name]/index.js',
        chunkFilename: '[id]/index.js',
        libraryTarget: 'commonjs2'
    },
    optimization: {
        minimize: false,
    },
    externals:{
        vue: {
            root: 'vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue'
        },
    },
})