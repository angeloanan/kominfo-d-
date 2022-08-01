import '@fontsource/inter/variable.css'
import '../style/globals.css'

import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import Script from 'next/script'
import { DefaultSeo } from 'next-seo'

import SEOConfig from '../../next-seo.config'

type CustomAppProps = AppProps & {
  Component: NextPage & {
    disableLayout?: boolean
  }
}

function CustomApp({ Component, pageProps }: CustomAppProps) {
  return Component.disableLayout ? (
    <Component {...pageProps} />
  ) : (
    <>
      <DefaultSeo {...SEOConfig} />

      <div className='min-h-screen bg-brand-bg-light'>
        <Component {...pageProps} />
      </div>

      <Script
        strategy='afterInteractive'
        defer
        src='https://static.cloudflareinsights.com/beacon.min.js'
        data-cf-beacon='{"token": "f24172e2386840c181d18d8e617a5861"}'
      />
    </>
  )
}

export default CustomApp
