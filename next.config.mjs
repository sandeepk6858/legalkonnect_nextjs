/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['legalkonnect.com'],
      unoptimized: true,
    },
    env: {
      IMAGES_ORIGIN: process.env.IMAGES_ORIGIN,
    },
  };
  
  export default nextConfig;
