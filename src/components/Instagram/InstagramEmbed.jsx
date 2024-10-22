import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const InstagramEmbed = () => {
  useEffect(() => {
    // Load Instagram's embed script dynamically
    const script = document.createElement('script');
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="bg-white">
      <Link to="https://www.instagram.com/annmediagroup/" target='_blank'>
        <h2 className="lg:text-3xl text-2xl cursor-pointer font-semibold mb-4 text-gray-800 hover:text-pink-600 transition-colors">
          Follow Us on Instagram
        </h2>
      </Link>

      <p className="text-base text-gray-600 leading-relaxed mb-6">
        Stay updated with our latest news and media posts by following us on Instagram. Join our community and engage with content tailored for our audience.
      </p>

      {/* Instagram Profile Link */}
      <Link to="https://www.instagram.com/annmediagroup/" target="_blank" rel="noopener noreferrer">
        <p className="text-base text-gray-600 hover:text-red-500">
          Check out our Instagram profile for the latest updates!
        </p>
      </Link>

      {/* Instagram Reel Embed */}
      <div className='pt-8'>
        <Link to="https://www.instagram.com/annmediagroup/" target='_blank'>
          <img src="src\assets\instagram.png" alt="" className='h-96 w-full object-cover'/>
        </Link>
      </div>
    </div>
  );
};

export default InstagramEmbed;