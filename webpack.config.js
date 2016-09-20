const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require('autoprefixer');
var precss       = require('precss');

module.exports = {
    entry: './web/src/js/app.js',
    output: {
        path: './web/build',
        filename: 'app.bundle.js'
    },
    devtool: 'source-map',
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: 'eslint',
                exclude: /node_modules/
            }
        ],
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style', 'css!postcss', 'sass')
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("[name].css"),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
                comments: false
            }
        }),
        new HtmlWebpackPlugin()
    ],
    eslint: {
        failOnWarning: false,
        failOnError: true
    },
    postcss: function () {
        return [precss, autoprefixer];
    }
};