const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.base');

exports = module.exports = merge.smart(baseConfig, {
    mode: 'development',
    entry: [path.resolve('src/index.js')],
    output: {
        filename: 'index.js',
        publicPath: '/',
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve('template/index.html'),
            chunksSortMode: 'none'
        })
    ],
    devtool: 'source-map',
    devServer: {
        host: 'localhost',
        // contentBase: path.join(__dirname, 'dist'), // boolean | string | array, static file location
        contentBase: false,
        compress: true, // enable gzip compression
        historyApiFallback: true, // true for index.html upon 404, object for multiple paths
        hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
        https: false, // true for self-signed, object for cert authority
        noInfo: true  // only errors & warns on hot reload
    }
});