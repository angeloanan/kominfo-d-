import { Check, X } from 'react-feather'
import { SimpleIcon } from 'simple-icons'

interface WebsiteEntryProps {
  website: Partial<SimpleIcon>
  pass?: boolean
  loading?: boolean
  url: string
}

const LoadingSpinnerIcon = () => (
  <svg
    className='mr-2 h-5 w-5 animate-spin text-neutral-800'
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    aria-hidden
  >
    <circle
      className='opacity-25'
      cx='12'
      cy='12'
      r='10'
      stroke='currentColor'
      strokeWidth='4'
    ></circle>
    <path
      className='opacity-75'
      fill='currentColor'
      d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
    ></path>
  </svg>
)

export const WebsiteEntry = ({ website, pass = false, loading = false }: WebsiteEntryProps) => {
  const size = 32

  // TODO: Refactor
  if (loading) {
    return (
      <li className='flex items-center gap-2 rounded bg-neutral-100 p-4 outline outline-2 outline-neutral-300'>
        <svg
          height={size}
          width={size}
          fill='currentColor'
          style={{ color: website.hex }}
          aria-hidden
        >
          <title>{website.title}</title>
          <path d={website.path} />
        </svg>

        <div>
          <h3 className='font-semibold text-neutral-800'>{website.title}</h3>
          <p className='flex gap-1'>
            <LoadingSpinnerIcon />
            Loading...
          </p>
        </div>
      </li>
    )
  }

  return (
    <li
      className={`flex items-center gap-2 rounded  p-4 outline outline-2 ${
        pass
          ? 'bg-green-100 text-green-800 outline-green-400'
          : 'bg-red-200 text-red-800 outline-red-500'
      }`}
    >
      <svg
        height={size}
        width={size}
        fill='currentColor'
        style={{ color: website.hex }}
        aria-hidden
      >
        <title>{website.title}</title>
        <path d={website.path} />
      </svg>

      <div>
        <h3 className={pass ? 'font-semibold' : 'text-lg font-bold'}>{website.title}</h3>
        <p className={`flex gap-1 ${!pass && 'font-medium uppercase italic text-red-700'}`}>
          {pass ? (
            <>
              <Check aria-hidden /> Registered
            </>
          ) : (
            <>
              <X aria-hidden /> Blocked
            </>
          )}
        </p>
      </div>
    </li>
  )
}
