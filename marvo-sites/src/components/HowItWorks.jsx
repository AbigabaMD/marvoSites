import React from 'react'

const HowItWorks = () => {
  const steps = [
    { number: '1', title: 'Sign Up', description: 'Visit our website or download our app to sign up. Provide basic information to set up your secure account.' },
    { number: '2', title: 'Set Up Your Profile', description: 'Add your personal or business details to tailor the platform to your specific needs.' },
    { number: '3', title: 'Explore Features', description: 'Access your dashboard for a summary of your finances: balances, recent transactions, and insights.' },
    { number: '4', title: 'Invest and Grow', description: 'Discover a variety of investment opportunities tailored to your financial goals.' }
  ]

  return (
    <section className="section howitworks__v1" id="how-it-works">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-6 text-center mx-auto">
            <span className="subtitle text-uppercase mb-3">How it works</span>
            <h2>How It Works</h2>
            <p>
              Our platform is designed to make managing your finances simple and efficient. Follow these easy steps to get started:
            </p>
          </div>
        </div>
        <div className="row g-md-5">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`col-md-6 col-lg-3 ${index === 1 ? 'reverse' : ''} ${index === 3 ? 'last' : ''}`}
            >
              <div className={`step-card text-center h-100 d-flex flex-column justify-content-start position-relative ${index === 1 ? 'reverse' : ''} ${index === 3 ? 'last' : ''}`}>
                {index !== 3 && (
                  <div>
                    <img 
                      className={`arch-line ${index === 1 ? 'reverse' : ''}`} 
                      src={`/assets/images/${index === 1 ? 'arch-line-reverse' : 'arch-line'}.svg`} 
                      alt="Step line" 
                    />
                  </div>
                )}
                <span className="step-number rounded-circle text-center fw-bold mb-5 mx-auto">{step.number}</span>
                <div>
                  <h3 className="fs-5 mb-4">{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
