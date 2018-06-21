const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.config.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    plugins: [
        new CopyWebpackPlugin([{
            from: './src/assets', to: 'dist'
        }],{}),
        new UglifyJsPlugin({
            sourceMap: true
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
});