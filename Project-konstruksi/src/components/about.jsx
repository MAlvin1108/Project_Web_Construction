import React from 'react';
import { aboutData } from '../mock';

export const About = () => {
    return (
        <section id="about" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-extralight tracking-wider text-gray-900 mb-6">
            {aboutData.title}
          </h2>
          <div className="w-24 h-px bg-gray-300 mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl font-light text-gray-600 tracking-wide">
            {aboutData.subtitle}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <div className="space-y-8">
            <p className="text-lg font-light text-gray-700 leading-relaxed">
              {aboutData.description}
            </p>
            <p className="text-lg font-light text-gray-700 leading-relaxed">
              {aboutData.mission}
            </p>
          </div>

          {/* Image */}
          <div className="relative h-96 lg:h-[500px]">
            <img
              src={aboutData.images[0]}
              alt="Architectural Design Process"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {aboutData.stats.map((stat, index) => (
            <div key={index} className="text-center space-y-2">
              <h3 className="text-4xl md:text-5xl font-extralight text-gray-900 tracking-wide">
                {stat.number}
              </h3>
              <p className="text-sm md:text-base font-light text-gray-600 tracking-wider uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
    )    
}
