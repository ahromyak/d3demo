// const webpack = require('webpack');
const path = require('path');
// const merge = require('webpack-merge');
// const devMode = reguire('./webpack.development.config.js');
// const prodMode = reguire('./webpack.production.config.js');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

// const IS_DEV = (process.env.NODE_ENV === 'development');

// const copyPlugin = new CopyWebpackPlugin([{
//     from: './src/assets', to: 'dist'
// }],{});

const htmlPlugin = new HtmlWebPackPlugin({
    template: path.resolve(__dirname, './src/index.html'),
    filename: "./index.html"
});

// const definePlugin = new webpack.DefinePlugin({
//     IS_DEV: IS_DEV
// });

const defaultSettings = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: "[name]_[local]_[hash:base64]",
                            sourceMap: true,
                            minimize: true
                        }
                    }
                ]
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true,
                        },
                    },
                ],
            }
        ]
    },
    plugins: [htmlPlugin]
};

module.exports = defaultSettings;