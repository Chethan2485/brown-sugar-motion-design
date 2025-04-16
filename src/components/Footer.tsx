
import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brown-950 text-brown-100 pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white mb-4">TrueScale</h3>
            <p className="text-brown-300 max-w-xs">
              Crafting exceptional architectural experiences that transform visions into timeless realities.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="#" className="text-brown-300 hover:text-white transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-brown-300 hover:text-white transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-brown-300 hover:text-white transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-brown-300 hover:text-white transition-colors duration-300">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About Us', 'Services', 'Projects'].map((item, index) => (
                <li key={index}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`} 
                    className="text-brown-300 hover:text-white transition-colors duration-300 hover:translate-x-1 flex items-center"
                  >
                    <span className="h-0.5 w-0 bg-brown-300 mr-0 group-hover:w-2 group-hover:mr-2 transition-all duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="text-brown-400 flex-shrink-0 mt-1" size={18} />
                <span className="text-brown-300">
                  123 Architectural Avenue, Design District, CA 90210
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-brown-400 flex-shrink-0" size={18} />
                <a 
                  href="tel:+11234567890" 
                  className="text-brown-300 hover:text-white transition-colors duration-300"
                >
                  +1 (123) 456-7890
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-brown-400 flex-shrink-0" size={18} />
                <a 
                  href="mailto:info@truescale.com" 
                  className="text-brown-300 hover:text-white transition-colors duration-300"
                >
                  info@truescale.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-brown-800 mt-12 pt-8 text-center text-brown-400 text-sm">
          <p>© {new Date().getFullYear()} TrueScale. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
