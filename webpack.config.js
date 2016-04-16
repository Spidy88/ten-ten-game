const path = require('path');

module.exports = {
    entry: [
        'babel-polyfill',
//        'bootstrap-loader',
        './app/sass/ten-ten.scss',
        './app/index.js'
    ],
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
                loaders: [ 'style', 'css' ]
            },
            {
                test: /\.scss$/,
                loaders: [ 'style', 'css', 'sass' ]
            }/*,
            {
                test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url?limit=10000"
            },
            {
                test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
                loader: 'file'
            },
            // Bootstrap 3
            {
                test: /bootstrap-sass\/assets\/javascripts\//,
                loader: 'imports?jQuery=jquery'
            }*/
        ]
    }
};