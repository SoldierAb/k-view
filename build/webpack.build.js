const merge = require('webpack-merge');
const pubConfig = require('./webpack.pub');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(pubConfig, {
    plugins: [
        new BundleAnalyzerPlugin()
    ]
})