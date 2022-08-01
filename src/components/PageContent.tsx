import clsx from 'clsx'
import React from 'react'

export function PageContent({
  className,
  children,
  ...rest
}: React.ComponentPropsWithoutRef<'section'>) {
  return (
    <section className={clsx('px-4 py-8', className)} {...rest}>
      {children}
    </section>
  )
}
