const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const BuildTheme = process.env.npm_config_theme || 'default';


const resolveResource = name => path.resolve(__dirname, './src/theme/' + name);

module.exports = {
    devtool: 'source-map',
    entry: {
        kview: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: '[name]/[name].js',
        publicPath: '/dist/'
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        'sass-loader',
                        {
                            loader: 'sass-resources-loader',
                            options: {
                                resources: [resolveResource('common.scss'),resolveResource('default.scss')]
                            }
                        }
                    ]
                })
            },
            {
                test: /\.(jpg|jpeg|png|bmp|gif)/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 600
                        }
                    }
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader?cacheDirectory'
                    }
                ],
            }
        ]
    },

    resolve: {
        extensions: ['.js', '.vue','.json'],
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },

    plugins: [
        new VueLoaderPlugin(),
        new HtmlPlugin({
            template: './index.html',
            minify: {
                removeAttributeQuotes: false  //removeAttrubuteQuotes是却掉属性的双引号。
            },
            hash: true,
        }),
        new CleanWebpackPlugin({
            verbose: true
        }),
        new ProgressBarPlugin(),
        new ExtractTextPlugin({
            // filename: `${BuildTheme}/[name].css`,
            filename: `[name]/style.css`,
            allChunks: true      //!!!针对所有模块进行抽取。需要设置为true
        }),
    ],
  
};
