import path from "path";
import { WebpackConfiguration } from "webpack-cli";
import { WebpackBuildOptions, WebpackBuildPaths } from "./config/types";
import {
  configDevServer,
  configLoaders,
  configPlugins,
  configResolve,
} from "./config";

const paths: WebpackBuildPaths = {
  build: path.resolve(__dirname, "build"),
  entry: path.resolve(__dirname, "src", "index.tsx"),
  html: path.resolve(__dirname, "public", "index.html"),
};

const options: WebpackBuildOptions = {
  port: 3000,
  mode: "development",
  paths,
};

const configuration: WebpackConfiguration = {
  mode: options.mode,
  entry: paths.entry,
  output: {
    filename: "[name].[contenthash].js",
    path: paths.build,
    clean: true,
  },
  module: {
    rules: configLoaders(options),
  },
  plugins: configPlugins(options),
  devServer: configDevServer(options),
  resolve: configResolve(options),
};

export default configuration;
