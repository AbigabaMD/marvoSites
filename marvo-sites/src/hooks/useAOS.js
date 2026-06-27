import { useEffect } from 'react'

const useAOS = () => {
  useEffect(() => {
    // Load AOS CSS
    const aosCSS = document.createElement('link')
    aosCSS.rel = 'stylesheet'
    aosCSS.href = '/Nova-Bootstrap-1.0.0/assets/vendors/aos/aos.css'
    document.head.appendChild(aosCSS)

    // Load AOS JS
    const aosJS = document.createElement('script')
    aosJS.src = '/Nova-Bootstrap-1.0.0/assets/vendors/aos/aos.js'
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
      document.head.removeChild(aosCSS)
      document.body.removeChild(aosJS)
    }
  }, [])
}

export default useAOS