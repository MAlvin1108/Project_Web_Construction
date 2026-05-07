import React from 'react'
import {Mail, Phone, MapPin} from 'lucide-react';

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return(
        <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-extralight tracking-widest mb-4">
              fame-gallery
            </h3>
            <p className="text-sm font-light text-gray-400 leading-relaxed">
              Crafting architectural excellence through innovative design and sustainable solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-light tracking-widest uppercase mb-4 text-gray-400">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => {
                      const element = document.querySelector(`#${link.toLowerCase()}`);
                      if (element) {
                        const offset = 80;
                        const elementPosition = element.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - offset;
                        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                      }
                    }}
                    className="text-sm font-light text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-light tracking-widest uppercase mb-4 text-gray-400">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail size={16} strokeWidth={1} className="text-gray-400 mt-1 flex-shrink-0" />
                <span className="text-sm font-light text-gray-300">info@fame-gallery.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={16} strokeWidth={1} className="text-gray-400 mt-1 flex-shrink-0" />
                <span className="text-sm font-light text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={16} strokeWidth={1} className="text-gray-400 mt-1 flex-shrink-0" />
                <span className="text-sm font-light text-gray-300">Los Angeles, CA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <p className="text-center text-sm font-light text-gray-400">
            © {currentYear} fame-gallery. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
    )
}