import webpack from "webpack";
import type { WebpackBuildOptions } from "./types";

export function configLoaders(
  options: WebpackBuildOptions
): webpack.RuleSetRule[] {
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  return [typescriptLoader];
}
