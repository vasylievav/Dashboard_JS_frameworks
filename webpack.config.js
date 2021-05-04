const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: [
        './src/public/index.js'
    ],
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'app.bundle.js',
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: 'file-loader?name=[name].[ext]',
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }
        },
    ],
},
plugins: [
    new webpack.NamedModulesPlugin(),
]
};