const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
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
        minimize: false,
        // splitChunks:{
        //     chunks:'all',
        //     cacheGroups:{
        //         vendors: {
        //             test: /[\\/]node_modules[\\/]/, 
        //             priority: -10  
        //         },
        //         // elementBase: {
        //         //     test: (module) => {
        //         //       return /element-ui/.test(module.context);
        //         //     }, 
        //         //     name: "elementBase",
        //         //     priority: 10,
        //         //   },
        //         default: {
        //             minChunks: 2,
        //             priority: -20,   
        //             reuseExistingChunk: true
        //         }
        //     },
        // },
    },
    externals:{
        vue: {
            root: 'vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue'
        },
        'vue-router': 'VueRouter',
        'element-ui': 'ELEMENT',
    },
})