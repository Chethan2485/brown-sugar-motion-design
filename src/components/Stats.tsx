
import React, { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 10, label: 'Years of Experience', suffix: '+' },
  { value: 250, label: 'Properties Developed', suffix: '+' },
  { value: 120, label: 'Awards Received', suffix: '' },
  { value: 98, label: 'Client Satisfaction', suffix: '%' },
];

const AnimatedCounter = ({ value, suffix }: { value: number, suffix: string }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 2000; // 2 seconds
    const frameDuration = 1000 / 60; // 60 fps
    const totalFrames = Math.round(duration / frameDuration);
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const currentCount = Math.floor(progress * value);

      if (progress < 1) {
        setCount(currentCount);
      } else {
        setCount(value);
        clearInterval(counter);
      }
    }, frameDuration);

    return () => clearInterval(counter);
  }, [value, isVisible]);

  return (
    <div ref={counterRef} className="font-bold text-4xl md:text-5xl text-brown-800">
      {count}{suffix}
    </div>
  );
};

const Stats = () => {
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

  return (
    <section className="py-20 bg-brown-500 relative">
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"
      />
      
      <div 
        ref={sectionRef}
        className="container mx-auto px-6 md:px-12 relative z-10 opacity-0 translate-y-10 transition-all duration-700 ease-out"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-lg transition-transform duration-300 hover:transform hover:scale-105"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <div className="mt-2 text-white text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
