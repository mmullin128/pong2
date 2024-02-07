const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        index: './src/index.js'
    },
    
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, './public'),
      clean: true,
    },

    plugins: [
        new HtmlWebpackPlugin({
          template: 'src/template.html'
        }),
    ],

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.js$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: "defaults" }],

                            ["@babel/preset-react", {"runtime": "automatic"}]
                        ],
                    }
                }
            },
        ],
    },
};