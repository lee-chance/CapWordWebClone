import type { NextConfig } from "next";

const basePath = process.env.BASE_PATH?.trim();

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: "export",
  ...(basePath ? { basePath, assetPrefix: `${basePath}/` } : {}),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
