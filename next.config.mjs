/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "www.theluxurysignature.com",
      },
       {
        protocol: "https",
        hostname: "www.pngall.com",
      },
    ],
  },
};

export default nextConfig;
