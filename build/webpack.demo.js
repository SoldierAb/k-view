const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(baseConfig, {
    mode: 'production',
    entry: {
        kview: './examples/index'
    },
    output: {
        path: path.resolve(process.cwd(), './dist'),
        publicPath: './',
        filename: '[name]/index.js',
        chunkFilename: '[id]/index.js',
        libraryTarget: 'umd'
    },
    optimization: {
        splitChunks: {
            // include all types of chunks
            chunks: 'all'
        },
        minimize: false,
    },
    plugins: [
        new BundleAnalyzerPlugin()
    ],
    externals: {
        'vue': 'Vue',
        'vue-router': 'VueRouter',
        'element-ui': 'ELEMENT',
    },
})