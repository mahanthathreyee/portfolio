const { merge } = require('webpack-merge');
const webpack = require("webpack");
const common = require('./webpack.config');

module.exports = merge(common, {
    mode: 'development',
    entry: [
        'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true',
        './src/Index.jsx'
    ],
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
})