import Link from 'next/link.js'
import { NextSeo } from 'next-seo'
import * as React from 'react'
import useSWR from 'swr'

import { devStarterPack, idnStarterPack, linuxStarterPack, websiteListUSA } from '../_data/websites'
import { WebsiteEntry } from '../components/WebsiteEntry'
import { ExplanationSection, ManualSearchSection, WhatIsThisSection } from '../modules'
import type { PSEData } from '../types/PSEData'

const fetcher = (url: string) => fetch(url).then((r) => r.json())
const isWebsiteRegistered = (websiteData: PSEData[], findUrl: string) => {
  return websiteData.some((entry) =>
    // Return true if the url is found in the list of registered websites
    entry.attributes.website.toLowerCase().startsWith('http')
      ? // Handles URL starts with http, removing protocol
        entry.attributes.website
          .toLowerCase()
          .replace(/(https?:\/\/)/, '')
          .startsWith(findUrl)
      : // Directly searches for entry
        entry.attributes.website.toLowerCase().startsWith(findUrl)
  )
}

const IndexPage = () => {
  const { data, error, isValidating } = useSWR<PSEData[]>('/data.json', fetcher, {
    // 1 Hour refresh
    refreshInterval: 60 * 60 * 1000,
    revalidateOnFocus: false
  })

  return (
    <>
      <NextSeo />

      <div className='flex w-full justify-center'>
        <div className='w-full max-w-screen-xl p-8'>
          <header className='flex w-full flex-col items-center'>
            <h1 className='text-5xl font-bold italic'>Kominfo&apos;d?</h1>
            <span>Website ini bakal keblokir ga ya?</span>
          </header>

          <WhatIsThisSection />

          <ExplanationSection />

          <section className='mt-8'>
            <h2 className='text-2xl font-semibold'>Indonesia Starterpack</h2>
            <p>Situs atau service ini terpopuler dengan orang Indonesia</p>
            <ul className='mt-4 grid grid-flow-row grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
              {idnStarterPack.map((website) => (
                <WebsiteEntry
                  website={website.icon}
                  key={website.icon.title}
                  loading={data == null || isValidating}
                  registered={
                    // TODO: Properly type this
                    data != null && isWebsiteRegistered(data, website.website)
                  }
                />
              ))}
            </ul>
          </section>

          <section className='mt-8'>
            <h2 className='text-2xl font-semibold'>Essential developer toolkit</h2>
            <p>Service yang ✨ anak bangsa ✨ mungkin akan pakai saat membuat app</p>

            <ul className='mt-4 grid grid-flow-row grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
              {devStarterPack.map((website) => (
                <WebsiteEntry
                  website={website.icon}
                  key={website.icon.title}
                  loading={data == null || isValidating}
                  registered={
                    // TODO: Properly type this
                    data != null && isWebsiteRegistered(data, website.website)
                  }
                />
              ))}
            </ul>
          </section>

          <section className='mt-8'>
            <h2 className='text-2xl font-semibold'>Top websites USA</h2>
            <p>
              2022 Top websites in the USA. Sumber data website diambil dari{' '}
              <a
                href='https://www.semrush.com/blog/most-visited-websites/'
                className='text-blue-700 underline'
                target='_blank'
                rel='noreferrer'
              >
                semrush.com
              </a>
            </p>
            <p>
              <em>Catatan: Ada beberapa website ditiadakan karena tidak berhubungan</em>
            </p>
            <ul className='mt-4 grid grid-flow-row grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
              {websiteListUSA.map((website) => (
                <WebsiteEntry
                  website={website.icon}
                  key={website.icon.title}
                  loading={data == null || isValidating}
                  registered={
                    // TODO: Properly type this
                    data != null && isWebsiteRegistered(data, website.website)
                  }
                />
              ))}
            </ul>
          </section>

          <section className='mt-8'>
            <h2 className='text-2xl font-semibold'>Linux Starterpack</h2>
            <p>Service yang sering dipakai Linux user 🐧</p>

            <div className='mt-4 grid grid-flow-row grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
              {linuxStarterPack.map((website) => (
                <WebsiteEntry
                  website={website.icon}
                  key={website.icon.title}
                  loading={data == null || isValidating}
                  registered={
                    // TODO: Properly type this
                    data != null &&
                    data?.filter((e: { attributes: { website: string } }) =>
                      e.attributes.website.toLowerCase().startsWith(website.website)
                    ).length > 0
                  }
                />
              ))}
            </div>
          </section>

          <ManualSearchSection data={data} />

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
      </div>
    </>
  )
}

export default IndexPage
