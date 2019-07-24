module.exports = {
    entry: {
        bundle: './src/index.js'
    },
    module: {
        rules: [{
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.(svg|png|jpe?g|jpg|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: 'img'
                    }
                }
            },
        ]
    }
}