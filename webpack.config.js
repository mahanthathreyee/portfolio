const webpack = require("webpack");

module.exports = {
    mode: 'development',
    context: __dirname,
    entry: [
        'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true',
        './src/Index.jsx'
    ],
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
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};