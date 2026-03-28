import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "thestap.blob.core.windows.net",
        port: "",
        pathname: "/**",
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
