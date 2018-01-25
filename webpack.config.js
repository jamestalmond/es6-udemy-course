const { resolve } = require('path');

module.exports = {
	entry: ['babel-polyfill', __dirname + '/app/index.js'],
	output: {
		path: resolve(__dirname, 'build'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				test: /\.js$/,
				exclude: /node_modules/
			},
			{
				loader: 'styles',
				test: /\.css$/,
				exclude: /node_modules/
			}
		]
	},
	devServer: {
		port: 3000,
		contentBase: resolve(__dirname, 'build'),
		inline: true
	}
}
