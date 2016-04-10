const path = require('path');

module.exports = {
    entry: './app/index.js',
    output: {
        path: path.join(__dirname, 'static/build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            }
        ]
    }
};