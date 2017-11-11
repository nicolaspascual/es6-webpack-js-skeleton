var DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'dist/bundle.js'
    },
    plugins: [
        new DashboardPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    }
};