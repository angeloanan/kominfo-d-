import clsx from 'clsx'
import * as React from 'react'

export interface ContainerProps extends React.ComponentPropsWithoutRef<'div'> {
  prose?: boolean
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, children, prose, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx('mx-auto w-full', prose ? 'max-w-prose' : 'max-w-screen-xl', className)}
        {...rest}
      >
        {children}
      </div>
    )
  }
)

Container.displayName = 'Container'
