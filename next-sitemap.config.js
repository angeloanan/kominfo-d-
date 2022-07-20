// @ts-check

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://kominfod.angelo.fyi',

  generateRobotsTxt: true,
  sitemapSize: 7000,

  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/'
      }
    ]
  }
}
