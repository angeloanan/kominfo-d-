import { SearchIcon } from '@heroicons/react/solid'
import type Fuse from 'fuse.js'
import Link from 'next/link'
import * as React from 'react'

import { Container } from '../../components/Container'
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

  const handleSearch: React.ChangeEventHandler<HTMLInputElement> = async (e) => {
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
  }

  return (
    <section className='bg-white px-4 pb-2 pt-0'>
      <Container className='space-y-4'>
        <div>
          <label htmlFor='manual-search' className='sr-only'>
            Cari manual
          </label>
          <div className='relative mt-1 rounded-md'>
            <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
              <SearchIcon className='h-5 w-5 text-gray-400' aria-hidden='true' />
            </div>
            <input
              type='search'
              name='manual-search'
              id='manual-search'
              autoComplete='off'
              onChange={handleSearch}
              className='block w-full rounded-md border-transparent bg-brand-bg-light pl-10 text-sm focus:border-brand-blue focus:ring-brand-blue'
              placeholder='Cari website atau service'
            />
          </div>
        </div>
        <div>
          {FullPSEData.current != null &&
            fuseInstance != null &&
            (fuseInstance.current as Fuse<PSEData>)
              ?.search(debouncedQuery, { limit: 5 })
              .map((v) => {
                const item = v.item

                return (
                  <div key={v.refIndex} className='italic'>
                    <Link href={`https://${item.attributes.website}`} passHref>
                      <a className='text-blue-800 underline'>
                        <span className='font-bold'>{item.attributes.nama}</span> (
                        {item.attributes.website}) | Registered by {item.attributes.nama_perusahaan}
                      </a>
                    </Link>
                  </div>
                )
              })}
        </div>
      </Container>
    </section>
  )
}
