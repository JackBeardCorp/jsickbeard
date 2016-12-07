const path = require('path')
const webpack = require('webpack')

const dev = (process.env.NODE_ENV !== 'production')

function getEntrySources(sources) {
  if (dev) {
    sources.push('webpack-dev-server/client?http://localhost:3000')
    sources.push('webpack/hot/only-dev-server')
  }

  return sources
}

function getLoaders(loaders) {
  if (dev) {
    loaders.push('react-hot-loader')
  }
  loaders.push('babel-loader')

  return loaders
}

function getPlugins(plugins) {
  if (dev) {
    plugins.push(new webpack.HotModuleReplacementPlugin())
  }

  return plugins
}

module.exports = {
  devServer: {
    quiet: false,
    stats: { colors: true },
    proxy: {
      '/jackbeard/*': {
        'target': {
          'host': '37.187.19.83',
          'protocol': 'http:',
          'port': 80
        },
        changeOrigin: true,
        secure: false
      }
    }
  },
  devtool: dev ? 'eval' : '',
  entry: {
    jsickbeard: getEntrySources([
      './src/main/js',
    ]),
  },
  output: {
    path: path.join(__dirname, 'src/main/resources/static'),
    filename: '[name].js',
    publicPath: '/',
  },
  resolve: {
    modules: [path.resolve(__dirname, "src/main/js"), "node_modules"],
    extensions: ['.js', '.jsx'],
  },
  plugins: getPlugins([]),
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: getLoaders([]),
      include: path.join(__dirname, 'src/main/js'),
    }, {
      test: /\.s?css$/,
      loaders: [
        'style',
        'css?modules&localIdentName=[path]_[local]__[hash:base64:5]',
        'sass',
      ],
    }],
  },
}
