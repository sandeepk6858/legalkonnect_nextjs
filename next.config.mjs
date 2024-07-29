/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['legalkonnect.com'],
      unoptimized: true,
    },
    env: {
      IMAGES_ORIGIN: process.env.IMAGES_ORIGIN,
      NEXTAUTH_URL: process.env.NEXTAUTH_URL,
      NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
      API_URL: process.env.API_URL,
    },
  };
  
  export default nextConfig;
