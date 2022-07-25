// @ts-check

const withPlugins = require('next-compose-plugins')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  optimizeFonts: true,
  i18n: {
    locales: ['en-US', 'id'],
    defaultLocale: 'en-US'
  },
  api: {
    responseLimit: false
  },

  images: {
    domains: [],
    formats: ['image/avif', 'image/webp']
  }
}

module.exports = withPlugins([[withBundleAnalyzer]], nextConfig)
