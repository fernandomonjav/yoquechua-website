import { useEffect, useState } from 'react'
import { usePrevious } from './usePrevious'

export type MediaQuery = 'sm' | 'md' | 'lg' | 'xl' | '2xl'

export const useMediaQuery = () => {
  const [mediaQuery, setMediaQuery] = useState<MediaQuery>('sm')
  const mediaQueryPrevious = usePrevious(mediaQuery)
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(true)

  useEffect(() => {
    const handleResize = () => {
      setTimeout(() => {
        if (window.innerWidth < 640) {
          setMediaQuery('sm')
        } else if (window.innerWidth < 768) {
          setMediaQuery('md')
        } else if (window.innerWidth < 1024) {
          setMediaQuery('lg')
        } else if (window.innerWidth < 1280) {
          setMediaQuery('xl')
        } else {
          setMediaQuery('2xl')
        }
      }, 100)
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (['md', 'lg', 'xl', '2xl'].includes(mediaQuery!) && ['sm'].includes(mediaQueryPrevious!)) {
      setIsSmallScreen(true)
    } else if (
      ['sm'].includes(mediaQuery!) &&
      ['md', 'lg', 'xl', '2xl'].includes(mediaQueryPrevious!)
    ) {
      setIsSmallScreen(false)
    }
  }, [mediaQuery])

  return { mediaQuery, mediaQueryPrevious, isSmallScreen }
}
