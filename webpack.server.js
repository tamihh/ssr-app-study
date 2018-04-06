var path = require('path')
var webpack = require('webpack')
var nodeExternals = require('webpack-node-externals')

module.exports = {
    entry: './src/server/index.js',
    // Inform webpack that we are building a bundle got nodeJS, rather than for the browser
    target: 'node',
    externals: [nodeExternals()],
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js',
      publicPath: '/'
    },
    module: {
      rules: [
        { 
          test: /\.(js)$/, 
          loader: 'babel-loader',
          exclude: /node_modules/,
          options: {
            presets: [
              'react',
              'stage-0',
              ['env', { targets: { browsers: ['last 2 versions'] } }]
            ]
          }
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        __isBrowser__: "false"
      })
    ]
  }