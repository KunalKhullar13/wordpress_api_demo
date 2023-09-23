/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["www.greyorange.com"],
    deviceSizes: [640, 750, 828, 1080, 1900],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
