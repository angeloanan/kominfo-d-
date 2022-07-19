// @ts-check

/**
 * @type {import('next-seo').NextSeoProps}
 */
const defaultSEOConfig = {
  title: "Kominfo'd - Website ini bakal keblokir ga ya?",
  titleTemplate: "%s | Kominfo'd",

  description: 'Website ini bakal keblokir ga ya?',

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.SITE_URL ?? 'https://kominfod.angelo.fyi',
    site_name: "Kominfo'd"
  }
}

export default defaultSEOConfig
