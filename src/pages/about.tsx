import { ArrowLeftIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import { NextSeo } from 'next-seo'
import * as React from 'react'

import { Container } from '../components/Container'
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
          <Container prose>
            <div className='space-y-8'>
              <Link href='/'>
                <a className='group inline-flex items-center space-x-4 rounded-md focus:bg-brand-light-blue focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 focus:ring-offset-brand-light-blue'>
                  <div
                    aria-hidden
                    className='inline-flex items-center rounded-full border border-transparent bg-brand-blue p-1.5 text-white shadow-sm'
                  >
                    <ArrowLeftIcon className='h-5 w-5' />
                  </div>
                  <span className='font-medium text-brand-blue group-hover:underline'>
                    Back to homepage
                  </span>
                </a>
              </Link>
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
          </Container>
        </PageContent>
      </div>
    </>
  )
}
