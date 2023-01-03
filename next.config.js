/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  experimental:{
    appDir: true
  },
  images:{
    domains: ["cdn.sanity.io"]
  }
}
