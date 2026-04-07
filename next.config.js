/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ['192.168.140.140'],
  turbopack: {
    root: __dirname,
  },
};

module.exports = nextConfig;
