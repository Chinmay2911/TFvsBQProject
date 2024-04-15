'use client'
import React, { useState } from 'react';

interface ImageTextSectionProps {
  image: string;
  text: string;
  showHeader?: boolean;
}

const ImageTextSection: React.FC<ImageTextSectionProps> = ({ image, text, showHeader = true }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <section className="relative" >
      {/* Illustration behind image and text */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1" aria-hidden="true">
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-02">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-02)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Conditionally render the header */}
        {showHeader && (
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4" data-aos="zoom-y-out">Tensorflow vs Big Query <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Results</span></h2>
            <p className="text-xl text-gray-600" data-aos="zoom-y-out">Discover our team's analysis comparing the performance, scalability, and cost-effectiveness of TensorFlow and Google BigQuery for superior data solutions.</p>
          </div>
        )}

        {/* Image and text content */}
        <div className="pb-12 md:pb-20" data-aos="zoom-y-out">
          {/* Image and text */}
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
            <div className="md:w-1/2 p-4">
              <img src={image} alt="Image" className="w-full h-auto md:w-auto cursor-pointer" onClick={openModal} />
            </div>
            <div className="md:w-1/2 p-4">
              <p>{text}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50" onClick={closeModal} data-aos="zoom-y-out">
          <div className="relative max-w-3xl mx-auto">
            <img src={image} alt="Image" className="w-full h-auto" />
          </div>
        </div>
      )}
    </section>
  );
};

export default ImageTextSection;
