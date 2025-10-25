/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  images: {
    domains: ['images.prismic.io'], // 👈 add your external image domain here
  },
};

export default nextConfig;
