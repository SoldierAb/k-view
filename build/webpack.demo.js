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
            chunks: 'all',
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/, 
                    priority: -10  
                },
                elementBase: {
                    test: (module) => {
                      return /element-ui/.test(module.context);
                    }, 
                    name: "elementBase",
                    priority: 10,
                  },
                default: {
                    minChunks: 2,
                    priority: -20,   
                    reuseExistingChunk: true
                }
            }
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