/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/iichfront',
  images: {
    unoptimized: true,
    domains: ['web.cari1412.online'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'web.cari1412.online',
        port: '',
        pathname: '/**',
      },
    ],
  },
  assetPrefix: '/iichfront/',
}

export default nextConfig;