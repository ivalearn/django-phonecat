'use strict';

var config = require('./webpack.base.config.js'),
    webpack = require('webpack'),
    ExtractText = require('extract-text-webpack-plugin'),
    BundleTracker = require('webpack-bundle-tracker');

config.output = {
  path: __dirname + '/assets/prod',
  filename: '[name].js',
  chunkFilename: '[name].js',
};

config.plugins = config.plugins.concat([
    // aggressively remove duplicate modules
    new webpack.optimize.DedupePlugin(),

    // remove a lot of debugging code in React
    new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify('production')
    }}),

    // keep hashes consistent between compilations
    new webpack.optimize.OccurenceOrderPlugin(),

    // minify code
    new webpack.optimize.UglifyJsPlugin({
        compressor: {
            warnings: false
        }
    }),

    // split off css
    new ExtractText('[name].css'),

    new BundleTracker({
        filename: './webpack-stats-prod.json'
    })
]);

module.exports = config;
