import { useEffect, useRef } from 'react';

function Hero() {
  const heroRef = useRef(null);
  
  useEffect(() => {
    // Parallax effect on scroll
    const handleScroll = () => {
      const scrollValue = window.scrollY;
      if (heroRef.current) {
        heroRef.current.style.backgroundPositionY = `${scrollValue * 0.5}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="relative min-h-screen flex items-center bg-cover bg-center bg-fixed transition-all duration-700" 
      style={{ backgroundImage: "url('/assets/images/hero-bg.jpg')" }}
    >
      {/* Animated Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-secondary/50"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="particles-container"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div 
          className="max-w-3xl p-8 rounded-2xl backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl"
          data-aos="fade-right" 
          data-aos-delay="200"
        >
          <h5 className="text-white/80 mb-2 tracking-wider font-light" data-aos="fade-up" data-aos-delay="400">WELCOME TO LIFE CARE</h5>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" data-aos="fade-up" data-aos-delay="600">
            Your Health Is Our <span className="text-secondary">Priority</span>
          </h1>
          <p className="text-xl text-white/90 mb-8" data-aos="fade-up" data-aos-delay="800">
            Providing exceptional healthcare with compassion and cutting-edge technology. 
            Trust us with your most valuable asset - your health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4" data-aos="fade-up" data-aos-delay="1000">
            <a 
              href="#appointment" 
              className="bg-gradient-to-r from-primary to-primary-dark text-white font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-center group"
            >
              Book Appointment 
              <i className="fas fa-arrow-right ml-2 transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300"></i>
            </a>
            <a 
              href="#services" 
              className="bg-white/20 hover:bg-white/30 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 border border-white/30 hover:border-white/50 text-center"
            >
              Our Services
            </a>
          </div>
          
          {/* Floating stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4" data-aos="fade-up" data-aos-delay="1200">
            <div className="bg-white/15 backdrop-blur-md p-4 rounded-xl border border-white/10">
              <h3 className="text-3xl font-bold text-white">25+</h3>
              <p className="text-white/80 text-sm">Expert Doctors</p>
            </div>
            <div className="bg-white/15 backdrop-blur-md p-4 rounded-xl border border-white/10">
              <h3 className="text-3xl font-bold text-white">10k+</h3>
              <p className="text-white/80 text-sm">Happy Patients</p>
            </div>
            <div className="bg-white/15 backdrop-blur-md p-4 rounded-xl border border-white/10">
              <h3 className="text-3xl font-bold text-white">15+</h3>
              <p className="text-white/80 text-sm">Specialities</p>
            </div>
            <div className="bg-white/15 backdrop-blur-md p-4 rounded-xl border border-white/10">
              <h3 className="text-3xl font-bold text-white">24/7</h3>
              <p className="text-white/80 text-sm">Emergency Care</p>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,229.3C672,245,768,267,864,261.3C960,256,1056,224,1152,208C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}

export default Hero;