import { GetStaticPropsContext, GetStaticPropsResult } from 'next'
import Link from 'next/link.js'
import { NextSeo } from 'next-seo'
import * as React from 'react'

import FullPSEData from '../../public/data.json'
import { categories, CategoryInterface } from '../_data/categories'
import { WebsiteInterface, websites } from '../_data/websites'
import { PageContent } from '../components/PageContent'
import { SearchBox } from '../components/SearchBox'
import { SiteHeader } from '../components/SiteHeader'
import { WebsiteEntry } from '../components/WebsiteEntry'
import { fetchTrustPositif } from '../functions/fetchTrustPositif'
import { CategoryButtonSection, ManualSearchSection, WelcomeMessageSection } from '../modules/home'
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

/**
 * Checks if website has currently selected filter
 * @param source
 * @param sourceFilter
 * @returns {boolean}
 */
const filterCategoryAll = (
  source: WebsiteInterface,
  sourceFilter: CategoryInterface[]
): boolean => {
  return sourceFilter.reduce(
    (old: boolean, current: CategoryInterface) => old && source.categories.includes(current.id),
    true
  )
}

interface IndexPageProps {
  PSEData: Record<string, boolean>
  blockData: Record<string, boolean>
  trustPositifData: Record<string, boolean>
}

export async function getStaticProps(
  ctx: GetStaticPropsContext
): Promise<GetStaticPropsResult<IndexPageProps>> {
  const sites: Record<string, boolean> = {}

  websites.forEach((w) => {
    sites[w.website] = isWebsiteRegistered(FullPSEData as PSEData[], w.website)
  })

  const [blockData] = await Promise.all([
    generateBlockList()
    // TODO: HOTFIX - Database TrustPositif Kominfo lagi down
    // fetchTrustPositif()
  ])

  // TODO: HOTFIX - Database TrustPositif Kominfo lagi down
  const trustPositifData = {}

  return {
    props: { PSEData: sites, blockData, trustPositifData },
    revalidate: 5 * 60
  }
}

const IndexPage = ({ PSEData: data, blockData, trustPositifData }: IndexPageProps) => {
  const [selectedCategories, setSelectedCategories] = React.useState([categories[0]])
  const [searchString, setSearchString] = React.useState('')
  const dedupedWebsites = new Array<string>()
  const categoryButtonEventHandler = (cat: CategoryInterface[]) => {
    setSelectedCategories([...cat])
  }
  const searchQueryEventHandler = (event: React.ChangeEvent) => {
    setSearchString((event.target as HTMLInputElement).value)
  }

  return (
    <>
      <NextSeo />
      <div className='flex flex-col bg-brand-bg-light'>
        <SiteHeader />
        <PageContent>
          <div className='mx-auto w-full max-w-screen-xl'>
            <div className='space-y-8'>
              <WelcomeMessageSection />
              <SearchBox searchQuery={searchString} onSearchQuery={searchQueryEventHandler} />
              <CategoryButtonSection
                selectedCategories={selectedCategories}
                onCategoryButtonClick={(cat: CategoryInterface[]) =>
                  categoryButtonEventHandler(cat)
                }
              />
              {selectedCategories.map((item, index) => {
                // TODO: Find better alternative how to show websites
                //       with multiple categories
                const categoryHeader =
                  index === 0 ? (
                    <>
                      <h2 className='text-2xl font-semibold'>{selectedCategories[0].name}</h2>
                      <div>deskripsi</div>
                    </>
                  ) : (
                    ''
                  )
                return (
                  <section key={item.id}>
                    {categoryHeader}
                    <ul className='mt-4 grid max-w-screen-xl grid-flow-row grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                      {websites
                        .filter(
                          (w) =>
                            filterCategoryAll(w, selectedCategories) &&
                            dedupedWebsites.filter((dd) => dd === w.website).length === 0 &&
                            (searchString.length > 0
                              ? (w.icon.title ?? '')
                                  .toLowerCase()
                                  .indexOf(searchString.toLowerCase()) >= 0
                              : true)
                        )
                        .map((website) => {
                          dedupedWebsites.push(website.website)
                          return (
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
                          )
                        })}
                    </ul>
                  </section>
                )
              })}
            </div>

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
        </PageContent>
      </div>
    </>
  )
}

export default IndexPage
