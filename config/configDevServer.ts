import type { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";
import type { WebpackBuildOptions } from "./types";

export function configDevServer(
  options: WebpackBuildOptions
): WebpackDevServerConfiguration {
  return {
    port: options.port,
    open: false,
    historyApiFallback: true,
    hot: true,
  };
}
