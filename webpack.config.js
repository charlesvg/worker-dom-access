const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    target: 'webworker',
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, "dist")
    },
    entry: {
        main: './src/main.ts',
        worker: './src/worker.ts',
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, "dist"),
        globalObject: '(self || this)'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: 'ts-loader' }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        chunks: ['main']
    })]
};
