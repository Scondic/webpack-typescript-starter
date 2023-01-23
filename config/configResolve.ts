import webpack from "webpack";
import type { WebpackBuildOptions } from "./types";

import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";

export function configResolve(
  options: WebpackBuildOptions
): webpack.ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js"],
    plugins: [new TsconfigPathsPlugin()],
  };
}
