'use strict';

var webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    BundleTracker = require('webpack-bundle-tracker');

module.exports = {
    // generate source maps for js & css bundles
    devtool: 'source-map',

    entry: {
        phonecat: './phonecat/assets/app.js',
        vendor: [
            'jquery',
            'bootstrap/dist/js/bootstrap',
            'angular',
            'angular-animate',
            'angular-resource',
            'angular-ui-router'
        ]
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
                loader: ExtractTextPlugin.extract('style?sourceMap', 'css?sourceMap')
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style?sourceMap', 'css?sourceMap!sass?sourceMap')
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url?limit=10000&name=[name].[ext]'
            },
        ]
    },

    output: {
        path: './assets',
        publicPath: '/static/',
        filename: 'phonecat-[hash].js',
    },

    plugins: [
        new BundleTracker('./webpack-stats.json'),

        // do not publish if compilation fails
        new webpack.NoErrorsPlugin(),

        // aggressively remove duplicate modules
        new webpack.optimize.DedupePlugin(),

        // split off vendor bundle
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),

        // split off css
        new ExtractTextPlugin('phonecat-[hash].css'),
    ]
};
