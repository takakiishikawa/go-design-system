import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  output: "export",
  transpilePackages: ["@takaki/go-design-system"],
}

export default nextConfig
