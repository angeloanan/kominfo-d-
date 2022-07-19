// @ts-check

/**
 * @type {import('next-seo').NextSeoProps}
 */
const defaultSEOConfig = {
  title: "Angelo's NextJS Template",
  titleTemplate: "%s | Angelo's NextJS Template",

  description:
    "Angelo's Personal NextJS Template - Complete with battery, energy or whatever you call it 🙄",

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.SITE_URL ?? 'https://angeloanan.xyz',
    site_name: "Angelo's NextJS Template"
  },

  twitter: {
    handle: '@uwungelo',
    site: '@uwungelo',
    cardType: 'summary_large_image'
  }
}

export default defaultSEOConfig
