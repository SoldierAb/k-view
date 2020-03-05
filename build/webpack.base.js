const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BuildTheme = process.env.npm_config_theme || 'default';
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const resolveResource = name => path.resolve(__dirname, '../src/theme/' + name);

module.exports = {
    entry: {
        kview: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: '[name]/index.js',
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
                test: /\.(sa|sc)ss$/,
                use:[
                    {
                        loader:MiniCssExtractPlugin.loader,
                        options:{
                            hmr:process.env.NODE_ENV === 'development'
                        },
                    },
                    'css-loader',
                    'sass-loader',
                    {
                        loader:'sass-resources-loader',
                        options:{
                            resources:[resolveResource('common.scss'), resolveResource(`${BuildTheme}.scss`)]
                        }
                    }
                ]
            },
            {
                test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            name: path.posix.join('fonts', 'k-view.[ext]')
                        }
                    }
                ]
            },
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: 'vue-loader',
                        options: {
                            sourceMap: true,
                        }
                    }
                ],
            },
            {
                test: /\.md$/,
                use: [
                    {
                        loader: 'vue-loader',
                        options: {
                            sourceMap: true,
                        }
                    },
                    {
                        loader: path.resolve(__dirname, './md-loader/index.js')
                    }
                ],
            },
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader?cacheDirectory',
                        options: {
                            sourceMap: true,
                        },
                    }
                ],
                exclude: /node_modules/
            }
        ]
    },
   
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
            'vue': 'vue/dist/vue.esm.js'
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
  
        new MiniCssExtractPlugin({
            filename:'[name]/style.css',
        })
    ],

};
