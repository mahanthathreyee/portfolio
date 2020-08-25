const webpack = require("webpack");

module.exports = {
    context: __dirname,
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: { 
                    loader: "babel-loader" 
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader', 
                    {
                        loader: 'css-loader',
                        options: { modules: true }
                    },
                    'sass-loader',
                ],
            }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: __dirname,
        publicPath: '/',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    }
};