import React from 'react';
import {ChevronDown} from 'lucide-react';
import {heroData} from '../mock'

export const Hero = () => {
    const scrollToAbout = () => {
        const aboutSection = document.querySelector('#about');
        if(aboutSection){
            const offset = 80;
            const elementPosition = aboutSection.getBoundingClientRect().top
            const offsetposition = elementPosition + window.pageYOffset - offset;
            
            window.scrollTo({
                top : offsetPosition,
                behavior : 'smooth'
            });
        } 
    };

    return (
           <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroData.image}
          alt="Modern Architecture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-extralight tracking-widest text-white mb-4">
              {heroData.title}
            </h1>
            <p className="text-xl md:text-3xl font-light text-white/90 tracking-wide">
              {heroData.subtitle}
            </p>
            <p className="text-base md:text-lg font-light text-white/70 tracking-wider">
              {heroData.description}
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white hover:text-gray-300 transition-all duration-300 animate-bounce cursor-pointer"
        aria-label="Scroll to content"
      >
        <ChevronDown size={40} strokeWidth={1} />
      </button>
    </section>
    )
}