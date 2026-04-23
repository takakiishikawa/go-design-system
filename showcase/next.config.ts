import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  transpilePackages: ["@takaki/go-design-system"],
};

export default nextConfig;
