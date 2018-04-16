var path = require('path')
var webpack = require('webpack')
var nodeExternals = require('webpack-node-externals')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.js')

const config = {
  entry: './src/browser/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/'
	},

  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "true",
		})
  ]
}

module.exports = merge(baseConfig, config);