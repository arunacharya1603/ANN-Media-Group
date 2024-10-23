// src/components/ContactPage.js
import React, { useState } from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

// Sample social media data
const socialMediaLinks = [
  {
    name: 'Facebook',
    url: 'https://facebook.com',
    icon: <FaFacebookSquare/>, // You can replace this with an actual icon
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com',
    icon: <BsTwitterX/>,
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com',
    icon: '📸',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com',
    icon: '💼',
  },
  {
    name: 'YouTube',
    url: 'https://youtube.com',
    icon: '📺',
  },
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="container mx-auto py-16">
      <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>
      <div className="flex flex-col md:flex-row justify-between">
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8 w-full md:w-1/2 mb-8 md:mb-0">
          <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg w-full p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg w-full p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg w-full p-2"
              rows="4"
              required
            />
          </div>
          <button type="submit" className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600">
            Send Message
          </button>
        </form>

        {/* Social Media Links */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <h3 className="text-2xl font-semibold mb-4">Connect with Us</h3>
          <div className="flex flex-wrap justify-center">
            {socialMediaLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-200 rounded-full p-4 m-2 text-center hover:bg-gray-300 transition"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;