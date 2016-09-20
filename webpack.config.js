const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './web/src/js/app.js',

    output: {
        path: './web/build',
        filename: 'app.bundle.js'
    },
    module: {
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
                loader: ExtractTextPlugin.extract( 'style', 'css', 'sass')
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
    ]
};