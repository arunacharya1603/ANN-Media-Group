import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaInstagramSquare } from "react-icons/fa";
import InstagramEmbedd from '../Instagram/InstagramEmbed';
import TwitterEmbed from '../Twitter/TwitterEmbed';

const Media = () => {
  useEffect(() => {
    // Re-renders the Facebook widget when the component mounts
    if (window.FB) {
      window.FB.XFBML.parse();
    }
  }, []);

  useEffect(() => {
    const scriptId = 'instagram-embed-script';

    // Check if the Instagram embed script is already present
    if (!document.getElementById(scriptId)) {
      // Create the Instagram embed script
      const script = document.createElement('script');
      script.src = 'https://www.instagram.com/embed.js';
      script.async = true;
      script.defer = true;
      script.id = scriptId;

      // Attach a listener to ensure the script has loaded
      script.onload = () => {
        if (window.instgrm) {
          window.instgrm.Embeds.process();
        }
      };

      document.body.appendChild(script);
    } else {
      // If the script is already loaded, manually trigger the reparse
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    }
  }, []);

  return (
    <div className="bg-gray-100 py-16 min-h-screen">
      {/* Section Header */}
      <h1 className="text-center lg:text-5xl md:text-4xl text-3xl font-extrabold mb-12 text-gray-900 leading-tight tracking-wide">
        EXPLORE OUR MEDIA SERVICES
      </h1>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-7xl mx-auto px-4 lg:px-0">

        {/* Left Section (YouTube) */}
        <div className="border border-gray-200 shadow-lg rounded-xl p-8 bg-white transition-transform transform hover:scale-105">
          <Link to="https://www.youtube.com/embed/NhGaej03nIQ" target='_blank'>
            <h2 className="lg:text-3xl text-2xl cursor-pointer font-semibold mb-4 text-gray-800 hover:text-red-600 transition-colors">
              YouTube
            </h2>
          </Link>

          <p className="text-base text-gray-600 leading-relaxed mb-6">
            At ANN Media Group, we specialize in offering comprehensive media solutions to enhance your brand's digital presence. From content creation to brand promotion, we provide expert guidance to ensure your message reaches the right audience.
          </p>

          <p className="text-base text-gray-600 leading-relaxed mb-6">
            Our services include digital advertising, social media campaigns, and targeted marketing to help your business grow in the digital space. Let us help you expand your reach!
          </p>

          <iframe
            className="rounded-md shadow-md"
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/NhGaej03nIQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Right Section (Facebook) */}
        <div className="border border-gray-200 shadow-lg rounded-xl p-6 lg:p-8 bg-white transition-transform transform hover:scale-105">
          <Link to="https://www.facebook.com/annmediagroup" target='_blank'>
            <h2 className="text-2xl lg:text-3xl cursor-pointer font-semibold mb-4 text-gray-800 hover:text-blue-600 transition-colors">
              Follow Us on Facebook
            </h2>
          </Link>

          <p className="text-sm lg:text-base text-gray-600 leading-relaxed mb-6">
            Stay updated with our latest news and media posts by following us on Facebook. Join our community and engage with content tailored for our audience.
          </p>

          {/* Facebook Page Embed for Larger Screens */}
          <div className="hidden lg:block">
            <div
              className="fb-page rounded-md shadow-md"
              data-href="https://www.facebook.com/annmediagroup"
              data-tabs="timeline"
              data-width="500" 
              data-height="600"
              data-small-header="false"
              data-adapt-container-width="true"
              data-hide-cover="false"
              data-show-facepile="true"
            ></div>
          </div>

          {/* Facebook Page Embed for Smaller Screens */}
          <div className="sm:block md:block lg:hidden">
            <div
              className="fb-page rounded-md shadow-md"
              data-href="https://www.facebook.com/annmediagroup"
              data-tabs="timeline"
              data-width="300" 
              data-height="400"
              data-small-header="true"  
              data-adapt-container-width="true"
              data-hide-cover="true"
              data-show-facepile="false"
            ></div>
          </div>
        </div>




        {/* Additional Sections (If needed) */}
        {/* You can add more sections here if needed, following a similar pattern */}

        <div className="border border-gray-200 shadow-lg rounded-xl p-8 bg-white transition-transform transform hover:scale-105">
          <InstagramEmbedd />
        </div>


        <div className="border border-gray-200 shadow-lg rounded-xl p-8 bg-white transition-transform transform hover:scale-105">
          <TwitterEmbed />
        </div>

      </div>
    </div>
  );
};

export default Media;
