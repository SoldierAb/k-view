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