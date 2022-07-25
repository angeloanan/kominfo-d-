import Fuse from 'fuse.js'
import Link from 'next/link'
import * as React from 'react'

import { useDebounce } from '../hooks/useDebounce'
import type { PSEData } from '../types/PSEData'

export interface ManualSearchSectionProps {
  data?: PSEData[]
}

export const ManualSearchSection = ({ data }: ManualSearchSectionProps) => {
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
          (fuseInstance.current as Fuse<unknown>).search(debouncedQuery, { limit: 5 }).map((v) => {
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
    </>
  )
}
