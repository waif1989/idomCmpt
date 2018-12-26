const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const baseConfig = require('./webpack.base');
exports = module.exports = merge.smart(baseConfig, {
    mode: 'production',
    entry: {
        'index': path.resolve('src/index.js')
    },
    output: {
        publicPath: './',
        path: path.resolve('dist')
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: path.resolve('src/static'),
                to: 'static',
                ignore: ['.*']
            }
        ])
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: 'assets/js/styles',
                    test: /\.css$/,
                    chunks: 'all',
                    enforce: true
                }
            }
        },
        minimize: true // true 为开启压缩，为了缩短打包时间，一般在开发环境不开启，
    }
});