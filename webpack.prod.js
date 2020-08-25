const { merge } = require('webpack-merge');
const common = require('./webpack.config');

module.exports = merge(common, {
    mode: 'production',
    entry: [
        './src/Index.jsx'
    ],
})