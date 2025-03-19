import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '86v8u6agau.ufs.sh',
        pathname: '/f/**',
      },
    ]
  }
};

export default nextConfig;
