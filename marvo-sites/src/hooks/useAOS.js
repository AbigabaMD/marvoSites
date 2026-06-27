import { useEffect } from 'react'

const useAOS = () => {
  useEffect(() => {
    const aosJS = document.createElement('script')
    aosJS.src = '/assets/vendors/aos/aos.js'
    aosJS.onload = () => {
      if (window.AOS) {
        window.AOS.init({
          duration: 800,
          easing: 'slide',
          once: true
        })
      }
    }
    document.body.appendChild(aosJS)

    return () => {
      const script = document.querySelector('script[src="/assets/vendors/aos/aos.js"]')
      if (script) {
        document.body.removeChild(script)
      }
    }
  }, [])
}

export default useAOS