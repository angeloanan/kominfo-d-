import { InformationCircleIcon, XIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import { useRouter } from 'next/router'
import * as React from 'react'

const LOCAL_STORAGE_KEY = 'kominfod-welcome'
const canUseDOM = typeof window !== 'undefined'
const getLocalStorage = (key: string) => canUseDOM && localStorage.getItem(key)
const setLocalStorage = (key: string, value: string) => {
  return canUseDOM && localStorage.setItem(key, value)
}

export function WelcomeMessageSection() {
  const router = useRouter()
  const existingStorage = getLocalStorage(LOCAL_STORAGE_KEY)
  const [isOpen, setIsOpen] = React.useState<boolean>(false)
  const [hasStorage, setHasStorage] = React.useState<boolean>(
    Boolean(existingStorage && existingStorage === '1')
  )

  const setCloseStateToStorage = () => {
    setLocalStorage(LOCAL_STORAGE_KEY, '1')
    setHasStorage(true)
  }

  const handleCloseMessage = React.useCallback(() => {
    setIsOpen(false)
    setCloseStateToStorage()
  }, [])

  React.useEffect(() => {
    // Only open the dialog when intersecting
    // and have not been triggered before
    // and doesn't have a local storage "wbw-wm"
    if (!hasStorage) {
      setIsOpen(true)
    }
  }, [hasStorage])

  React.useEffect(() => {
    // Also close dialog when route changes
    router.events.on('beforeHistoryChange', handleCloseMessage)

    return () => {
      router.events.off('beforeHistoryChange', handleCloseMessage)
    }
  }, [router.events, handleCloseMessage])

  if (isOpen) {
    return (
      <div className='rounded-md bg-brand-light-blue p-4'>
        <div className='flex'>
          <div className='flex-shrink-0'>
            <InformationCircleIcon className='h-5 w-5 text-brand-blue' aria-hidden='true' />
          </div>
          <div className='ml-3'>
            <p className='text-sm text-brand-blue'>
              Welcome to Kominfo&apos;d! Confused about what this is?{' '}
              <Link href='/about'>
                <a className='font-medium text-brand-blue underline'>Click here.</a>
              </Link>
            </p>
          </div>
          <div className='ml-auto pl-3'>
            <div className='-mx-1.5 -my-1.5'>
              <button
                type='button'
                className='inline-flex rounded-md p-1.5 text-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue'
                onClick={handleCloseMessage}
              >
                <span className='sr-only'>Dismiss</span>
                <XIcon className='h-5 w-5' aria-hidden='true' />
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return null
}
