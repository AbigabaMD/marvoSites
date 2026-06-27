import React from 'react'

const FAQ = () => {
  const faqs = [
    {
      question: "What services does your web agency offer?",
      answer: "Our web agency offers a comprehensive range of services including web design and development, e-commerce solutions, SEO optimization, content creation, website maintenance, and digital marketing strategies. We tailor our services to meet the unique needs of each client, ensuring a customized approach to every project."
    },
    {
      question: "How much does it cost to build a website?",
      answer: "The cost of building a website can vary widely depending on the complexity, features, and specific requirements of your project. We offer several pricing packages to accommodate different budgets and needs. After an initial consultation, we can provide a detailed quote based on your specific goals and objectives."
    },
    {
      question: "How long does it take to design and develop a website?",
      answer: "The timeline for designing and developing a website depends on the project's complexity and scope. Typically, a standard business website takes about 4-6 weeks to complete, while more complex projects like e-commerce sites or custom applications may take longer. We work closely with our clients to establish a realistic timeline and keep you informed throughout the process."
    },
    {
      question: "Will my website be mobile-friendly?",
      answer: "Absolutely! All the websites we design and develop are fully responsive, meaning they are optimized to work seamlessly across all devices, including desktops, tablets, and smartphones. Ensuring a great user experience on mobile devices is a top priority in our development process."
    },
    {
      question: "Do you provide ongoing support and maintenance for websites?",
      answer: "Yes, we offer ongoing support and maintenance services to ensure your website remains up-to-date, secure, and functioning smoothly. Our maintenance packages can include regular updates, security monitoring, backups, and technical support to address any issues that may arise. We're here to help you keep your website running efficiently long after it's launched."
    }
  ]

  return (
    <section className="section faq__v2" id="faq">
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-6 col-lg-7 mx-auto text-center">
            <span className="subtitle text-uppercase mb-3">FAQ</span>
            <h2 className="h2 fw-bold mb-3">Frequently Asked Questions</h2>
            <p>
              Utilize our tools to develop your concepts and bring your vision to life. Once complete, effortlessly share your creations.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 mx-auto">
            <div className="faq-content">
              <div className="accordion custom-accordion" id="accordionPanelsStayOpenExample">
                {faqs.map((faq, index) => (
                  <div key={index} className="accordion-item">
                    <h2 className="accordion-header">
                      <button 
                        className={`accordion-button ${index > 0 ? 'collapsed' : ''}`} 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target={`#panelsStayOpen-collapse${index + 1}`} 
                        aria-expanded={index === 0} 
                        aria-controls={`panelsStayOpen-collapse${index + 1}`}
                      >
                        {faq.question}
                      </button>
                    </h2>
                    <div 
                      className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`} 
                      id={`panelsStayOpen-collapse${index + 1}`}
                    >
                      <div className="accordion-body">{faq.answer}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ