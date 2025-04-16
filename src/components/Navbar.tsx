
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4 px-6 md:px-12',
        isScrolled ? 'bg-white/95 shadow-md backdrop-blur-sm' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-brown-800 transition-transform duration-300 hover:scale-105">TrueScale</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {['Home', 'Properties', 'Services', 'About Us', 'Contact'].map((item, index) => (
              <li key={index} className="relative overflow-hidden group">
                <a 
                  href="#" 
                  className="text-brown-800 hover:text-brown-600 transition-colors duration-300 py-2"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brown-500 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                </a>
              </li>
            ))}
          </ul>
          <Button className="bg-brown-500 hover:bg-brown-600 text-white transition-all duration-300 hover:shadow-lg">Get Started</Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu} 
            className="text-brown-800 focus:outline-none p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed top-16 left-0 right-0 bg-white shadow-lg transition-all duration-300 ease-in-out transform md:hidden",
        isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      )}>
        <div className="p-5 space-y-4">
          <ul className="space-y-4">
            {['Home', 'Properties', 'Services', 'About Us', 'Contact'].map((item, index) => (
              <li key={index}>
                <a 
                  href="#" 
                  className="block text-brown-800 hover:text-brown-600 hover:pl-2 transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <Button className="w-full bg-brown-500 hover:bg-brown-600 text-white transition-all duration-300">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
