const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const PATHS = {
  src: path.join(__dirname, '/src'),
  dist: path.join(__dirname, '/dist')
}

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
        loader: 'html-loader',
        options: {
          esModule: false,
        }
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
    })
  ],

  performance: {
    hints: false,
  },

  resolve: {
    alias: {
      '@variables': path.join( PATHS.src, '/variables/variables.scss' ),
      '@components': path.join( PATHS.src, '/components/' ),
      '@images': path.join( PATHS.src, '/assets/images/' ),
      '@fonts': path.join( PATHS.src, '/assets/fonts/' ),
      '@styles': path.join( PATHS.src, '/styles/' )
    }
  },
};
