import Link from 'next/link'
import * as React from 'react'

import { HelpCircleIcon } from './HelpCircleIcon'
import { KominfodLogo } from './KominfodLogo'

export function SiteHeader() {
  return (
    <header className='flex h-[60px] w-full items-center bg-brand-bg px-4'>
      <div className='mx-auto flex w-full max-w-screen-xl items-center justify-between'>
        <Link href='/'>
          <a>
            <span className='sr-only'>Kominfo&apos;d</span>
            <KominfodLogo height={22} aria-hidden />
          </a>
        </Link>
        <Link href='/about'>
          <a>
            <span className='sr-only'>About</span>
            <HelpCircleIcon className='h-6 w-6 text-brand-text-grey' aria-hidden />
          </a>
        </Link>
      </div>
    </header>
  )
}
