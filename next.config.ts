import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.jayaspace475.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "jayaspace475.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "jayaspace.co.in",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "everootinternational.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.everootinternational.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "yogawithshabana.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.yogawithshabana.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
