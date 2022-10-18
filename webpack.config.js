const path = require('path');

module.exports = {
    context: __dirname,
    entry: './frontend/think_through.jsx',
    output: {
        path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/, 
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env', '@babel/react']
                    }
                },
            },
            // {
            //     test: /\.scss$/,
            //     use: ['style-loader', 'css-loader', 'sass-loader'],
            // },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            },

        ]
    },
    devtool: 'inline-source-map',
    resolve: {
        extensions: [".js", ".jsx", "*"]
    },
};
