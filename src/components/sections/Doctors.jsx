import { useEffect, useRef } from 'react';

function DoctorCard({ image, name, specialty, socials, delay }) {
  return (
    <div 
      className="bg-white rounded-xl overflow-hidden shadow-lg group swiper-slide"
      data-aos="fade-up" 
      data-aos-delay={delay}
    >
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-72 object-cover object-center group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <p className="text-white/90 mb-4">
              Specialized in treating complex cases with over 10 years of experience in the field.
            </p>
            <div className="flex justify-start space-x-3">
              {socials.map((social, index) => (
                <a 
                  key={index}
                  href={social.url} 
                  className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/40 transition-colors duration-300"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <i className={`${social.icon} text-white`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-primary transition-colors duration-300">{name}</h3>
        <div className="flex items-center mt-1">
          <span className="w-8 h-0.5 bg-primary mr-2"></span>
          <p className="text-primary font-medium">{specialty}</p>
        </div>
        <div className="mt-4 flex items-center">
          <span className="text-yellow-400">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
          </span>
          <span className="text-gray-600 ml-2 text-sm">(126 reviews)</span>
        </div>
      </div>
    </div>
  );
}

function Doctors() {
  const swiperRef = useRef(null);

  useEffect(() => {
    // Initialize Swiper
    if (typeof window !== 'undefined' && window.Swiper) {
      swiperRef.current = new window.Swiper('.doctors-swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 30,
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

  const doctors = [
    {
      image: "/assets/images/doctor-1.jpg",
      name: "Dr. Sarah Johnson",
      specialty: "Cardiology",
      socials: [
        { icon: "fab fa-facebook-f", url: "#" },
        { icon: "fab fa-twitter", url: "#" },
        { icon: "fab fa-linkedin-in", url: "#" }
      ],
      delay: 100
    },
    {
      image: "/assets/images/doctor-2.jpg",
      name: "Dr. Michael Chen",
      specialty: "Neurology",
      socials: [
        { icon: "fab fa-facebook-f", url: "#" },
        { icon: "fab fa-twitter", url: "#" },
        { icon: "fab fa-linkedin-in", url: "#" }
      ],
      delay: 200
    },
    {
      image: "/assets/images/doctor-3.jpg",
      name: "Dr. Emily Rodriguez",
      specialty: "Pediatrics",
      socials: [
        { icon: "fab fa-facebook-f", url: "#" },
        { icon: "fab fa-twitter", url: "#" },
        { icon: "fab fa-linkedin-in", url: "#" }
      ],
      delay: 300
    },
    {
      image: "/assets/images/doctor-4.jpg",
      name: "Dr. James Wilson",
      specialty: "Orthopedics",
      socials: [
        { icon: "fab fa-facebook-f", url: "#" },
        { icon: "fab fa-twitter", url: "#" },
        { icon: "fab fa-linkedin-in", url: "#" }
      ],
      delay: 400
    },
    {
      image: "/assets/images/doctor-5.jpg",
      name: "Dr. Anna Martinez",
      specialty: "Ophthalmology",
      socials: [
        { icon: "fab fa-facebook-f", url: "#" },
        { icon: "fab fa-twitter", url: "#" },
        { icon: "fab fa-linkedin-in", url: "#" }
      ],
      delay: 500
    },
    {
      image: "/assets/images/doctor-6.jpg",
      name: "Dr. Robert Lee",
      specialty: "Dentistry",
      socials: [
        { icon: "fab fa-facebook-f", url: "#" },
        { icon: "fab fa-twitter", url: "#" },
        { icon: "fab fa-linkedin-in", url: "#" }
      ],
      delay: 600
    }
  ];

  return (
    <section id="doctors" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h5 
            className="uppercase text-primary font-semibold tracking-wider mb-2"
            data-aos="fade-up"
          >
            Our Experts
          </h5>
          <h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Meet Our <span className="text-primary">Doctors</span>
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
            Our team of experienced and dedicated healthcare professionals is committed to providing you with the best medical care.
          </p>
        </div>

        <div className="doctors-swiper swiper relative">
          <div className="swiper-wrapper pb-10">
            {doctors.map((doctor, index) => (
              <DoctorCard 
                key={index}
                image={doctor.image}
                name={doctor.name}
                specialty={doctor.specialty}
                socials={doctor.socials}
                delay={doctor.delay}
              />
            ))}
          </div>
          <div className="swiper-pagination"></div>
          <div className="swiper-button-next after:content-[''] w-12 h-12 bg-white/80 backdrop-blur-sm shadow-md rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300">
            <i className="fas fa-chevron-right"></i>
          </div>
          <div className="swiper-button-prev after:content-[''] w-12 h-12 bg-white/80 backdrop-blur-sm shadow-md rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300">
            <i className="fas fa-chevron-left"></i>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Doctors;