const HtmlWebpackPlugin = require('html-webpack-plugin');
const BrowserSyncWebpackPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: [
        './src/main.ts',
        './src/style.css',
    ],
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
        ],
    },
    resolve: {
        extensions: [
            '.ts', '.js',
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'A Template For Browser TypeScript Application',
        }),
        new BrowserSyncWebpackPlugin({
            host: 'localhost',
            port: 2000,
            server: {
                baseDir: 'dist',
            },
        }),
    ],
    watchOptions: {
        poll: true,
        ignored: /node_modules/,
    },
};
