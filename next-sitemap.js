// @ts-check

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://angeloanan.xyz',

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
