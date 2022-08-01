import Link from 'next/link'
import { NextSeo } from 'next-seo'
import * as React from 'react'

import { PageContent } from '../components/PageContent'
import { SiteHeader } from '../components/SiteHeader'
import { ExplanationSection, WhatIsThisSection } from '../modules/about'

export default function AboutPage() {
  return (
    <>
      <NextSeo title='About' />
      <div className='flex flex-col bg-brand-bg-light'>
        <SiteHeader />
        <PageContent>
          <div className='mx-auto w-full max-w-screen-sm'>
            <div className='space-y-8'>
              <WhatIsThisSection />
              <ExplanationSection />
            </div>

            <footer className='mt-8 text-sm font-light'>
              <Link href='https://angeloanan.xyz' passHref>
                <a>
                  <div>Created with 🤨, 😠 and 😡 by Angelo!</div>
                  <div>Found any mistakes? Don&apos;t hesitate to contact me</div>
                  <div className='mt-2'>https://angeloanan.xyz | @AfterDarkAngelo</div>
                </a>
              </Link>
            </footer>
          </div>
        </PageContent>
      </div>
    </>
  )
}
