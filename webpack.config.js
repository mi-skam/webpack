const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
  mode: isDevelopment ? "development" : "production",

  devtool: "source-map",

  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        type: "asset/resource",
      },
      {
        test: /\.s?css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: "" },
          },
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["aframe-super-hot-loader", "babel-loader"],
      },
      {
        test: /scene.*\.html$/,
        exclude: /(node_modules)/,
        use: ["aframe-super-hot-html-loader"],
      },
      {
        test: /\.glsl/,
        exclude: /(node_modules)/,
        loader: "webpack-glsl-loader",
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({ template: "./src/templates/index.html" }),
  ],

  target: isDevelopment ? "web" : "browserslist",

  output: {
    assetModuleFilename: "assets/[hash][ext][query]",
    clean: true,
  },

  devServer: {
    contentBase: "./dist",
    hot: true,
  },
};
