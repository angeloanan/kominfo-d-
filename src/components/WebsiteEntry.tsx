import { AlertCircle, Check, HelpCircle, X } from 'react-feather'
import { SimpleIcon } from 'simple-icons'

interface WebsiteEntryProps {
  /**
   * Website data
   */
  website: Partial<SimpleIcon>

  /**
   * Registered in Goverment's list
   */
  registered?: boolean

  /**
   * Blocked in Indihome's Network - Checked via https://indi.wtf
   */
  blocked?: boolean
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

export const WebsiteEntry = ({
  website,
  registered = false,
  blocked = false
}: WebsiteEntryProps) => {
  const size = 32

  return (
    <li
      className={`flex items-center gap-2 rounded  p-4 outline outline-2 ${
        registered
          ? !blocked
            ? // Registered and not blocked
              'bg-green-100 text-green-800 outline-green-400'
            : // Registered but blocked
              'bg-fuchsia-100 text-fuchsia-800 outline-fuchsia-400'
          : !blocked
          ? // Unregistered but not yet blocked
            'bg-yellow-100 text-yellow-700 outline-yellow-400'
          : // Unregistered and blocked
            'bg-red-200 text-red-800 outline-red-500'
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
        <h3 className={registered ? 'font-semibold' : 'text-lg font-bold'}>{website.title}</h3>
        <p className={`flex gap-1 ${blocked && 'font-medium uppercase italic text-red-700'}`}>
          {registered ? (
            !blocked ? (
              <>
                <Check aria-hidden /> Registered
              </>
            ) : (
              <>
                <HelpCircle aria-hidden />
                Registered but inaccessible
              </>
            )
          ) : !blocked ? (
            <>
              <AlertCircle aria-hidden /> Unregistered
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
