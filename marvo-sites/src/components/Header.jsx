import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fbs__net-navbar navbar navbar-expand-lg dark ${isScrolled ? 'active' : ''}`} aria-label="freebootstrap.net navbar">
      <div className="container d-flex align-items-center justify-content-between">
        {/* Start Logo */}
        <Link className="navbar-brand w-auto" to="/">
          <img className="logo dark img-fluid" src="/Nova-Bootstrap-1.0.0/assets/images/logo-dark.svg" alt="Nova Logo" />
          <img className="logo light img-fluid" src="/Nova-Bootstrap-1.0.0/assets/images/logo-light.svg" alt="Nova Logo" />
        </Link>
        {/* End Logo */}

        {/* Start offcanvas */}
        <div className="offcanvas offcanvas-start w-75" id="fbs__net-navbars" tabIndex="-1" aria-labelledby="fbs__net-navbarsLabel">
          <div className="offcanvas-header">
            <div className="offcanvas-header-logo">
              <Link className="logo-link" id="fbs__net-navbarsLabel" to="/">
                <img className="logo dark img-fluid" src="/Nova-Bootstrap-1.0.0/assets/images/logo-dark.svg" alt="Nova Logo" />
                <img className="logo light img-fluid" src="/Nova-Bootstrap-1.0.0/assets/images/logo-light.svg" alt="Nova Logo" />
              </Link>
            </div>
            <button className="btn-close btn-close-black" type="button" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body align-items-lg-center">
            <ul className="navbar-nav nav me-auto ps-lg-5 mb-2 mb-lg-0">
              <li className="nav-item"><a className="nav-link scroll-link active" aria-current="page" href="#home">Home</a></li>
              <li className="nav-item"><a className="nav-link scroll-link" href="#about">About</a></li>
              <li className="nav-item"><a className="nav-link scroll-link" href="#pricing">Pricing</a></li>
              <li className="nav-item"><a className="nav-link scroll-link" href="#how-it-works">How It Works</a></li>
              <li className="nav-item"><a className="nav-link scroll-link" href="#services">Services</a></li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown <i className="bi bi-chevron-down"></i>
                </a>
                <ul className="dropdown-menu">
                  <li><a className="nav-link scroll-link dropdown-item" href="#">Multipages</a></li>
                  <li><a className="nav-link scroll-link dropdown-item" href="#services">Services</a></li>
                  <li><a className="nav-link scroll-link dropdown-item" href="#pricing">Pricing</a></li>
                </ul>
              </li>
              <li className="nav-item"><a className="nav-link scroll-link" href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
        {/* End offcanvas */}

        <div className="ms-auto w-auto">
          <div className="header-social d-flex align-items-center gap-1">
            <a className="btn btn-primary py-2" href="#">Get Started</a>
            <button 
              className="fbs__net-navbar-toggler justify-content-center align-items-center ms-auto" 
              data-bs-toggle="offcanvas" 
              data-bs-target="#fbs__net-navbars" 
              aria-controls="fbs__net-navbars" 
              aria-label="Toggle navigation" 
              aria-expanded="false"
            >
              <svg className="fbs__net-icon-menu" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="21" x2="3" y1="6" y2="6"></line>
                <line x1="15" x2="3" y1="12" y2="12"></line>
                <line x1="17" x2="3" y1="18" y2="18"></line>
              </svg>
              <svg className="fbs__net-icon-close" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header