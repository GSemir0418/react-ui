const base = require('./webpack.config')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = Object.assign({}, base, {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: {
        example: './example.tsx'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'example.html',
            title: 'gsq-ui'
        })
    ],
})