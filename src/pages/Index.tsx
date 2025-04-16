import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedProjects from '@/components/FeaturedProjects';
import Stats from '@/components/Stats';
import Footer from '@/components/Footer';

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-brown-50">
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="properties">
        <FeaturedProjects />
      </section>
      <section id="services">
        <Stats />
      </section>
      <section id="about">
        {/* Note: We still keep the "about" section ID for navigation purposes */}
      </section>
      <Footer />
    </div>
  );
};

export default Index;
