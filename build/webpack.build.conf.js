const {merge} = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const WebpackFtpUpload = require('webpack-ftp-upload-plugin');

const buildWebpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  plugins: []
});

module.exports = new Promise((resolve, reject) => {
  resolve(buildWebpackConfig)
});