'use strict';

var config = require('./webpack.base.config.js'),
    ExtractText = require('extract-text-webpack-plugin'),
    BundleTracker = require('webpack-bundle-tracker');

// generate source maps for js & css bundles
config.devtool = 'source-map';

config.output = {
  path: __dirname + '/assets/debug',
  filename: '[name]-[hash].js',
  chunkFilename: '[name]-[hash].js',
};

config.plugins = config.plugins.concat([
    // split off css
    new ExtractText('[name]-[hash].css'),

    new BundleTracker({
      filename: './webpack-stats-debug.json'
    })
]);

module.exports = config;
// aggressively remove duplicate modules
// new webpack.optimize.DedupePlugin(),
