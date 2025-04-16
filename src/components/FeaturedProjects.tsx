
import React, { useRef, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const projects = [
  {
    id: 1,
    title: "Oakwood Residences",
    category: "Luxury Homes",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    info: "24 Units • Starting at $1.2M"
  },
  {
    id: 2,
    title: "Riverside Towers",
    category: "Modern Apartments",
    image: "https://images.unsplash.com/photo-1600573472550-8090733a15b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    info: "120 Units • Starting at $450K"
  },
  {
    id: 3,
    title: "Serenity Gardens",
    category: "Eco-Friendly Living",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    info: "40 Units • Starting at $680K"
  },
  {
    id: 4,
    title: "Downtown Lofts",
    category: "Urban Living",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    info: "60 Units • Starting at $520K"
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
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
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className={cn(
        "group relative rounded-xl overflow-hidden opacity-0 translate-y-10 transition-all duration-700 ease-out",
        `transition-delay-${index * 150}`
      )}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-brown-900/90 via-brown-900/40 to-transparent z-10 opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
      
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
      />
      
      <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform transition-transform duration-300 group-hover:translate-y-0">
        <span className="inline-block text-brown-100 text-sm mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
          {project.category}
        </span>
        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-brown-100 mb-4 transform opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-100">
          {project.info}
        </p>
        <Button 
          variant="link" 
          className="text-white p-0 opacity-0 transform -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-200 hover:text-brown-200"
        >
          View Project <ArrowUpRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

const FeaturedProjects = () => {
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
    <section className="py-20 bg-brown-50 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div 
          ref={sectionRef}
          className="text-center mb-16 opacity-0 translate-y-10 transition-all duration-700 ease-out"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brown-800 mb-4">
            Our Featured Projects
          </h2>
          <p className="text-brown-600 max-w-2xl mx-auto">
            Discover our carefully curated collection of premium properties designed with meticulous attention to detail and architectural excellence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        
        <div className="text-center mt-12 opacity-0 animate-fade-in animate-delay-800">
          <Button className="bg-brown-500 hover:bg-brown-600 text-white px-8 py-6 text-lg transition-all duration-300 hover:shadow-lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
