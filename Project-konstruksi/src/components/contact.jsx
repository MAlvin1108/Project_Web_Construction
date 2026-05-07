import React, { useState } from 'react';
import {MapPin, Phone, Mail, Clock} from 'lucide-react';
import { contactData } from '../mock';

export const Contact = () => {
    const [formData, setFormData] = useState ({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };
     const handleSubmit = async (e) => {
        e.prevenDefault();
        setIsSubmitting(true);

        setTimeout(() => {
            alert("Massage sent! Thank you for reaching out. We'll get back to you soon.")
            
            setFormData({
                name: '',
                email: '',
                phone:'',
                subject: '',
                message: ''
            });
            setIsSubmitting(flase);
        },1000);
     };

     const contactInfo = [
        {
            icon: MapPin, 
            label: 'Address',
            value: contactData.info.address
        },
        {
            icon: Phone,
            label: 'Phone',
            value: contact.info.phone
        },
        {
            icon: Mail,
            label: 'Email',
            value: contactData.info.email
        },
        {
            icon: Clock,
            label: 'Hours',
            value: contactData.info.hours
        }
     ];

     return (
        <section id="portfolio" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extralight tracking-wider text-gray-900 mb-6">
            {portfolioData.title}
          </h2>
          <div className="w-24 h-px bg-gray-300 mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl font-light text-gray-600 tracking-wide">
            {portfolioData.subtitle}
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-8 py-3 text-sm font-light tracking-wider uppercase transition-all duration-300 ${
                filter === category
                  ? 'bg-gray-900 text-white'
                  : 'bg-white text-gray-900 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden bg-white cursor-pointer"
            >
              {/* Image */}
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-xs font-light tracking-widest uppercase mb-2 text-white/70">
                    {project.category}
                  </p>
                  <h3 className="text-2xl font-light tracking-wide mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm font-light text-white/80">
                    {project.location} • {project.year}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
     )
}