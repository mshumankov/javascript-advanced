const path = require('path');
module.exports = {
    entry: path.resolve(__dirname, 'src', 'app.js'),
    output: {

        filename: 'bundle.min.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }]
    }
}