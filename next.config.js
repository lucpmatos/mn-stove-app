const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  distDir: 'dist',
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig
