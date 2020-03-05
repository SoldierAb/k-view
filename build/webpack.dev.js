const merge  = require('webpack-merge');
const baseConfig = require('./webpack.base');

const path = require('path');

module.exports=merge(baseConfig,{
    mode:'development',
    entry:{
        kview:'./examples/index'
    },
    devServer:{
        contentBase:path.resolve(process.cwd(), './'),
        compress:true,
        hot:true,
        overlay:true,
        openPage:'dist/index.html'
    },
    //  output: {
    //     path: path.resolve(process.cwd(), './dist'),
    //     publicPath: './',
    //     filename: '[name]/index.js',
    //     chunkFilename: '[id]/index.js',
    //     libraryTarget: 'commonjs2'
    // },
    optimization: {
        splitChunks: {
            chunks: 'all'
        },
        minimize: false,
    },
    externals: {
        'vue': 'Vue',
        'vue-router': 'VueRouter',
        'element-ui': 'ELEMENT',
    },
})