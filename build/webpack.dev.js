const merge  = require('webpack-merge');
const baseConfig = require('./webpack.base');

const path = require('path');

module.exports=merge(baseConfig,{
    mode:'development',
    entry:{
        kview:'./examples/index'
    },
    devServer:{
        contentBase:path.resolve(__dirname,'./dist/'),
        compress:true,
        hot:true,
        overlay:true,
        openPage:'dist/index.html'
    },
})