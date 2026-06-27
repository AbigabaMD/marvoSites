import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

// Load required scripts for the template
const loadScripts = () => {
  const scripts = [
    '/Nova-Bootstrap-1.0.0/assets/vendors/bootstrap/bootstrap.bundle.min.js',
    '/Nova-Bootstrap-1.0.0/assets/vendors/aos/aos.js',
    '/Nova-Bootstrap-1.0.0/assets/js/custom.js'
  ]

  scripts.forEach(src => {
    const script = document.createElement('script')
    script.src = src
    script.async = true
    document.body.appendChild(script)
  })
}

// Load scripts after DOM is ready
document.addEventListener('DOMContentLoaded', loadScripts)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)