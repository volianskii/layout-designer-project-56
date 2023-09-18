const path = require('path');

module.exports = {
  mode: 'development',//build mode
  entry: './src/js/main.js',//entry point
  devtool: 'source-map',//additionally create source-map file
  output: {
    filename: 'main.bundle.js',//name of bundle that webpack needs to create
    path: path.resolve(__dirname, 'src/'),//path to bundle package. path helps solving problems with different OS's path structures
  },
};