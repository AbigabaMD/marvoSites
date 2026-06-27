import React from 'react'

const Testimonials = () => {
  const testimonials = [
    {
      quote: "This platform has completely transformed the way I manage my business finances. The real-time transaction tracking and seamless payment options have saved me so much time and effort!",
      name: "John Davis",
      title: "Small Business Owner",
      image: "person-sq-2-min.jpg"
    },
    {
      quote: "As a freelancer, managing my finances can be overwhelming. The budgeting tools and personalized insights have made it so much easier to stay on top of my expenses and plan for the future.",
      name: "Emily Smith",
      title: "Freelancer",
      image: "person-sq-1-min.jpg"
    },
    {
      quote: "The investment options and portfolio management tools on this platform are top-notch. The variety of choices caters to all types of investors, from conservative to aggressive. I especially appreciate how the tailored recommendations align perfectly with my financial goals. It's a game-changer for anyone serious about growing their wealth.",
      name: "Michael Rodriguez",
      title: "Investor",
      image: "person-sq-5-min.jpg"
    },
    {
      quote: "I never thought managing money could be this simple! The user-friendly interface and secure transaction process give me the confidence to handle my finances independently.",
      name: "Sarah Lee",
      title: "College Student",
      image: "person-sq-3-min.jpg"
    },
    {
      quote: "The security features are outstanding. Knowing that my financial data is protected gives me peace of mind, and the platform's efficiency makes it a pleasure to use.",
      name: "James Kim",
      title: "IT Consultant",
      image: "person-sq-7-min.jpg"
    },
    {
      quote: "The platform's intuitive design and robust features have been a game-changer for my startup. It's helped me streamline operations and focus on growing my business.",
      name: "Laura Brown",
      title: "Entrepreneur",
      image: "person-sq-8-min.jpg"
    }
  ]

  return (
    <section className="section testimonials__v2" id="testimonials">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-5 mx-auto text-center">
            <span className="subtitle text-uppercase mb-3" data-aos="fade-up" data-aos-delay="0">Testimonials</span>
            <h2 className="mb-3" data-aos="fade-up" data-aos-delay="100">What Our Users Are Saying</h2>
            <p data-aos="fade-up" data-aos-delay="200">
              Real Stories of Success and Satisfaction from Our Diverse Community
            </p>
          </div>
        </div>
        <div className="row g-4">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="col-md-6 col-lg-4" 
              data-aos="fade-up" 
              data-aos-delay={index * 100}
            >
              <div className="testimonial rounded-4 p-4">
                <blockquote className="mb-3">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="testimonial-author d-flex gap-3 align-items-center">
                  <div className="author-img">
                    <img className="rounded-circle img-fluid" src={`/Nova-Bootstrap-1.0.0/assets/images/${testimonial.image}`} alt={testimonial.name} />
                  </div>
                  <div className="lh-base">
                    <strong className="d-block">{testimonial.name}</strong>
                    <span>{testimonial.title}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials