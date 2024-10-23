// src/components/Team.js
import React from 'react';

// Sample team data
const teamMembers = [
  {
    name: 'John Doe',
    role: 'CEO & Founder',
    image: 'https://via.placeholder.com/150',
    bio: 'John is a visionary leader with over 15 years of experience in the industry.',
  },
  {
    name: 'Jane Smith',
    role: 'Chief Marketing Officer',
    image: 'https://via.placeholder.com/150',
    bio: 'Jane is a marketing expert with a knack for growing brands organically.',
  },
  {
    name: 'Michael Johnson',
    role: 'Lead Developer',
    image: 'https://via.placeholder.com/150',
    bio: 'Michael leads the development team, ensuring every project is a success.',
  },
  {
    name: 'Emily Davis',
    role: 'Product Manager',
    image: 'https://via.placeholder.com/150',
    bio: 'Emily manages the product lifecycle with a strong focus on customer satisfaction.',
  },
  {
    name: 'Jane Smith',
    role: 'Chief Marketing Officer',
    image: 'https://via.placeholder.com/150',
    bio: 'Jane is a marketing expert with a knack for growing brands organically.',
  },
  {
    name: 'Michael Johnson',
    role: 'Lead Developer',
    image: 'https://via.placeholder.com/150',
    bio: 'Michael leads the development team, ensuring every project is a success.',
  },
  {
    name: 'Emily Davis',
    role: 'Product Manager',
    image: 'https://via.placeholder.com/150',
    bio: 'Emily manages the product lifecycle with a strong focus on customer satisfaction.',
  },
  {
    name: 'Jane Smith',
    role: 'Chief Marketing Officer',
    image: 'https://via.placeholder.com/150',
    bio: 'Jane is a marketing expert with a knack for growing brands organically.',
  },
  {
    name: 'Michael Johnson',
    role: 'Lead Developer',
    image: 'https://via.placeholder.com/150',
    bio: 'Michael leads the development team, ensuring every project is a success.',
  },
  {
    name: 'Emily Davis',
    role: 'Product Manager',
    image: 'https://via.placeholder.com/150',
    bio: 'Emily manages the product lifecycle with a strong focus on customer satisfaction.',
  },
];

const Team = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-8 lg:px-20">
        <h2 className="text-4xl font-bold text-center mb-12">Meet Our Team</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 ">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 text-center transform hover:scale-105 transition-transform"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold cursor-pointer font-heading-style">{member.name}</h3>
              <p className="text-sm text-gray-500 cursor-pointer">{member.role}</p>
              <p className="mt-4 text-gray-700 cursor-pointer font-heading-style">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
