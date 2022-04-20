const path = require("path")
const htmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {

    entry: {
        main: './src/index.js',
      //  main2:'./src/index2.js'
    },
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "[name].[contenthash].js",
        clean:true,
        assetModuleFilename: 'images/[name].[hash].[ext]'
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
            {
                test:/\.html$/i,
                exclude: /node_modules/,
                use:["html-loader"]
            },
            // {
            //     test:/\.(PNG|jpg|jpeg|gif|svg)/i,
            //     exclude: /node_modules/,
            //     use:{
            //         loader:"file-loader",
            //         options:{
            //             name:"[name].[hash].[ext]",
            //             outputPath:"imgs"
            //         }
            //     }
            // }
        ]
    },
    devtool: "source-map"
}