/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Включаем статическую генерацию
  basePath: '/iichfront', // Замените на название вашего репозитория
  images: {
    unoptimized: true,
  },
  assetPrefix: '/iichfront/', // Замените на название вашего репозитория
}

export default nextConfig;