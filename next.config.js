/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: 'https:/s.gravatar.com/avatar/',
  }
}

module.exports = nextConfig
