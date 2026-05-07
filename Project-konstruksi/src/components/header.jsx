import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Menu, X} from 'lucide-react';

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const hadleScroll = () => {
            setIsScrolled(window, scrollY > 50);
        };

        window.addEvenListener('scroll', handlescroll);
        return () => window.removeEvenlistener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', path : '/', hash : '#home'},
        { name: 'About', path : '/', hash : '#about'},
        { name: 'Services', path : '/', hash : '#services'},
        { name: 'Portofolio', path : '/', hash : '#portofolio'},
        { name: 'Contact', path : '/', hash : '#contact'}
    ];

    const scrollToSection = (hash) => {
        const element = document.querySelector(hash);
        if(element){
            const offset = 80;
            const elementPosition = element.getBoundingclientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
        setIsMobileMenuOpen(false);
    };

    return(
            <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="group">
            <h1 className={`text-2xl font-light tracking-wider transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            } group-hover:text-gray-600`}>
              fame-gallery
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.hash)}
                className={`text-sm font-light tracking-wide transition-colors duration-300 hover:text-gray-600 ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.hash)}
                className="block w-full text-left py-3 text-gray-900 hover:text-gray-600 transition-colors duration-300"
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
    )
}