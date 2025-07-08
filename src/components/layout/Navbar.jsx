import { useState, useEffect } from 'react';

function Navbar({ scrolled }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Doctors', href: '#doctors' },
    { name: 'Quotes', href: '#quotes' },
    { name: 'Timings', href: '#timings' },
    { name: 'Contact', href: '#contact' },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuOpen && !event.target.closest('.mobile-menu') && !event.target.closest('.menu-btn')) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  // Smooth scroll effect for anchor links
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const target = e.target;
      if (target.tagName.toLowerCase() === 'a' && target.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80, // Adjust for navbar height
            behavior: 'smooth'
          });
          
          // Close mobile menu if open
          if (mobileMenuOpen) {
            setMobileMenuOpen(false);
          }
        }
      }
    };

    document.body.addEventListener('click', handleAnchorClick);
    return () => document.body.removeEventListener('click', handleAnchorClick);
  }, [mobileMenuOpen]);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/90 shadow-lg backdrop-blur-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center">
            <span className="text-2xl font-bold text-primary">
              <span className="text-secondary">LIFE</span> CARE
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors duration-300 relative group ${
                  scrolled ? 'text-gray-800 hover:text-primary' : 'text-white hover:text-secondary'
                }`}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-secondary to-primary group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <a
              href="#appointment"
              className="bg-gradient-to-r from-primary to-primary-dark text-white py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden menu-btn inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary"
            onClick={toggleMobileMenu}
            aria-expanded={mobileMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl ${scrolled ? 'text-gray-800' : 'text-white'}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu md:hidden ${
          mobileMenuOpen ? 'block' : 'hidden'
        } bg-white/95 backdrop-blur-sm shadow-lg absolute w-full max-h-[80vh] overflow-y-auto`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:bg-primary/10 hover:text-primary transition-colors duration-300"
              onClick={toggleMobileMenu}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#appointment"
            className="block px-4 py-3 my-2 rounded-lg text-base font-medium text-white bg-gradient-to-r from-primary to-primary-dark hover:shadow-md transition-all duration-300"
            onClick={toggleMobileMenu}
          >
            Book Appointment
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;