import { useEffect, useRef, useState } from 'react';

function Quotes() {
  const swiperRef = useRef(null);
  const [activeQuote, setActiveQuote] = useState(0);
  
  const quotes = [
    {
      text: "The greatest wealth is health.",
      author: "Virgil",
      image: "/assets/images/quote-bg-1.jpg"
    },
    {
      text: "Health is not valued until sickness comes.",
      author: "Thomas Fuller",
      image: "/assets/images/quote-bg-2.jpg"
    },
    {
      text: "It is health that is real wealth and not pieces of gold and silver.",
      author: "Mahatma Gandhi",
      image: "/assets/images/quote-bg-3.jpg"
    },
    {
      text: "Health is a state of complete harmony of the body, mind, and spirit.",
      author: "B.K.S. Iyengar",
      image: "/assets/images/quote-bg-4.jpg"
    },
    {
      text: "The greatest of healers is good cheer.",
      author: "Pindarus",
      image: "/assets/images/quote-bg-5.jpg"
    }
  ];

  useEffect(() => {
    // Initialize Swiper
    if (typeof window !== 'undefined' && window.Swiper) {
      swiperRef.current = new window.Swiper('.quotes-swiper', {
        slidesPerView: 1,
        spaceBetween: 0,
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet: function (index, className) {
            return `<span class="${className} w-3 h-3"></span>`;
          }
        },
        on: {
          slideChange: function() {
            setActiveQuote(this.realIndex);
          }
        }
      });
    }

    return () => {
      if (swiperRef.current && swiperRef.current.destroy) {
        swiperRef.current.destroy(true, true);
      }
    };
  }, []);

  return (
    <section id="quotes" className="py-20 bg-gray-100 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h5 
            className="uppercase text-primary font-semibold tracking-wider mb-2"
            data-aos="fade-up"
          >
            Inspiration
          </h5>
          <h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Health <span className="text-primary">Quotes</span>
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
            Wisdom and inspiration to guide your journey to better health and wellbeing.
          </p>
        </div>

        <div 
          className="max-w-4xl mx-auto"
          data-aos="fade-up" 
          data-aos-delay="400"
        >
          <div className="quotes-swiper swiper h-96">
            <div className="swiper-wrapper">
              {quotes.map((quote, index) => (
                <div key={index} className="swiper-slide">
                  <div className="bg-gradient-to-br from-primary/90 to-secondary/90 rounded-2xl shadow-2xl overflow-hidden h-full relative">
                    <div className="absolute inset-0 opacity-20 bg-center bg-cover z-0" style={{backgroundImage: `url(${quote.image})`}}></div>
                    <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-10"></div>
                    <div className="relative z-20 flex flex-col justify-center items-center h-full text-center p-8">
                      <i className="fas fa-quote-left text-6xl text-white/20 mb-6"></i>
                      <h3 className="text-2xl md:text-3xl font-light text-white mb-8 italic">
                        "{quote.text}"
                      </h3>
                      <div className="w-16 h-1 bg-white/30 mb-4"></div>
                      <p className="text-white/90 font-medium">- {quote.author}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="swiper-pagination bottom-6"></div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-primary/5"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-secondary/5"></div>
    </section>
  );
}

export default Quotes;