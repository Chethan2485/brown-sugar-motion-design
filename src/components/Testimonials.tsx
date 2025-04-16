
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Homeowner",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    quote: "TrueScale transformed our vision into reality. Their attention to detail and commitment to quality is unmatched in the industry. We couldn't be happier with our new home."
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Property Developer",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
    quote: "Working with TrueScale has been a game-changer for our developments. Their innovative designs and efficient execution have consistently exceeded our expectations."
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Interior Designer",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    quote: "The architectural integrity and attention to spatial flow in TrueScale projects makes them a dream to work with. They create perfect canvases for interior design."
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Real Estate Investor",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    quote: "TrueScale consistently delivers properties that appreciate in value faster than market average. Their reputation for quality gives investors confidence."
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const maxIndex = testimonials.length - 1;
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent(prev => (prev === 0 ? maxIndex : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent(prev => (prev === maxIndex ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [current, isAnimating]);

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-white relative overflow-hidden opacity-0 translate-y-10 transition-all duration-700 ease-out"
    >
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brown-800 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-brown-600 max-w-2xl mx-auto">
            Hear from those who have experienced our commitment to architectural excellence and client satisfaction.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute top-0 left-0 -ml-4 mt-4 text-brown-300">
            <Quote size={60} />
          </div>
          
          {/* Testimonial Carousel */}
          <div className="relative h-[360px] md:h-[280px] overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={cn(
                  "absolute w-full h-full transition-all duration-500 flex flex-col md:flex-row items-center gap-8 p-6 rounded-xl",
                  index === current 
                    ? "opacity-100 translate-x-0" 
                    : index < current 
                      ? "opacity-0 -translate-x-full" 
                      : "opacity-0 translate-x-full"
                )}
              >
                <div className="flex-shrink-0">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 object-cover rounded-full border-4 border-brown-100 shadow-lg"
                  />
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <p className="text-brown-700 text-lg italic mb-6">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <h4 className="text-brown-800 font-bold text-xl">{testimonial.name}</h4>
                    <p className="text-brown-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full bg-brown-100 text-brown-600 hover:bg-brown-200 transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (isAnimating) return;
                    setIsAnimating(true);
                    setCurrent(index);
                    setTimeout(() => setIsAnimating(false), 500);
                  }}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    index === current ? "w-8 bg-brown-500" : "bg-brown-200"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-brown-100 text-brown-600 hover:bg-brown-200 transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
