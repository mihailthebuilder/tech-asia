const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  //dev options
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    hot: true,
  },

  entry: "./src/index.js",

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },

  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["**/*", "!index.html", "!favicon.svg"],
    }),
  ],

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
          {
            loader: "sass-resources-loader",
            options: {
              resources: ["./src/common/common.scss"],
            },
          },
        ],
      },

      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: "file-loader",
      },

      {
        test: /\.html$/i,
        use: "html-loader",
      },

      {
        test: /\.svg$/i,
        use: "raw-loader",
      },
    ],
  },
};
