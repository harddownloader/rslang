const path = require('path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const ESLintPlugin = require('eslint-webpack-plugin')

const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = merge(common, {
	mode: 'development',
	devtool: 'inline-source-map',
	//	new ForkTsCheckerWebpackPlugin({ async: false }),
	optimization: {
		runtimeChunk: true,
	},
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		historyApiFallback: true,
		open: true,
		hot: true,
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new ESLintPlugin({
			extensions: ['.js', 'jsx'],
		}),
	],
	module: {
		rules: [
			{
				test: /\.(sa|sc|c)ss$/,
				use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
			},
		],
	},
})
