const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require('autoprefixer');
const precss       = require('precss');

module.exports = {
    entry: './web/src/js/main.jsx',
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
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style', 'css!csslint!postcss!sass')
            },
            {
                test : /\.jsx?/,
                exclude: /node_modules/,
                loader : 'babel'
            }
        ]
    },
    resolve: {
        root: [
            path.resolve('./web/src')
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
        new HtmlWebpackPlugin({
            template: 'web/src/index.html'
        })
    ],
    eslint: {
        failOnWarning: false,
        failOnError: true
    },
    postcss: function () {
        return [precss, autoprefixer];
    }
};