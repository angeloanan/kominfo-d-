import { GetStaticPropsContext, GetStaticPropsResult } from 'next'
import Link from 'next/link.js'
import { NextSeo } from 'next-seo'
import * as React from 'react'

import FullPSEData from '../../public/data.json'
import { websiteSections } from '../_data/sections'
import { devStarterPack, idnStarterPack, linuxStarterPack, websiteListUSA } from '../_data/websites'
import { WebsiteEntry } from '../components/WebsiteEntry'
import { fetchTrustPositif } from '../functions/fetchTrustPositif'
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
  trustPositifData: Record<string, boolean>
}

export async function getStaticProps(
  ctx: GetStaticPropsContext
): Promise<GetStaticPropsResult<IndexPageProps>> {
  const sites: Record<string, boolean> = {}

  allWebsitesCombined.forEach((w) => {
    sites[w.website] = isWebsiteRegistered(FullPSEData as PSEData[], w.website)
  })

  const [blockData, trustPositifData] = await Promise.all([
    generateBlockList(),
    fetchTrustPositif()
  ])

  return {
    props: { PSEData: sites, blockData, trustPositifData },
    revalidate: 5 * 60
  }
}

const IndexPage = ({ PSEData: data, blockData, trustPositifData }: IndexPageProps) => {
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

          {websiteSections.map((item) => (
            <section className='mt-8' key={item.title}>
              <h2 className='text-2xl font-semibold'>{item.title}</h2>
              <div>{item.description}</div>
              <ul className='mt-4 grid grid-flow-row grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                {item.sites.map((website) => (
                  <WebsiteEntry
                    website={website.icon}
                    key={website.icon.title}
                    trustPositif={
                      trustPositifData?.[
                        website.website.replace(/(https?:\/\/)/, '').replace(/www\./, '')
                      ] ?? false
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
