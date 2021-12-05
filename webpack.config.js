const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const PATHS = {
  src: path.join(__dirname, ''),
  dist: path.join(__dirname, './dist')
};

module.exports = {
  mode: 'production',

  devServer: {
    static: {
      directory: PATHS.dist,
    },
    compress: true,
    port: 9000,
  },

  entry: {
    app: PATHS.src
  },

  externals: {
    paths: PATHS
  },

  output: {
    filename: 'index.js',
    path: PATHS.dist,
    clean: true
  },

  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.(ttf|woff|svg)$/i,
        type: 'asset/resource',
        exclude: [/images/],
        generator: {
          filename: 'assets/fonts/[name][ext][query]'
        }
      },
      {
        test: /\.(png|svg|gif|jpe?g)$/i,
        type: 'asset/resource',
        include: [/images/],
        generator: {
          filename: 'assets/images/[name][ext][query]'
        }
      }
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'index.css',
    }),
    new HtmlWebpackPlugin({
      template: `${PATHS.src}/index.html`
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "assets",
          to: "assets"
        }
      ]
    })
  ],

  performance: {
    hints: false,
  }
};
