module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        path: __dirname+'/build',
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        noParse: /node_modules\/json-schema\/lib\/validate\.js/,
        loaders: [
            {
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.css$/,
                loader: "style!css"
            },
            {
                test: /\.less$/,
                loader: "style!css!less"
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg|gif)$/,
                loader: 'file-loader'
            }
        ]
    },
    node: {
        fs: "empty",
        net: "empty",
        tls: "empty"
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devServer: {
        historyApiFallback: true
    }
};
