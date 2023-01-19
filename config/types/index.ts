export interface WebpackBuildOptions {
  port: number;
  mode: "development" | "production";
  paths: WebpackBuildPaths;
}

export interface WebpackBuildPaths {
  build: string;
  entry: string;
  html: string;
}
