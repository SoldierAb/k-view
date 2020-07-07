const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require('copy-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const BuildTheme = process.env.npm_config_theme || 'default';
const analyz = process.env.npm_config_analyz;
const resolveResource = name => path.resolve(__dirname, '../src/theme/' + name);
const isProduction = process.env.NODE_ENV === 'production';
const minCssLoader = {
    loader: MiniCssExtractPlugin.loader,
    options: {
        hmr: process.env.NODE_ENV === 'development'
    },
};
const webpackConfig = {
    output: {
        path: path.resolve(__dirname, '../dist/'),
        filename: '[name]/index.js',
        publicPath: '/'
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
                use: [
                    isProduction ? minCssLoader : 'style-loader',
                    'css-loader',
                    'sass-loader',
                    {
                        loader: 'sass-resources-loader',
                        options: {
                            resources: [resolveResource('common.scss'), resolveResource(`${BuildTheme}.scss`)]
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
                            compilerOptions: {
                                preserveWhitespace: false
                            },
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
                            compilerOptions: {
                                preserveWhitespace: false
                            },
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
                        loader: 'babel-loader',
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
            'vue': 'vue/dist/vue.js'
        }
    },

    plugins: [
        new VueLoaderPlugin(),
       
        new ProgressBarPlugin(),

        new CleanWebpackPlugin({
            verbose: true
        }),
        // new CopyPlugin({
        //     patterns: [
        //       { 
        //         from: '**/*', 
        //         to: path.resolve(__dirname, '../lib/locale/lang'),
        //         context: path.resolve(__dirname, '../src/locale/lang/'),
        //         // transformPath() {
        //         //     return '/';
        //         // },
        //       }
        //     ]
        // }),
    ],

};

if (isProduction) {
    webpackConfig.plugins.push(
        new MiniCssExtractPlugin({
            filename: '[name]/style.css',
        }),
    );
}else{
    webpackConfig.plugins.push(
        new HtmlPlugin({
            template: './index.html',
            minify: {
                removeAttributeQuotes: false  //removeAttrubuteQuotes是却掉属性的双引号。
            },
            hash: true,
        }),
      
    )
}

if(analyz){
    webpackConfig.plugins.push(
        new BundleAnalyzerPlugin()
    );
}

module.exports = webpackConfig;