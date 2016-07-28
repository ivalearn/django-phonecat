'use strict';

var webpack = require('webpack'),
    ExtractText = require('extract-text-webpack-plugin'),
    SplitByPath = require('webpack-split-by-path');

module.exports = {
    entry: {
        phonecat: __dirname + '/phonecat/assets/app.js'
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

    plugins: [
        // do not publish if compilation fails
        new webpack.NoErrorsPlugin(),

        // split off vendor bundle
        new SplitByPath([
            { name: 'vendor', path: __dirname + '/node_modules' }
        ])
    ]
};
