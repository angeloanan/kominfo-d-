import { GetStaticPropsContext, GetStaticPropsResult } from 'next'
import Link from 'next/link.js'
import { NextSeo } from 'next-seo'
import * as React from 'react'

import FullPSEData from '../../public/data.json'
import { devStarterPack, idnStarterPack, linuxStarterPack, websiteListUSA } from '../_data/websites'
import { WebsiteEntry } from '../components/WebsiteEntry'
import { ExplanationSection, ManualSearchSection, WhatIsThisSection } from '../modules'
import type { PSEData } from '../types/PSEData'
import { generateBlockList } from './api/fetchBlocked'

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

const allWebsitesCombined = [
  devStarterPack,
  idnStarterPack,
  linuxStarterPack,
  websiteListUSA
].flat()

interface IndexPageProps {
  PSEData: Record<string, boolean>
  blockData: Record<string, boolean>
}

export async function getStaticProps(
  ctx: GetStaticPropsContext
): Promise<GetStaticPropsResult<IndexPageProps>> {
  const sites: Record<string, boolean> = {}

  allWebsitesCombined.forEach((w) => {
    sites[w.website] = isWebsiteRegistered(FullPSEData as PSEData[], w.website)
  })

  const blockData = await generateBlockList()

  return {
    props: { PSEData: sites, blockData },
    revalidate: 5 * 60
  }
}

const sections = [
  {
    title: 'Indonesia Starterpack',
    description: <p>Situs atau service ini terpopuler dengan orang Indonesia</p>,
    sites: idnStarterPack
  },
  {
    title: 'Essential Developer Toolkit',
    description: <p>Service yang ✨ anak bangsa ✨ mungkin akan pakai saat membuat app</p>,
    sites: devStarterPack
  },
  {
    title: 'Top websites USA',
    description: (
      <>
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
      </>
    ),
    sites: websiteListUSA
  },
  {
    title: 'Linux Starterpack',
    description: <p>Service yang sering dipakai Linux user 🐧</p>,
    sites: linuxStarterPack
  }
]

const IndexPage = ({ PSEData: data, blockData }: IndexPageProps) => {
  const [trustPositifMap, setTrustPositifMap] = React.useState<Map<String, String>>(new Map())

  React.useEffect(() => {
    fetch('/api/trustPositif', {
      method: 'POST',
      body: new URLSearchParams({
        name: allWebsitesCombined
          .map((item) => item.website.replace(/(https?:\/\/)/, '').replace(/www\./, ''))
          .join('\n')
      })
    })
      .then((res) => res.json())
      .then((res) =>
        setTrustPositifMap(new Map(res.values.map((item: any) => [item.Domain, item.Status])))
      )
  }, [])

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

          {sections.map((item) => (
            <section className='mt-8' key={item.title}>
              <h2 className='text-2xl font-semibold'>{item.title}</h2>
              <div>{item.description}</div>
              <ul className='mt-4 grid grid-flow-row grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                {item.sites.map((website) => (
                  <WebsiteEntry
                    website={website.icon}
                    key={website.icon.title}
                    trustPositif={
                      trustPositifMap.get(
                        website.website.replace(/(https?:\/\/)/, '').replace(/www\./, '')
                      ) === 'Ada'
                    }
                    indiWtf={blockData?.[website.website] ?? false}
                    registered={data[website.website]}
                  />
                ))}
              </ul>
            </section>
          ))}

          <ManualSearchSection />

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
