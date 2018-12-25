const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpackBaseConfig = {
    output: {
        path: path.resolve('dist')
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
                    'style-loader',
                    'css-loader'
                ],
            },{
		        test: /\.less$/,
		        use: [
			        'style-loader',
			        'css-loader',
			        'less-loader'
		        ],
	        }, {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {}
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
        // new MiniCssExtractPlugin({
        //     filename: '[name].css',
        //     chunkFilename: '[id].css'
        // })
    ]
};
exports = module.exports = webpackBaseConfig;