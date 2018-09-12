var path = require('path');
var webpack = require('webpack');
var ionicWebpackFactory = require(process.env.IONIC_WEBPACK_FACTORY);
var ModuleConcatPlugin = require('webpack/lib/optimize/ModuleConcatenationPlugin');

var prodPlugins = [];
if (process.env.IONIC_ENV === 'prod') {
  prodPlugins.push(new ModuleConcatPlugin());
}

console.log('is building with dev config');
const biConfig = require('./bi-config');
const helpers = require('./helpers');

//const webpackMerge = require('webpack-merge'); // used to merge webpack configs
//const webpackMergeDll = webpackMerge.strategy({plugins: 'replace'});
//
// const commonConfig = require('./webpack.common.js'); // the settings that are common to prod and dev

/**
 * Webpack Plugins
 */
// const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
// const DefinePlugin = require('webpack/lib/DefinePlugin');
// const NamedModulesPlugin = require('webpack/lib/NamedModulesPlugin');
// const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');


/**
 * Webpack Constants
 */
const ENV = process.env.IONIC_ENV = process.env.NODE_ENV = 'development';
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;
const HMR = helpers.hasProcessFlag('hot');
// const METADATA = webpackMerge(commonConfig({env: ENV}).metadata, {
//   host: HOST,
//   port: PORT,
//   ENV: ENV,
//   HMR: HMR
// });

module.exports = {
  entry: process.env.IONIC_APP_ENTRY_POINT,
  output: {
    path: '{{BUILD}}',
    publicPath: 'build/',
    filename: '[name].js',
    devtoolModuleFilenameTemplate: ionicWebpackFactory.getSourceMapperFunction(),
  },
  devtool: process.env.IONIC_SOURCE_MAP_TYPE,

  resolve: {
    extensions: ['.ts', '.js', '.json'],
    modules: [path.resolve('node_modules')]
  },

  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.ts$/,
        loader: process.env.IONIC_WEBPACK_LOADER
      },
      {
        test: /\.js$/,
        loader: process.env.IONIC_WEBPACK_TRANSPILE_LOADER
      },
      {
        test: /\.scss$/,
        loader: 'raw!sass?includePaths[]=' + helpers.root('node_modules/ionicons/dist/scss')
      }
    ]
  },

  devServer: {
    port: PORT,
    host: HOST,
    historyApiFallback: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    },
    proxy : [{
      path: '/'+biConfig.devConfig.apiPrefix,
      target: biConfig.devConfig.apiDomain,
      changeOrigin: true}
    ]
  },


  plugins: [
    ionicWebpackFactory.getIonicEnvironmentPlugin(),
    ionicWebpackFactory.getCommonChunksPlugin(),
  ].concat(prodPlugins),

  // Some libraries import Node modules but don't use them in the browser.
  // Tell Webpack to provide empty mocks for them so importing them works.
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};
