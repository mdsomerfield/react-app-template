var path = require('path');

module.exports = {
  entry: {
    app: ['@babel/polyfill', './src/app.js']
  },
  output: {
    path: __dirname + '/public',
    publicPath: '/',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      { 
        test: /\.(otf|svg)$/, 
        loader: 'file-loader' 
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [{
            loader: "style-loader"
        }, {
            loader: "css-loader",
            query: {
              modules: true,
              localIdentName: '[name]__[local]__[hash:base64:5]'
            }  
        }, {
            loader: "sass-loader"
        }]
      },   
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.css', '.svg'],
    alias: {
      '@fonts': path.resolve(__dirname, './src/fonts'),
      '@icons': path.resolve(__dirname, './src/icons'),
      '@react': path.resolve(__dirname, './src/react'),
      '@redux': path.resolve(__dirname, './src/redux'),
      '@styles': path.resolve(__dirname, './src/styles')
    }
  },
  devServer: {
    contentBase: './',
    port: 8000,
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'http://localhost:56058/' //Update with your API URL
      }
    }
  },
  optimization: {
    minimize: false,
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          test: path.resolve(__dirname, 'node_modules'),
          name: 'vendors',
          enforce: true
        }
      }
    }
  },
};