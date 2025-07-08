import { useEffect, useState } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Doctors from './components/sections/Doctors';
import Quotes from './components/sections/Quotes';
import Timings from './components/sections/Timings';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    // Initialize AOS animation library
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: false,
        mirror: true
      });
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-poppins">
      <Navbar scrolled={scrolled} />
      <Hero />
      <Services />
      <Doctors />
      <Quotes />
      <Timings />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;