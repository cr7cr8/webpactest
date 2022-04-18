const path = require("path")
const htmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {

    entry: './src/index.js',
    mode: 'development',
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "bundle.js"
    },
    devServer: {
        port: "3000",
        open: true,
        hot: true,
        liveReload: true,

    },
    plugins: [
        new htmlWebpackPlugin({ template: "./src/index.html" }),
        "@babel/plugin-transform-runtime"
    ],
    module: {
        rules: [
            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
            }
        ]
    },
    devtool:"source-map"
}