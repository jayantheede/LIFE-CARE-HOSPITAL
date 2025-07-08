function ServiceCard({ icon, title, description, delay, colorClass }) {
  return (
    <div 
      className={`${colorClass} backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group overflow-hidden relative`}
      data-aos="fade-up" 
      data-aos-delay={delay}
    >
      {/* Background decoration */}
      <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-white/10 transition-transform duration-500 group-hover:scale-150"></div>
      
      <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-white mb-6 transition-all duration-300 group-hover:bg-white/30">
        <i className={`${icon} text-3xl`}></i>
      </div>
      <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-white/90">{title}</h3>
      <p className="text-white/80 group-hover:text-white/90 relative z-10">{description}</p>
      <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <a href="#contact" className="text-white inline-flex items-center">
          Learn More <i className="fas fa-arrow-right ml-2 text-sm"></i>
        </a>
      </div>
    </div>
  );
}

function Services() {
  const services = [
    {
      icon: "fas fa-heartbeat",
      title: "Cardiology",
      description: "Expert care for heart conditions with state-of-the-art diagnostics and treatments to keep your heart healthy.",
      delay: 100,
      colorClass: "bg-gradient-to-br from-red-500/80 to-red-600/80"
    },
    {
      icon: "fas fa-brain",
      title: "Neurology",
      description: "Comprehensive care for nervous system disorders by our team of experienced neurologists and specialists.",
      delay: 200,
      colorClass: "bg-gradient-to-br from-blue-500/80 to-blue-600/80"
    },
    {
      icon: "fas fa-baby",
      title: "Pediatrics",
      description: "Specialized healthcare for infants, children, and adolescents in a child-friendly environment.",
      delay: 300,
      colorClass: "bg-gradient-to-br from-green-500/80 to-green-600/80"
    },
    {
      icon: "fas fa-bone",
      title: "Orthopedics",
      description: "Treatment for bone and joint conditions, from sports injuries to complex surgeries and rehabilitation.",
      delay: 400,
      colorClass: "bg-gradient-to-br from-amber-500/80 to-amber-600/80"
    },
    {
      icon: "fas fa-eye",
      title: "Ophthalmology",
      description: "Complete eye care services including routine exams, surgical procedures, and treatment for eye diseases.",
      delay: 500,
      colorClass: "bg-gradient-to-br from-purple-500/80 to-purple-600/80"
    },
    {
      icon: "fas fa-tooth",
      title: "Dentistry",
      description: "Maintaining your oral health with preventive care, cosmetic procedures, and dental surgery options.",
      delay: 600,
      colorClass: "bg-gradient-to-br from-cyan-500/80 to-cyan-600/80"
    },
    {
      icon: "fas fa-stethoscope",
      title: "General Medicine",
      description: "Primary healthcare services for patients of all ages, focusing on prevention, diagnosis, and treatment of illnesses.",
      delay: 700,
      colorClass: "bg-gradient-to-br from-indigo-500/80 to-indigo-600/80"
    },
    {
      icon: "fas fa-procedures",
      title: "Surgery",
      description: "Advanced surgical procedures performed by skilled surgeons with a focus on minimally invasive techniques.",
      delay: 800,
      colorClass: "bg-gradient-to-br from-orange-500/80 to-orange-600/80"
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h5 
            className="uppercase text-primary font-semibold tracking-wider mb-2"
            data-aos="fade-up"
          >
            What We Offer
          </h5>
          <h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Our <span className="text-primary">Medical Services</span>
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
            We offer a comprehensive range of medical services to meet all your healthcare needs, delivered by our experienced and compassionate team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={service.delay}
              colorClass={service.colorClass}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;