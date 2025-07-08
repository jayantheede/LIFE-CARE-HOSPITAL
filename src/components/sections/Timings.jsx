import { useEffect, useRef } from 'react';

function Timings() {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const scrollSpeed = 1;
    let scrollPos = 0;
    let animationFrameId;

    const scrollMarquee = () => {
      if (marqueeRef.current) {
        scrollPos += scrollSpeed;
        if (scrollPos >= marqueeRef.current.scrollWidth / 2) {
          scrollPos = 0;
        }
        marqueeRef.current.style.transform = `translateX(-${scrollPos}px)`;
      }
      animationFrameId = requestAnimationFrame(scrollMarquee);
    };

    scrollMarquee();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const schedules = [
    { day: "Monday", hours: "8:00 AM - 8:00 PM", specialty: "All Departments" },
    { day: "Tuesday", hours: "8:00 AM - 8:00 PM", specialty: "All Departments" },
    { day: "Wednesday", hours: "8:00 AM - 8:00 PM", specialty: "All Departments" },
    { day: "Thursday", hours: "8:00 AM - 8:00 PM", specialty: "All Departments" },
    { day: "Friday", hours: "8:00 AM - 8:00 PM", specialty: "All Departments" },
    { day: "Saturday", hours: "9:00 AM - 5:00 PM", specialty: "Limited Services" },
    { day: "Sunday", hours: "10:00 AM - 2:00 PM", specialty: "Emergency Only" },
  ];

  return (
    <section id="timings" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h5 
            className="uppercase text-primary font-semibold tracking-wider mb-2"
            data-aos="fade-up"
          >
            Hospital Hours
          </h5>
          <h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Working <span className="text-primary">Hours</span>
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
            Our hospital is open with different timings throughout the week. 
            Emergency services are available 24/7.
          </p>
        </div>

        {/* Emergency Banner */}
        <div 
          className="bg-red-600 text-white rounded-xl p-4 mb-10 flex items-center justify-between"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="flex items-center">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
              <i className="fas fa-ambulance text-2xl"></i>
            </div>
            <div>
              <h3 className="font-bold text-xl">Emergency Services</h3>
              <p>Available 24 hours / 7 days</p>
            </div>
          </div>
          <div>
            <a href="tel:911" className="bg-white text-red-600 hover:bg-red-50 font-medium py-2 px-6 rounded-full transition-colors duration-300">
              <i className="fas fa-phone-alt mr-2"></i> Emergency: 911
            </a>
          </div>
        </div>

        {/* Schedule Grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          {schedules.map((schedule, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={500 + (index * 100)}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-800">{schedule.day}</h3>
                {schedule.day === "Sunday" ? (
                  <span className="bg-red-100 text-red-700 px-2 py-1 rounded-md text-xs font-medium">
                    Emergency Only
                  </span>
                ) : schedule.day === "Saturday" ? (
                  <span className="bg-amber-100 text-amber-700 px-2 py-1 rounded-md text-xs font-medium">
                    Limited
                  </span>
                ) : (
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded-md text-xs font-medium">
                    Open
                  </span>
                )}
              </div>
              <div className="flex items-center text-gray-700 mb-2">
                <i className="far fa-clock mr-2 text-primary"></i>
                <span>{schedule.hours}</span>
              </div>
              <div className="flex items-center text-gray-700">
                <i className="fas fa-stethoscope mr-2 text-primary"></i>
                <span>{schedule.specialty}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Marquee */}
        <div 
          className="bg-gradient-to-r from-primary to-secondary rounded-xl p-1 overflow-hidden shadow-lg"
          data-aos="fade-up"
          data-aos-delay="900"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden">
            <div className="flex whitespace-nowrap overflow-hidden p-4" ref={marqueeRef}>
              <div className="flex space-x-8 animate-marquee">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-2">
                    <i className="fas fa-phone-alt text-primary"></i>
                  </div>
                  <span className="text-white font-medium">Appointment: +1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-2">
                    <i className="fas fa-ambulance text-primary"></i>
                  </div>
                  <span className="text-white font-medium">Emergency: 911</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-2">
                    <i className="fas fa-info-circle text-primary"></i>
                  </div>
                  <span className="text-white font-medium">Info Desk: +1 (555) 987-6543</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-2">
                    <i className="fas fa-heartbeat text-primary"></i>
                  </div>
                  <span className="text-white font-medium">Cardiac Care: +1 (555) 234-5678</span>
                </div>
                {/* Duplicate content for smooth looping */}
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-2">
                    <i className="fas fa-phone-alt text-primary"></i>
                  </div>
                  <span className="text-white font-medium">Appointment: +1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-2">
                    <i className="fas fa-ambulance text-primary"></i>
                  </div>
                  <span className="text-white font-medium">Emergency: 911</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-2">
                    <i className="fas fa-info-circle text-primary"></i>
                  </div>
                  <span className="text-white font-medium">Info Desk: +1 (555) 987-6543</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-2">
                    <i className="fas fa-heartbeat text-primary"></i>
                  </div>
                  <span className="text-white font-medium">Cardiac Care: +1 (555) 234-5678</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timings;