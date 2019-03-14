'use strict';

const path = require('path');
const fs = require('fs');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// Webpack uses `publicPath` to determine where the app is being served from.
// In development, we always serve from the root. This makes config easier.
const publicPath = '/';

// Make sure any symlinks in the project folder are resolved:
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

// plugins
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const CopyWebpackPlugin = require('copy-webpack-plugin');

// the path(s) that should be cleaned
let pathsToClean = [
    'dist'
]

// the clean options to use
let cleanOptions = {
    root: __dirname,
    verbose: false, // Write logs to console.
    dry: false
}

module.exports = {
  entry: ["babel-polyfill", "./src/index.js"],
  output: {
    // The build folder.
    path: resolveApp('dist'),
    // Generated JS file names (with nested folders).
    // There will be one main bundle, and one file per asynchronous chunk.
    // We don't currently advertise code splitting but Webpack supports it.
    filename: 'assets/js/[name].[hash:8].js',
    chunkFilename: 'assets/js/[name].[hash:8].chunk.js',
    // We inferred the "public path" (such as / or /my-project) from homepage.
    publicPath: publicPath,
    hotUpdateChunkFilename: 'hot/hot-update.js',
    hotUpdateMainFilename: 'hot/hot-update.json'
  },
  devServer: {
    contentBase: './src/index.js',
    compress: true,
    port: 8080, // port number
    historyApiFallback: true,
    quiet: true
  },
  resolve: {
    alias: {
        Components: path.resolve(__dirname, 'src/js/components/'),
        Assets: path.resolve(__dirname, 'src/assets/'),
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      // {
      //   test: /\.css$/,
      //   loader: 'style-loader!css-loader'
      // },
      // Scss compiler
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader" },
    ],
  },
  optimization: {
    minimizer: [
        new UglifyJsPlugin({
            cache: true,
            parallel: true,
            uglifyOptions: {
                compress: false,
                ecma: 6,
                mangle: true
            },
            sourceMap: true
        }),
        new OptimizeCSSAssetsPlugin({})
    ]
  },
  performance: {
    hints: process.env.NODE_ENV === 'production' ? "warning" : false
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'src/assets', to: 'assets' },
      // { from: 'src/assets/images', to: 'assets/images' }
    ]), 
    new FriendlyErrorsWebpackPlugin(),
    // new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    // new MiniCssExtractPlugin({
    //   filename: "assets/css/[name].[hash:8].css"
    // })
  ],
};