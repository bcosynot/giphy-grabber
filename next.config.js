/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.giphy.com",
        port: "",
        pathname: "/media/*/giphy.webp",
      },
    ],
  },
};

module.exports = nextConfig;
