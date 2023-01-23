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

  const babelLoader = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: [
          // Documentation https://babeljs.io/docs/en/babel-preset-env
          ["@babel/preset-env", { targets: "defaults" }],

          // Documentation https://babeljs.io/docs/en/babel-preset-typescript
          "@babel/preset-typescript",

          // Documentation https://babeljs.io/docs/en/babel-preset-react
          "@babel/preset-react",
        ],
      },
    },
  };

  return [babelLoader, typescriptLoader, scssLoader];
}
