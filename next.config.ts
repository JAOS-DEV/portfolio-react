import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

const pagesBasePath = "/portfolio-react";
const isProduction = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProduction ? pagesBasePath : "",
  assetPrefix: isProduction ? pagesBasePath : "",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: path.dirname(fileURLToPath(import.meta.url)),
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
