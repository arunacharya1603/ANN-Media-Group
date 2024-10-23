import React from 'react';
import { FaBullhorn, FaPenNib, FaBuilding } from 'react-icons/fa';
import smmImage from '../../assets/smm-image.svg'
import contentImage from '../../assets/content-image.svg';
import brandingImage from '../../assets/branding-image.svg';

const servicesData = [
  {
    icon: <FaBullhorn size={30} className="text-red-500" />,
    title: 'Social Media Management',
    description: 'Build and engage your audience on platforms like Facebook, Instagram, and Twitter.',
    image: smmImage,
  },
  {
    icon: <FaPenNib size={28} className="text-yellow-500" />,
    title: 'Content Marketing',
    description: 'Attract, engage, and convert your target audience with our strategic content marketing services.',
    image: contentImage,
  },
  {
    icon: <FaBuilding size={25} className="text-purple-500" />,
    title: 'Branding',
    description: 'Enhance your brand identity and positioning through our comprehensive branding solutions.',
    image: brandingImage,
  },
];

const Services = () => {
  return (
    <section className="py-16 lg:px-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {servicesData.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 lg:transition-transform transition-shadow duration-500">
            <img src={service.image} alt={`${service.title} graphic`} className="w-32 h-32 mx-auto mb-4" />
              <div className='flex flex-row gap-6 items-center justify-center mb-6'>
              <div className="text-2xl">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              </div>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
