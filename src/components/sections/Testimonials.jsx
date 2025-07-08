import { useEffect, useRef } from 'react';

function Testimonials() {
  const swiperRef = useRef(null);

  useEffect(() => {
    // Initialize Swiper
    if (typeof window !== 'undefined' && window.Swiper) {
      swiperRef.current = new window.Swiper('.testimonial-swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        breakpoints: {
          768: {
            slidesPerView: 1,
          },
        }
      });
    }

    return () => {
      if (swiperRef.current && swiperRef.current.destroy) {
        swiperRef.current.destroy(true, true);
      }
    };
  }, []);

  const testimonials = [
    {
      quote: "The care I received at LIFE CARE Hospitals was exceptional. The doctors were knowledgeable, and the staff was attentive and compassionate throughout my treatment. I couldn't have asked for better care.",
      name: "Jennifer Adams",
      role: "Patient",
      image: "/assets/images/testimonial-1.jpg"
    },
    {
      quote: "After my surgery at LIFE CARE, the recovery process was smoother than I anticipated. The follow-up care was thorough, and the entire team made sure I was comfortable and informed every step of the way.",
      name: "Robert Chen",
      role: "Patient",
      image: "/assets/images/testimonial-2.jpg"
    },
    {
      quote: "I've been bringing my family to LIFE CARE for years. The pediatric department is amazing with children, making what could be scary visits comfortable and even fun. We trust them completely with our health.",
      name: "Maria Rodriguez",
      role: "Parent",
      image: "/assets/images/testimonial-3.jpg"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h5 
            className="uppercase text-primary font-semibold tracking-wider mb-2"
            data-aos="fade-up"
          >
            What Patients Say
          </h5>
          <h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Patient <span className="text-primary">Testimonials</span>
          </h2>
          <div 
            className="w-24 h-1 bg-secondary mx-auto mb-6"
            data-aos="fade-up"
            data-aos-delay="200"
          ></div>
          <p 
            className="max-w-2xl mx-auto text-gray-600"
            data-aos="fade-up" 
            data-aos-delay="300"
          >
            Read what our patients have to say about their experiences and the quality of care they received at LIFE CARE Hospitals.
          </p>
        </div>

        <div 
          className="max-w-4xl mx-auto"
          data-aos="fade-up" 
          data-aos-delay="400"
        >
          <div className="testimonial-swiper swiper">
            <div className="swiper-wrapper">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="swiper-slide">
                  <div className="bg-white p-8 rounded-2xl shadow-xl backdrop-blur-sm border border-gray-100 relative">
                    {/* Quote mark decorative element */}
                    <div className="absolute top-0 right-0 -mt-6 -mr-6 w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center shadow-lg">
                      <i className="fas fa-quote-right text-white text-xl"></i>
                    </div>
                    
                    <div className="flex flex-col md:flex-row items-center gap-8">
                      <div className="md:w-1/3">
                        <div className="w-32 h-32 rounded-full overflow-hidden mx-auto md:mx-0 border-4 border-primary/20 p-1">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="w-full h-full object-cover rounded-full"
                          />
                        </div>
                        <div className="text-center md:text-left mt-4">
                          <h4 className="font-semibold text-gray-800 text-lg">{testimonial.name}</h4>
                          <p className="text-primary">{testimonial.role}</p>
                          
                          {/* Rating stars */}
                          <div className="flex items-center justify-center md:justify-start mt-2">
                            <i className="fas fa-star text-yellow-400"></i>
                            <i className="fas fa-star text-yellow-400"></i>
                            <i className="fas fa-star text-yellow-400"></i>
                            <i className="fas fa-star text-yellow-400"></i>
                            <i className="fas fa-star text-yellow-400"></i>
                          </div>
                        </div>
                      </div>
                      <div className="md:w-2/3">
                        <p className="text-gray-700 italic mb-4 relative">
                          "{testimonial.quote}"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="swiper-pagination mt-8"></div>
            <div className="swiper-button-next !text-primary hidden md:flex after:content-[''] w-12 h-12 bg-white rounded-full shadow-md"></div>
            <div className="swiper-button-prev !text-primary hidden md:flex after:content-[''] w-12 h-12 bg-white rounded-full shadow-md"></div>
          </div>
        </div>
      </div>

      {/* Decorative Shapes */}
      <div className="hidden md:block absolute top-20 left-0 w-48 h-48 bg-primary/5 rounded-full"></div>
      <div className="hidden md:block absolute bottom-20 right-0 w-64 h-64 bg-secondary/5 rounded-full"></div>
    </section>
  );
}

export default Testimonials;