/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/your-repo-name', // Replace with your actual repository name
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
