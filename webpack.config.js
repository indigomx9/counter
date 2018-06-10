let path = require('path');
module.exports = {
    entry: path.resolve(__dirname, 'src') + '/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: 'main.js',
        chunkFilename: '[id].js'  // Code splitting or Lazy loading
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'env', 'stage-2'],
                    plugins: ['syntax-dynamic-import', 'react-hot-loader/babel']
                }
            },
            {
                test: /\.css$/,
                use: [
                    require.resolve('style-loader'),
                    {
                        loader: require.resolve('css-loader'),
                        options: {
                            importLoaders: 1,
                            modules: true,
                            localIdentName: '[name]__[local]__[hash:base64:5]'
                        }
                    }
                ]
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/,
                loader: require.resolve('url-loader'),
                options: {
                    limit: 8000,
                    name: '[name].[hash:8].[ext]'
                }
            }
        ]
    }
};

