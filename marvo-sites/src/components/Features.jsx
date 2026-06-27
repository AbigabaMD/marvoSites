import React from 'react'

const Features = () => {
  const featureItems = [
    { icon: 'bi-person-check', title: 'User-Friendly Interface', description: 'Easy navigation with responsive design for various devices.' },
    { icon: 'bi-graph-up', title: 'Financial Analytics', description: 'Budget tracking, expense categorization, and personalized insights.' },
    { icon: 'bi-headset', title: 'Customer Support', description: '24/7 service via chat, email, phone, and a detailed help center.' },
    { icon: 'bi-shield-lock', title: 'Security Features', description: 'Data encryption, fraud detection, and prevention mechanisms.' }
  ]

  return (
    <section className="section features__v2" id="features">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="d-lg-flex p-5 rounded-4 content" data-aos="fade-in" data-aos-delay="0">
              <div className="row">
                <div className="col-lg-5 mb-5 mb-lg-0" data-aos="fade-up" data-aos-delay="0">
                  <div className="row">
                    <div className="col-lg-11">
                      <div className="h-100 flex-column justify-content-between d-flex">
                        <div>
                          <h2 className="mb-4">Why Choose us</h2>
                          <p className="mb-5">
                            Experience the future of finance with our secure, efficient, and user-friendly financial services. Our cutting-edge platform ensures your transactions are safe, streamlined, and easy to manage, empowering you to take control of your financial journey with confidence and convenience.
                          </p>
                        </div>
                        <div className="align-self-start">
                          <a className="glightbox btn btn-play d-inline-flex align-items-center gap-2" href="https://www.youtube.com/watch?v=DQx96G4yHd8" data-gallery="video">
                            <i className="bi bi-play-fill"></i> Watch the Video
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="row justify-content-end">
                    <div className="col-lg-11">
                      <div className="row">
                        {featureItems.map((item, index) => (
                          <div key={index} className="col-sm-6" data-aos="fade-up" data-aos-delay={index * 100}>
                            <div className="icon text-center mb-4">
                              <i className={`${item.icon} fs-4`}></i>
                            </div>
                            <h3 className="fs-6 fw-bold mb-3">{item.title}</h3>
                            <p>{item.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features