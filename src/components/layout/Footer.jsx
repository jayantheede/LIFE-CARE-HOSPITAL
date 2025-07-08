function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary"></div>
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-primary/10 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-secondary/10 blur-3xl pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-2xl font-bold mb-6">
              <span className="text-secondary">LIFE</span> CARE
            </h3>
            <p className="text-gray-400 mb-6">
              Providing exceptional healthcare services with compassion and excellence. Your health and wellbeing are our top priorities.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors duration-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors duration-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors duration-300">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-xl font-semibold mb-6 relative after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-primary pb-2">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-secondary transition-colors duration-300 flex items-center group">
                  <i className="fas fa-chevron-right mr-2 text-xs text-primary transform group-hover:translate-x-1 transition-transform duration-300"></i> Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-secondary transition-colors duration-300 flex items-center group">
                  <i className="fas fa-chevron-right mr-2 text-xs text-primary transform group-hover:translate-x-1 transition-transform duration-300"></i> About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-secondary transition-colors duration-300 flex items-center group">
                  <i className="fas fa-chevron-right mr-2 text-xs text-primary transform group-hover:translate-x-1 transition-transform duration-300"></i> Services
                </a>
              </li>
              <li>
                <a href="#doctors" className="text-gray-400 hover:text-secondary transition-colors duration-300 flex items-center group">
                  <i className="fas fa-chevron-right mr-2 text-xs text-primary transform group-hover:translate-x-1 transition-transform duration-300"></i> Doctors
                </a>
              </li>
              <li>
                <a href="#quotes" className="text-gray-400 hover:text-secondary transition-colors duration-300 flex items-center group">
                  <i className="fas fa-chevron-right mr-2 text-xs text-primary transform group-hover:translate-x-1 transition-transform duration-300"></i> Quotes
                </a>
              </li>
              <li>
                <a href="#timings" className="text-gray-400 hover:text-secondary transition-colors duration-300 flex items-center group">
                  <i className="fas fa-chevron-right mr-2 text-xs text-primary transform group-hover:translate-x-1 transition-transform duration-300"></i> Timings
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-secondary transition-colors duration-300 flex items-center group">
                  <i className="fas fa-chevron-right mr-2 text-xs text-primary transform group-hover:translate-x-1 transition-transform duration-300"></i> Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-xl font-semibold mb-6 relative after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-primary pb-2">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-400 hover:text-secondary transition-colors duration-300 flex items-center group">
                  <i className="fas fa-chevron-right mr-2 text-xs text-primary transform group-hover:translate-x-1 transition-transform duration-300"></i> Cardiology
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-secondary transition-colors duration-300 flex items-center group">
                  <i className="fas fa-chevron-right mr-2 text-xs text-primary transform group-hover:translate-x-1 transition-transform duration-300"></i> Neurology
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-secondary transition-colors duration-300 flex items-center group">
                  <i className="fas fa-chevron-right mr-2 text-xs text-primary transform group-hover:translate-x-1 transition-transform duration-300"></i> Pediatrics
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-secondary transition-colors duration-300 flex items-center group">
                  <i className="fas fa-chevron-right mr-2 text-xs text-primary transform group-hover:translate-x-1 transition-transform duration-300"></i> Orthopedics
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-secondary transition-colors duration-300 flex items-center group">
                  <i className="fas fa-chevron-right mr-2 text-xs text-primary transform group-hover:translate-x-1 transition-transform duration-300"></i> Ophthalmology
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-secondary transition-colors duration-300 flex items-center group">
                  <i className="fas fa-chevron-right mr-2 text-xs text-primary transform group-hover:translate-x-1 transition-transform duration-300"></i> Dentistry
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-secondary transition-colors duration-300 flex items-center group">
                  <i className="fas fa-chevron-right mr-2 text-xs text-primary transform group-hover:translate-x-1 transition-transform duration-300"></i> Emergency Care
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div data-aos="fade-up" data-aos-delay="400">
            <h3 className="text-xl font-semibold mb-6 relative after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-primary pb-2">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter to receive updates on health tips, news, and services.</p>
            
            <form className="mb-4">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-gray-800 text-gray-200 py-3 px-4 rounded-l-lg w-full focus:outline-none focus:ring-1 focus:ring-primary border-none"
                />
                <button 
                  type="submit" 
                  className="bg-primary hover:bg-primary-dark text-white px-4 rounded-r-lg transition-colors duration-300"
                >
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </form>
            
            <div className="flex items-center mt-6">
              <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center mr-4">
                <i className="fas fa-phone-alt text-primary"></i>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Emergency Hotline</p>
                <a href="tel:911" className="text-xl font-semibold text-white hover:text-primary transition-colors duration-300">911</a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} LIFE CARE Hospitals. All Rights Reserved.</p>
          <p className="mt-2">
            Designed with <i className="fas fa-heart text-red-500"></i> for better healthcare
          </p>
          
          {/* Back to top button */}
          <a 
            href="#home" 
            className="w-12 h-12 bg-primary/80 hover:bg-primary text-white rounded-full fixed bottom-6 right-6 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg z-50"
          >
            <i className="fas fa-arrow-up"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;