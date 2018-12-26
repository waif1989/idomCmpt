const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const devMode = process.env.NODE_ENV !== 'production';

const webpackBaseConfig = {
    output: {
        path: path.resolve('dist'),
        filename: 'assets/js/index.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }, {
                test: /\.css$/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader'
                ],
            },{
		        test: /\.less$/,
		        use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
			        'less-loader'
		        ],
	        }, {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'assets/img',
                        }
                    }
                ]
            }, {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader'
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.json'],
        alias: {
            '@': path.resolve('src')
        }
    },
    plugins: [
	    new CopyWebpackPlugin([
		    {
			    from: path.resolve('src/static'),
			    to: 'static',
			    ignore: ['.*']
		    }
	    ]),
        new HtmlWebpackPlugin({
            template: path.resolve('src/index.html'),
            chunksSortMode: 'none'
        }),
        new MiniCssExtractPlugin({
            filename: "assets/css/[name].css",
            chunkFilename: "assets/css/[id].css"
        })
    ]
};
exports = module.exports = webpackBaseConfig;