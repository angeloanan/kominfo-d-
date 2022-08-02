import Link from 'next/link.js'

export const WhatIsThisSection = () => {
  return (
    <section>
      <h2 className='text-2xl font-semibold'>Confused on what this is?</h2>
      <p className='mt-2'>
        The Indonesian government is forcing &apos;online service providers&apos; to register their
        apps and services in their database. Failing to do so will cause them to be blocked.
      </p>
      <p className='mt-4'>
        Read more about it here:{' '}
        <Link href={'https://kominfu.com'} passHref>
          <a className='text-blue-700 underline'>kominfu.com</a>
        </Link>
      </p>
    </section>
  )
}
