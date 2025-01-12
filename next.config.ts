/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/iichfront',
  assetPrefix: '/iichfront/',
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}