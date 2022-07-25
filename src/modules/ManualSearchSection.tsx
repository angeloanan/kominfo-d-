import type Fuse from 'fuse.js'
import Link from 'next/link'
import * as React from 'react'

import { useDebounce } from '../hooks/useDebounce'
import type { PSEData } from '../types/PSEData'

export interface ManualSearchSectionProps {
  data?: PSEData[]
}

export const ManualSearchSection = ({ data }: ManualSearchSectionProps) => {
  // TODO: This shit's ugly - Research a better way
  const Fuse = React.useRef<any>(null)
  const fuseInstance = React.useRef<any>(null)

  const [searchQuery, setSearchQuery] = React.useState('')
  const debouncedQuery = useDebounce(searchQuery, 500)

  // Re-index on data update
  React.useEffect(() => {
    if (data == null) return
    if (fuseInstance.current == null) return

    fuseInstance.current = new Fuse.current(data, {
      keys: ['attributes.website'],
      isCaseSensitive: true,
      threshold: 0.8
    })
  }, [data])

  return (
    <>
      <section className='mt-8 mb-4'>
        <h2 className='text-2xl font-semibold'>Cari manual</h2>
        Jika situs tidak tertampil diatas, anda bisa mencari situs tersebut di sini:{' '}
        <input
          className='rounded border border-black p-2'
          type='search'
          onChange={async (e) => {
            // Fetch fuse on first input
            if (fuseInstance.current == null) {
              Fuse.current = (await import('fuse.js')).default

              fuseInstance.current = new Fuse.current(data!, {
                keys: ['attributes.website'],
                isCaseSensitive: true,
                threshold: 0.8
              })
            }

            setSearchQuery(e.target.value)
          }}
        />
      </section>
      <section className='pb-8'>
        {data &&
          fuseInstance != null &&
          (fuseInstance.current as Fuse<PSEData>)?.search(debouncedQuery, { limit: 5 }).map((v) => {
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
      </section>
    </>
  )
}
