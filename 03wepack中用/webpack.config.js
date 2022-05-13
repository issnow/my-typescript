const path = require('path');
const HWP = require('html-webpack-Plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'bundle.[hash:8].js',
    path:path.resolve(__dirname,'dist')
  },
  devtool: 'eval-cheap-module-source-map',
  mode: 'development',
  module: {
    rules: [
      { 
        test: /\.tsx?$/, 
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ["@babel/preset-env"],
              plugins: [
                [
                  "@babel/plugin-transform-runtime",
                  {
                    "corejs": 3
                  }
                ]
              ]
            }
          },
          "ts-loader"
        ]
      }
    ]
  },
  plugins: [
    new HWP({
      title: 'guocheng',
      template: './src/index.html'
    }),
    new CleanWebpackPlugin()
  ],
  // devServer: {
  //   static: {
  //     directory: path.join(__dirname, 'dist'),
  //   },
  //   compress: true,
  //   port: 5000,
  //   host: 'localhost',
  //   open: true,
  //   hot: true
  // }
  resolve: {
    extensions: ['.ts','.js']
  }
};