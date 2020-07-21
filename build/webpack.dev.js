const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const notifier = require('node-notifier');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const port = 3000;

module.exports = merge(baseConfig, {
    mode: 'development',
    entry: {
        kview: './examples/index'
    },
    devServer: {
        contentBase: path.resolve(process.cwd(), './public'),
        compress: true,
        hot: true,
        overlay: true,
        quiet:true,
        port,
    },
    plugins: [
        new FriendlyErrorsWebpackPlugin({
            compilationSuccessInfo: {
                messages: [`Your application is running here: http://localhost:${port}`],
                notes:[`Note that the development build is not optimized. \n To create a production build, run ' npm run build '.`],
            },
            onErrors (severity, errors) {
                // You can listen to errors transformed and prioritized by the plugin
                // severity can be 'error' or 'warning'
                if (severity !== 'error') {
                    return;
                }
                const error = errors[0];
                notifier.notify({
                    title: "Webpack error",
                    message: severity + ': ' + error.name,
                    subtitle: error.file || '',
                });
            },
            clearConsole: true,
        }),
    ],
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