import Fuse from 'fuse.js'
import Link from 'next/link.js'
import { NextSeo } from 'next-seo'
import * as React from 'react'
import useSWR from 'swr'

import { devStarterPack, idnStarterPack, websiteListUSA } from '../_data/websites'
import { WebsiteEntry } from '../components/WebsiteEntry'
import { useDebounce } from '../hooks/useDebounce'

type ApiReturnType = {
  attributes: {
    nama: string | null
    nama_perusahaan: string | null
    website: string | null
  }
}[]

const fetcher = (url: string) => fetch(url).then((r) => r.json())

const IndexPage = () => {
  const { data, error, isValidating } = useSWR('/api/fetchEntries', fetcher, {
    refreshInterval: 60_000,
    revalidateOnFocus: false
  })

  const fuseInstance = React.useRef<any>(null)
  const [searchQuery, setSearchQuery] = React.useState('')
  const debouncedQuery = useDebounce(searchQuery, 500)

  React.useEffect(() => {
    if (data == null) return

    fuseInstance.current = new Fuse(data, {
      keys: ['attributes.website'],
      isCaseSensitive: true,
      threshold: 0.8
    })
  }, [data])

  return (
    <>
      <NextSeo />

      <div className='flex w-full justify-center'>
        <div className='w-full max-w-screen-xl p-8'>
          <header className='flex w-full flex-col items-center'>
            <h1 className='text-5xl font-bold italic'>Kominfo&apos;d?</h1>
            <span>Website ini bakal keblokir ga ya?</span>
          </header>

          <section className='mt-16'>
            <h2 className='text-2xl font-semibold'>Confused on what this is?</h2>
            <p className='max-w-prose'>
              The Indonesian government is forcing &apos;online service providers&apos; to register
              their apps and services in their database. Failing to do so will cause them to be
              blocked.
            </p>
            <p className='mt-4'>
              Read more about it here:{' '}
              <Link href={'https://kominfu.com'} passHref>
                <a className='text-blue-700 underline'>kominfu.com</a>
              </Link>
            </p>
          </section>

          <section className='mt-8'>
            <h2 className='text-2xl font-semibold'>Bagaimana cara kerja situs ini?</h2>
            <p className='mt-2 max-w-prose'>
              Website ini mengambil data dari situs{' '}
              <Link href='https://pse.kominfo.go.id' passHref>
                <a className='text-blue-800 underline'>PSE Kominfo</a>
              </Link>{' '}
              dan mencocokan url services dengan link yang ada di database. Data situs ini akan
              secara otomatis diperbaharui setiap 1 menit. Tetapi karena situs kominfo sangat tidak
              stabil, mungkin data yang disajikan bukanlah data yang paling terbarui.
            </p>
            <p className='mt-4 max-w-prose'>
              Pemilik situs ini akan mencoba untuk menyajikan data yang terbaru dan terakurat. Jika
              ada masalah, dimohon untuk mengontak saya melalui link di footer!
            </p>
            <p className='mt-4'>
              Ingin berkontribusi?{' '}
              <Link href='https://github.com/angeloanan/kominfo-d-' passHref>
                <a className='text-blue-800 underline'>Kunjungi repositori kodenya di Github!</a>
              </Link>
            </p>
          </section>

          <section className='mt-8'>
            <h2 className='text-2xl font-semibold'>Indonesia Starterpack</h2>
            <p>Situs atau service ini terpopuler dengan orang Indonesia</p>
            <div className='mt-4 grid grid-flow-row grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
              {idnStarterPack.map((website) => (
                <WebsiteEntry
                  website={website.icon}
                  key={website.icon.title}
                  loading={data == null || isValidating}
                  pass={
                    // TODO: Properly type this
                    data?.filter((e: { attributes: { website: string } }) =>
                      e.attributes.website.toLowerCase().startsWith(website.website)
                    ).length > 0
                  }
                  url={
                    website.website.includes('http')
                      ? website.website
                      : `https://${website.website}`
                  }
                />
              ))}
            </div>
          </section>

          <section className='mt-8'>
            <h2 className='text-2xl font-semibold'>Essential developer toolkit</h2>
            <p>Service yang ✨ anak bangsa ✨ mungkin akan pakai saat membuat app</p>

            <div className='mt-4 grid grid-flow-row grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
              {devStarterPack.map((website) => (
                <WebsiteEntry
                  website={website.icon}
                  key={website.icon.title}
                  loading={data == null || isValidating}
                  pass={
                    // TODO: Properly type this
                    data?.filter((e: { attributes: { website: string } }) =>
                      e.attributes.website.toLowerCase().startsWith(website.website)
                    ).length > 0
                  }
                  url={
                    website.website.includes('http')
                      ? website.website
                      : `https://${website.website}`
                  }
                />
              ))}
            </div>
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
            <div className='mt-4 grid grid-flow-row grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
              {websiteListUSA.map((website) => (
                <WebsiteEntry
                  website={website.icon}
                  key={website.icon.title}
                  loading={data == null || isValidating}
                  pass={
                    // TODO: Properly type this
                    data?.filter((e: { attributes: { website: string } }) =>
                      e.attributes.website.toLowerCase().startsWith(website.website)
                    ).length > 0
                  }
                  url={
                    website.website.includes('http')
                      ? website.website
                      : `https://${website.website}`
                  }
                />
              ))}
            </div>
          </section>

          <section className='mt-8 mb-4'>
            <h2 className='text-2xl font-semibold'>Cari manual</h2>
            Jika situs tidak tertampil diatas, anda bisa mencari situs tersebut di sini:{' '}
            <input
              className='rounded border border-black p-2'
              type='search'
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </section>

          <section className='pb-8'>
            {data &&
              fuseInstance.current != null &&
              (fuseInstance.current as Fuse<unknown>)
                .search(debouncedQuery, { limit: 5 })
                .map((v) => {
                  const item = v.item as { attributes: { nama: string; website: string } }

                  return (
                    <div key={v.refIndex} className='italic'>
                      <Link href={`https://${item.attributes.website}`} passHref>
                        <a className='text-blue-800 underline'>
                          <span className='font-bold'>{item.attributes.nama}</span> -{' '}
                          {item.attributes.website}
                        </a>
                      </Link>
                    </div>
                  )
                })}
          </section>

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
