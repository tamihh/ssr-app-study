const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.js')

const config = {
		// Inform webpack that we are building a bundle 
		// for nodeJS, rather than for the browser
		target: 'node',
    entry: './src/server/index.js',
    externals: [nodeExternals()],
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'build'),
      publicPath: '/'
    },

    plugins: [
      new webpack.DefinePlugin({
        __isBrowser__: "false"
      })
    ]
	}
	
	module.exports = merge(baseConfig, config);