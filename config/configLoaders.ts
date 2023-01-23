import webpack from "webpack";
import type { WebpackBuildOptions } from "./types";

import miniCssExtractPlugin from "mini-css-extract-plugin";

export function configLoaders(
  options: WebpackBuildOptions
): webpack.RuleSetRule[] {
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const scssLoader = {
    test: /\.(s*)css$/,
    use: [miniCssExtractPlugin.loader, "css-loader", "sass-loader"],
  };

  return [typescriptLoader, scssLoader];
}
