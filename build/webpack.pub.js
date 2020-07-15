const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const Components = require('../components.json');
const requireContext = require('require-context')
const keys = requireContext(path.join(__dirname,'../src/locale/lang'),false,/\.js$/).keys()
const langs = {}
keys.forEach(key=>{
    langs[`locale/lang/${key.split('.js')[0]}`] =`./src/locale/lang/${key}` 
})

module.exports = merge(baseConfig, {
    mode: 'production',
    entry: Object.assign(
        {
            kview:'./src/index.js',
            provider:'./src/components/provider',
        },  
        langs,
        Components
    ),
    output: {
        path: path.resolve(process.cwd(), './lib'),
        publicPath: '/lib/',
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