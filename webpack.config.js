const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = env => {
    return {
        entry: './src/index.js',
        // devtool: 'source-map',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].[hash].bundle.js'
        },
        watchOptions: {
            poll: true
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    query: { compact: false }
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                },
                {
                    test: /\.scss$/,
                    use: ['style-loader', 'css-loader', 'sass-loader']
                },
                {
                    test: /\.(png|jp(e*)g|svg|gif)$/,
                    use: [{
                        loader: 'url-loader',
                        options: {
                            limit: 100000, // Convert images < 8kb to base64 strings
                            name(file) {
                                console.log("process", env.mode)
                                if (env.mode === 'development') {
                                    return 'img/[path][name].[ext]';
                                }

                                return 'imgs/[hash].[ext]';
                            },
                            fallback: "file-loader",
                        }
                    }]
                },
            ]
        },
        plugins: [new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            inject: 'body',
        })],
        devServer: {
            disableHostCheck: true,
            historyApiFallback: true,
            publicPath: '/',
            inline: true,
            host: '0.0.0.0',
            port: 8009
        },

    }
};