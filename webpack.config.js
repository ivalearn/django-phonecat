'use strict';

var webpack = require('webpack'),
    SplitByPath = require('webpack-split-by-path'),
    ExtractText = require('extract-text-webpack-plugin'),
    BundleTracker = require('webpack-bundle-tracker');

module.exports = {
    // generate source maps for js & css bundles
    devtool: 'source-map',

    entry: {
        phonecat: './phonecat/assets/app.js',
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: [ 'babel' ],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: ExtractText.extract('style?sourceMap', 'css?sourceMap')
            },
            {
                test: /\.scss$/,
                loader: ExtractText.extract('style?sourceMap', 'css?sourceMap!sass?sourceMap')
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url?limit=10000&name=[name].[ext]'
            },
        ]
    },

    output: {
        path: __dirname + '/assets/bundles',
        filename: '[name]-[hash].js',
        chunkFilename: '[name]-[hash].js',
    },

    plugins: [
        new BundleTracker(__dirname + '/webpack-stats.json'),

        // do not publish if compilation fails
        new webpack.NoErrorsPlugin(),

        // aggressively remove duplicate modules
        new webpack.optimize.DedupePlugin(),

        // split off css
        new ExtractText('[name]-[hash].css'),

        // split off vendor bundle
        new SplitByPath([
            { name: 'vendor', path: __dirname + '/node_modules' }
        ])
    ]
};
