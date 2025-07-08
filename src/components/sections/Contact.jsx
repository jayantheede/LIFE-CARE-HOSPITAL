import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Thank you! Your message has been received. We will contact you soon.'
    });
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    
    // Reset form status after 5 seconds
    setTimeout(() => {
      setFormStatus({
        submitted: false,
        success: false,
        message: ''
      });
    }, 5000);
  };

  return (
    <section id="contact" className="py-20 bg-white relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-bl-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-secondary/5 rounded-tr-full pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h5 
            className="uppercase text-primary font-semibold tracking-wider mb-2"
            data-aos="fade-up"
          >
            Get In Touch
          </h5>
          <h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Contact <span className="text-primary">Us</span>
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
            Have questions or need to schedule an appointment? Reach out to us and our team will get back to you as soon as possible.
          </p>
        </div>

        <div className="flex flex-wrap -mx-4">
          {/* Contact Information */}
          <div 
            className="w-full lg:w-1/3 px-4 mb-12 lg:mb-0"
            data-aos="fade-right" 
            data-aos-delay="400"
          >
            <div className="bg-gradient-to-br from-primary to-primary-dark p-8 rounded-2xl shadow-xl h-full text-white">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white shrink-0">
                    <i className="fas fa-map-marker-alt text-xl"></i>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium">Location</h4>
                    <p className="text-white/90">123 Healthcare Avenue, Medical District, City, State 12345</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white shrink-0">
                    <i className="fas fa-phone-alt text-xl"></i>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium">Phone</h4>
                    <p className="text-white/90">+1 (555) 123-4567</p>
                    <p className="text-white/90">+1 (555) 987-6543</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white shrink-0">
                    <i className="fas fa-envelope text-xl"></i>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium">Email</h4>
                    <p className="text-white/90">info@lifecarehospitals.com</p>
                    <p className="text-white/90">appointments@lifecarehospitals.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white shrink-0">
                    <i className="fas fa-clock text-xl"></i>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium">Hours</h4>
                    <p className="text-white/90">Monday - Friday: 8:00 AM - 8:00 PM</p>
                    <p className="text-white/90">Saturday: 9:00 AM - 5:00 PM</p>
                    <p className="text-white/90">Sunday: Emergency Care Only</p>
                  </div>
                </div>
              </div>
              
              {/* Social Media */}
              <div className="mt-10">
                <h4 className="text-lg font-medium mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors duration-300">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors duration-300">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors duration-300">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors duration-300">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div 
            className="w-full lg:w-2/3 px-4"
            data-aos="fade-left" 
            data-aos-delay="500"
          >
            <div className="bg-white p-8 rounded-2xl shadow-xl backdrop-blur-sm border border-gray-100">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Send a Message</h3>
              
              {formStatus.submitted && (
                <div className={`p-4 mb-6 rounded-lg ${formStatus.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  {formStatus.message}
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                        <i className="fas fa-user text-gray-400"></i>
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                        <i className="fas fa-envelope text-gray-400"></i>
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
                        placeholder="johndoe@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                        <i className="fas fa-phone-alt text-gray-400"></i>
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject *</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                        <i className="fas fa-tag text-gray-400"></i>
                      </div>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
                        placeholder="Appointment Request"
                        required
                      />
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message *</label>
                  <div className="relative">
                    <div className="absolute top-3 left-4 pointer-events-none">
                      <i className="fas fa-comment text-gray-400"></i>
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
                      placeholder="Please provide details about your inquiry or appointment request..."
                      required
                    ></textarea>
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="w-full md:w-auto bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  Send Message <i className="fas fa-paper-plane ml-2"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
        
        {/* Map */}
        <div 
          className="mt-16 rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-96"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          {/* Placeholder for map - in real website would be an iframe or map component */}
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <div className="text-center">
              <i className="fas fa-map-marked-alt text-6xl text-gray-400 mb-4"></i>
              <p className="text-gray-600">Map would be embedded here</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;