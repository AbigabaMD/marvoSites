import React from 'react'

const Stats = () => {
  const stats = [
    { value: '10', suffix: 'K+', label: 'Customer Satisfaction' },
    { value: '200', suffix: '%+', label: 'Revenue Increase' },
    { value: '20', suffix: 'x', label: 'Business Growth' }
  ]

  return (
    <section className="stats__v3 section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="d-flex flex-wrap content rounded-4" data-aos="fade-up" data-aos-delay="0">
              <div className="rounded-borders">
                <div className="rounded-border-1"></div>
                <div className="rounded-border-2"></div>
                <div className="rounded-border-3"></div>
              </div>
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0 text-center" 
                  data-aos="fade-up" 
                  data-aos-delay={100 + index * 100}
                >
                  <div className="stat-item">
                    <h3 className="fs-1 fw-bold">
                      <span className="purecounter" data-purecounter-start="0" data-purecounter-end={stat.value} data-purecounter-duration="2">0</span>
                      <span>{stat.suffix}</span>
                    </h3>
                    <p className="mb-0">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats