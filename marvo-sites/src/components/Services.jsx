import React from 'react'

const Services = () => {
  const services = [
    {
      icon: 'bi-credit-card',
      title: 'Digital Payments',
      description: 'Seamless and secure transactions through various digital platforms, enabling quick and convenient payments for businesses and consumers alike.'
    },
    {
      icon: 'bi-wallet',
      title: 'Personal Finance Management',
      description: 'Seamless and secure transactions through various digital platforms, enabling quick and convenient payments for businesses and consumers alike.'
    },
    {
      icon: 'bi-bank',
      title: 'Online Lending',
      description: 'Fast and accessible lending services that provide personal and business loans through online platforms, simplifying the borrowing process.'
    },
    {
      icon: 'bi-graph-up-arrow',
      title: 'Investment Platforms',
      description: 'User-friendly platforms that allow individuals to invest in stocks, bonds, and other assets with minimal barriers, making investment accessible to all.'
    },
    {
      icon: 'bi-currency-bitcoin',
      title: 'Cryptocurrency Trading',
      description: 'Services that facilitate the buying, selling, and trading of cryptocurrencies, offering users a gateway to the digital currency market.'
    },
    {
      icon: 'bi-shield-check',
      title: 'Insurtech Solutions',
      description: 'Innovative insurance services that leverage technology to offer personalized policies, faster claims processing, and enhanced customer experiences.'
    }
  ]

  return (
    <section className="section services__v3" id="services">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-8 mx-auto text-center">
            <span className="subtitle text-uppercase mb-3">Our Services</span>
            <h2 className="mb-3">
              Empowering Financial Innovation Through Cutting-Edge Services
            </h2>
          </div>
        </div>
        <div className="row g-4">
          {services.map((service, index) => (
              <div 
              key={index} 
              className="col-md-6 col-lg-4" 
            >
              <div className="service-card p-4 rounded-4 h-100 d-flex flex-column justify-content-between gap-5">
                <div>
                  <span className="icon mb-4">
                    <i className={`${service.icon} fs-4`}></i>
                  </span>
                  <h3 className="fs-5 mb-3">{service.title}</h3>
                  <p className="mb-4">{service.description}</p>
                </div>
                <a className="special-link d-inline-flex gap-2 align-items-center text-decoration-none" href="#">
                  <span className="icons">
                    <i className="icon-1 bi bi-arrow-right-short"></i>
                    <i className="icon-2 bi bi-arrow-right-short"></i>
                  </span>
                  <span>Read more</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services