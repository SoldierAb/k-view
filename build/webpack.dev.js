const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const path = require('path');

module.exports = merge(baseConfig, {
    mode: 'development',
    entry: {
        kview: './examples/index'
    },
    devServer: {
        contentBase: path.resolve(process.cwd(), './'),
        compress: true,
        hot: true,
        overlay: true,
        openPage: 'dist/index.html'
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,  // 匹配node_modules目录下的文件
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
    externals: {
        'vue': 'Vue',
        'vue-router': 'VueRouter',
        'element-ui': 'ELEMENT',
    },
})