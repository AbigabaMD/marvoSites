import React, { useEffect, useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Features from './components/Features.jsx'
import Pricing from './components/Pricing.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import Stats from './components/Stats.jsx'
import Services from './components/Services.jsx'
import Testimonials from './components/Testimonials.jsx'
import FAQ from './components/FAQ.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../assets/css/style.css'
import './index.css'

function App() {
  useEffect(() => {
    const bootstrapJS = document.createElement('script')
    bootstrapJS.src = '/assets/vendors/bootstrap/bootstrap.bundle.min.js'
    document.body.appendChild(bootstrapJS)
    return () => {
      const script = document.querySelector('script[src="/assets/vendors/bootstrap/bootstrap.bundle.min.js"]')
      if (script) document.body.removeChild(script)
    }
  }, [])

  // Apply theme from localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') || 'light'
    document.documentElement.setAttribute('data-bs-theme', storedTheme)
  }, [])

  // Back to top button state
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 170) {
        setShowBackToTop(true)
      } else {
        setShowBackToTop(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className="site-wrap">
      <Header />
      <main>
        <Hero />
        <About />
        <Features />
        <Pricing />
        <HowItWorks />
        <Stats />
        <Services />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      
      {/* Back to Top */}
      <button 
        id="back-to-top" 
        className={showBackToTop ? 'show' : ''}
        onClick={scrollToTop}
      >
        <i className="bi bi-arrow-up-short"></i>
      </button>
    </div>
  )
}

export default App