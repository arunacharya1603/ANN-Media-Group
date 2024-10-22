import React from 'react'
import { IoLogoYoutube } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Digital = () => {
    return (
        <div className="bg-white min-h-screen">

            {/* Scrolling Text */}
            <div className="my-8  marquee-wrapper z-0 pb-4">
                <p className="text-xl font-semibold text-red-900 animate-marquee whitespace-nowrap gap-16 flex justify-between">
                    <span>Contact for Brand Advertisement and Marketing</span>
                    <span>Be the face of your brand</span>
                    <span>Get the best marketing services</span>
                    <span>+91 1234567890</span>
                    <span>Email: <Link to="mailto:annmedia01@gmail.com" className="underline hover:text-red-400">info@yourdomain.com</Link></span>
                </p>
            </div>

            {/* Header Section */}
            <h1 className="text-center lg:text-4xl md:text-3xl text-3xl font-extrabold mt-24 lg:p-0 pl-5 pr-5 text-gray-800 leading-tight tracking-wide">
                ANNOUNCING OUR DIGITAL MARKETING SERVICES
            </h1>



            {/* Main Content Section */}
            <div className="flex items-start justify-center py-12">
                <div className="flex flex-col lg:flex-row justify-between p-6 w-full max-w-6xl">
                    {/* Left Section */}
                    <div className="border border-gray-200 shadow-lg lg:rounded-tl-lg lg:rounded-bl-lg flex flex-col justify-center items-start p-8 w-full lg:w-1/2 bg-white">
                        <h2 className="lg:text-2xl text-xl font-semibold hover:cursor-pointer mb-4">
                            <span className="inline-block hover:scale-110 hover:text-orange-500 transition-transform duration-300">A</span>
                            <span className="inline-block hover:scale-105 hover:text-gray-200 transition-transform duration-300">N</span>
                            <span className="inline-block hover:scale-105 hover:text-green-800 transition-transform duration-300">N</span>
                            <span className="inline-block hover:scale-110 hover:text-red-700 transition-transform duration-300 pl-2"> M</span>
                            <span className="inline-block hover:scale-105 transition-transform duration-300">e</span>
                            <span className="inline-block hover:scale-105 transition-transform duration-300">d</span>
                            <span className="inline-block hover:scale-105 transition-transform duration-300">i</span>
                            <span className="inline-block hover:scale-105 transition-transform duration-300">a</span>
                            <span className="inline-block hover:scale-110 hover:text-red-700 transition-transform duration-300 pl-2">G</span>
                            <span className="inline-block hover:scale-105 transition-transform duration-300">r</span>
                            <span className="inline-block hover:scale-105 transition-transform duration-300">o</span>
                            <span className="inline-block hover:scale-105 transition-transform duration-300">u</span>
                            <span className="inline-block hover:scale-105 transition-transform duration-300">p</span>
                        </h2>

                        <h1 className="lg:text-4xl text-3xl font-bold mb-6 text-gray-900 leading-tight font-heading-style">
                            A leading digital media company for Advertising and Marketing.
                        </h1>

                        <p className="mb-8 text-lg text-gray-600 leading-relaxed font-heading-style">
                            We are here to promote your business and help you grow. We provide the best digital marketing services to help you reach your target audience effectively.
                        </p>

                        <div className="flex flex-row justify-center align-middle space-x-6">
                            <Link to="https://www.youtube.com/c/ANNMediaGroup" target='_blank' className="hover:scale-110 transition-transform duration-300">
                                <IoLogoYoutube className="text-4xl text-red-500" />
                            </Link>
                            <Link to="https://www.facebook.com/annmediagroup" target='_blank' className="hover:scale-110 transition-transform duration-300">
                                <FaFacebookSquare className="text-4xl text-blue-600" />
                            </Link>
                            <Link to="https://x.com/AnnMediaGroup" target='_blank' className="hover:scale-110 transition-transform duration-300">
                                <BsTwitterX className="text-4xl text-black" />
                            </Link>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="bg-gray-100 w-full lg:w-1/2 flex items-center justify-center lg:rounded-tr-lg lg:rounded-br-lg overflow-hidden shadow-lg">
                        <img
                            src="src/assets/banner.jpg"
                            alt="Digital Marketing Banner"
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Digital;
