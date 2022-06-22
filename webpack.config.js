const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")



module.exports = {

    entry: {


        main: './src/index.js',
      //  main2: './src/index2.js'
    },
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "[name].[contenthash].js",
        clean: true,
        assetModuleFilename: 'images/[name].[hash][ext]'
    },
    devServer: {
        port: "3000",
        open: true,
        hot: true,
        liveReload: true,

    },
    plugins: [
        //   new MiniCssExtractPlugin({ filename: "css/[name].[contenthash].css" }),


        new MiniCssExtractPlugin({ filename: "css/[name].[contenthash].css" }),


        new HtmlWebpackPlugin({ template: "./src/index.html" }),
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    },
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
        ],
        //minimize: true,  //enable minimising css in devleopment mode

    },
    module: {
        rules: [
            
            {
                test: /\.jsx?$/i,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@emotion/babel-preset-css-prop","@babel/preset-env", "@babel/preset-react"],
                        plugins: ["@emotion/babel-plugin","@babel/plugin-transform-runtime"]
                    }
                }
            },
            {
                test: /\.(s[ac])|(c)ss$/i,
                use: [

                    { loader: MiniCssExtractPlugin.loader, },
                    // Translates CSS into CommonJS
                    { loader: "css-loader" },
                    // Compiles Sass to CSS
                    { loader: "sass-loader" },
                ],
            },
            {
                test: /\.html$/i,
                exclude: /node_modules/,
                use: ["html-loader"]
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