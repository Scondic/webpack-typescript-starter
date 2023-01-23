import webpack from "webpack";
import type { WebpackBuildOptions } from "./types";

import HtmlWebpackPlugin from "html-webpack-plugin";
import miniCssExtractPlugin from "mini-css-extract-plugin";

export function configPlugins(
  options: WebpackBuildOptions
): webpack.WebpackPluginInstance[] {
  const plugins = [
    new HtmlWebpackPlugin({
      template: options.paths.html,
    }),

    new miniCssExtractPlugin({
      filename: "styles.css",
    }),
  ];

  return plugins;
}
