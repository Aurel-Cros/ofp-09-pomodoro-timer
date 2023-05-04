// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = process.env.NODE_ENV == 'production';

const config = {
    context: path.resolve(__dirname, 'src'),
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    devServer: {
        open: true,
        host: 'localhost',
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        watchFiles: ['dist/**']
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.mini.css'
        })

        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                loader: 'babel-loader',
            },
            {
                test: /index\.html/,
                type: 'asset/resource',
                generator: {
                    filename: 'index.html'
                }
            },
            {
                test: /\.(svg|png|jpg|gif|ttf|woff|woff2)$/i,
                type: 'asset/resource',
                generator: {
                    filename: '[name][ext]'
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.css$/i,
                type: 'asset/resource',
                generator: {
                    filename: '[name][ext]'
                }
            },
            {
                test: /\.mp3$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/audio/[name][ext]'
                }
            }

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
    } else {
        config.mode = 'development';
    }
    return config;
};
