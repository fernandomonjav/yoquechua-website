import { useEffect, useState } from 'react'

export const useScroll = () => {
  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY <= 0) {
        setScroll(false)
      } else {
        setScroll(true)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return scroll
}
