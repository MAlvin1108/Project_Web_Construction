import React from 'react';
import { Home, Building, Pallete, Map, Wrench, lightbulb} from 'lucide-react';
import { servicesData } from '../mock';

const iconMap = {
    home: Home, 
    building: Building,
    palette: Palette,
    map: Map, 
    wrench: Wrench,
    lightbulb: Lightbulb
};

export const Services = () => {
    return(
        <section id="services" className="py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-extralight tracking-wider text-gray-900 mb-6">
            {servicesData.title}
          </h2>
          <div className="w-24 h-px bg-gray-300 mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl font-light text-gray-600 tracking-wide">
            {servicesData.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {servicesData.services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={service.id}
                className="group bg-white p-10 hover:shadow-lg transition-all duration-500 cursor-pointer"
              >
                <div className="mb-6">
                  <Icon 
                    size={40} 
                    strokeWidth={1} 
                    className="text-gray-900 group-hover:text-gray-600 transition-colors duration-300"
                  />
                </div>
                <h3 className="text-2xl font-light text-gray-900 mb-4 tracking-wide">
                  {service.title}
                </h3>
                <p className="text-base font-light text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
    )
}