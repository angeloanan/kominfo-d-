import * as React from 'react'

export interface HelpCircleIconProps extends React.SVGProps<SVGSVGElement> {
  size: number
}

export function HelpCircleIcon({ width, height, ...rest }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...rest}
    >
      <g stroke='currentColor' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round'>
        <path d='M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z' />
        <path d='M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01' />
      </g>
    </svg>
  )
}
