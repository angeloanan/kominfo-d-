// @ts-check

/**
 * @type {import('next-seo').NextSeoProps}
 */
const defaultSEOConfig = {
  defaultTitle: "Kominfo'd - Website ini bakal keblokir ga ya?",
  titleTemplate: "%s | Kominfo'd",

  description: 'Website ini bakal keblokir ga ya?',

  additionalMetaTags: [
    {
      name: 'google-site-verification',
      content: '6hRj86Hx02xLCsII57JKBQfSui5rHpi9mpF_8DLhDm4'
    }
  ],

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.SITE_URL ?? 'https://kominfod.angelo.fyi',
    site_name: "Kominfo'd",
    images: [
      {
        url: 'https://kominfod.angelo.fyi/og.png',
        alt: "Kominfo'd - Website ini keblokir ga ya?"
      }
    ]
  },

  twitter: {
    cardType: 'summary',
    site: '@AfterDarkAngelo'
  }
}

export default defaultSEOConfig
