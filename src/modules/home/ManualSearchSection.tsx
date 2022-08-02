import { SearchIcon } from '@heroicons/react/solid'
import type Fuse from 'fuse.js'
import Link from 'next/link'
import * as React from 'react'

import { useDebounce } from '../../hooks/useDebounce'
import type { PSEData } from '../../types/PSEData'

export const ManualSearchSection = () => {
  // TODO: This shit's ugly - Research a better way
  const FullPSEData = React.useRef<any>(null)
  const Fuse = React.useRef<any>(null)
  const fuseInstance = React.useRef<any>(null)

  const [searchQuery, setSearchQuery] = React.useState('')
  const debouncedQuery = useDebounce(searchQuery, 500)

  // Re-index on data update
  React.useEffect(() => {
    if (FullPSEData.current == null) return
    if (fuseInstance.current == null) return

    fuseInstance.current = new Fuse.current(FullPSEData.current, {
      keys: ['attributes.website'],
      isCaseSensitive: true,
      threshold: 0.8
    })
  }, [])

  return (
    <>
      <section className='mt-8 w-full rounded bg-brand-bg shadow'>
        <div className='relative flex flex-col justify-between lg:flex-row'>
          <div className='w-fit p-4'>
            <h2 className='text-2xl font-semibold'>Cari manual</h2>
            <p className='mt-1 text-gray-500'>
              Jika situs tidak tertampil diatas, anda bisa mencari situs tersebut di sini
            </p>
          </div>
          <div className='relative w-full lg:w-1/2'>
            <SearchIcon className='absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 transform text-gray-400 md:h-8 md:w-8' />
            <input
              className='h-full w-full border-l-0 border-gray-400 bg-gray-50 py-4 px-12 text-lg font-semibold text-gray-600 outline-none md:border-l md:px-16'
              type='search'
              placeholder='Cari Website'
              onChange={async (e: { target: { value: any } }) => {
                // Fetch fuse on first input
                if (FullPSEData.current == null) {
                  FullPSEData.current = await fetch('/data.json').then((res) => res.json())
                  if (fuseInstance.current == null) {
                    Fuse.current = (await import('fuse.js')).default

                    fuseInstance.current = new Fuse.current(FullPSEData.current!, {
                      keys: ['attributes.website'],
                      isCaseSensitive: true,
                      threshold: 0.8
                    })
                  }
                }

                setSearchQuery(e.target.value)
              }}
            />
          </div>
        </div>
      </section>
      <ul className='mt-1'>
        {FullPSEData.current != null &&
          fuseInstance != null &&
          (fuseInstance.current as Fuse<PSEData>)?.search(debouncedQuery, { limit: 5 }).map((v) => {
            const item = v.item

            return (
              <li
                key={v.refIndex}
                className='group border-y border-gray-50 bg-white p-4 shadow first:rounded-t last:rounded-b hover:bg-slate-50'
              >
                <Link href={`https://${item.attributes.website}`} passHref>
                  <a className='items-left flex flex-col justify-between md:flex-row md:items-center'>
                    <div className='flex flex-col flex-nowrap font-bold text-gray-700'>
                      {item.attributes.nama}
                      <span className='font-normal text-blue-500 group-hover:underline'>
                        {item.attributes.website.length > 50
                          ? `${item.attributes.website.substring(0, 50)} ...`
                          : item.attributes.website}
                      </span>
                    </div>
                    <span className='mt-4 text-sm md:mt-0'>
                      Registered by{' '}
                      <span className='underline'>{item.attributes.nama_perusahaan}</span>
                    </span>
                  </a>
                </Link>
              </li>
            )
          })}
      </ul>
    </>
  )
}
