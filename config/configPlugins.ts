import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import type { WebpackBuildOptions } from "./types";

export function configPlugins(
  options: WebpackBuildOptions
): webpack.WebpackPluginInstance[] {
  const plugins = [
    new HtmlWebpackPlugin({
      template: options.paths.html,
    }),
  ];

  return plugins;
}
