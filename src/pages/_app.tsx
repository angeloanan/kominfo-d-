import '@fontsource/inter/variable.css'
import '../style/globals.css'

import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
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

      <div className='stylized-bg min-h-screen'>
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default CustomApp
