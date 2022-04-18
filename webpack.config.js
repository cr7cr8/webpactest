const path = require("path")
const htmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {

    entry: './src/index.js',
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
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/i,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                        plugins: ["@babel/plugin-transform-runtime"]
                    }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  "style-loader",
                  // Translates CSS into CommonJS
                  "css-loader",
                  // Compiles Sass to CSS
                  "sass-loader",
                ],
              },
        ]
    },
    devtool: "source-map"
}