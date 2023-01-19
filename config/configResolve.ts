import webpack from "webpack";
import type { WebpackBuildOptions } from "./types";

export function configResolve(
  options: WebpackBuildOptions
): webpack.ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js"],
  };
}
