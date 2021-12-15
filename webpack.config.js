const fs = require('fs');
const path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlSWebpackPlugin = require('htmls-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


const defineDistSection = ext => ext + '/[name].' + ext;

const defineFileName = filepath => filepath.match(/[^\\/]+$/)[0].replace(/\.js$/,'');

const definePagesPaths = function definePagesPathsByRootFolder( folder ) {
  const recursiveSearch = volumePath => fs
    .readdirSync( volumePath )
    .map( chapterName => path.join( volumePath, chapterName ) )
    .flatMap( chapterPath => /\..+$/.exec( chapterPath ) ? chapterPath : recursiveSearch( chapterPath ) );

  return recursiveSearch( folder ).filter( filepath => /(?<!\.noentry)\.js$/.exec( filepath ) );
}

const defineEntryPoints = function convertArrayOfPathsIntoEntriesObject( pagesArray ) {
  const preparedArray = pagesArray
    .map( page => [ defineFileName( page ), page ] );

  return Object.fromEntries( preparedArray );
}


const PATHS = {
  src: path.join(__dirname, '/src'),
  dist: path.join(__dirname, '/dist')
}

const PAGES__ROOT = path.join( PATHS.src, 'pages' );

const PAGES__FULLPATHS = definePagesPaths( PAGES__ROOT );
const PAGES__ENTRIES = defineEntryPoints( PAGES__FULLPATHS );
const PAGES__NAMES = PAGES__FULLPATHS.map( filepath => defineFileName( filepath ) );


module.exports = {
  mode: 'production',

  devServer: {
    static: {
      directory: PATHS.dist,
    },
    compress: true,
    port: 9000,
  },

  entry: PAGES__ENTRIES,

  externals: {
    paths: PATHS
  },

  output: {
    filename: defineDistSection('js'),
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
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          }
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
    ...PAGES__NAMES.map( (pageName, index) => new HtmlWebpackPlugin({
      template: PAGES__FULLPATHS[index].replace(/\.js$/,'.html'),
      filename: `./${pageName}.html`,
      chunks: [ pageName ],
    })),
    /*new HtmlSWebpackPlugin({
      htmls: PAGES__NAMES.map( (pageName, index) => ({
        src: PAGES__FULLPATHS[index].replace(/\.js$/,'.html'),
        filename: `./${pageName}.html`,
        chunks: [ pageName ],
      }))
    }),*/
    new MiniCssExtractPlugin({
      filename: defineDistSection('css'),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "src/assets",
          to: "assets"
        }
      ]
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
      '@lib': path.join( PATHS.src, '/assets/lib/' ),
      '@styles': path.join( PATHS.src, '/assets/styles/' )
    }
  }
};
