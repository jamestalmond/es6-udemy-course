const path = require('path');

module.exports = {
	entry: ['./app/index.js'],
	output: {
		path: path.resolve(__dirname, 'build'),
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
		contentBase: path.resolve(__dirname, 'build'),
		inline: true
	}
}
