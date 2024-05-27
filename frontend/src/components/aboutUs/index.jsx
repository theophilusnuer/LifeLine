import React from 'react';

const AboutUs = () => {
  return (
    <section id='about'>
      <h1 className="text-center font-bold text-2xl">Who are We?</h1>
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 ">
        <div className="bg-white shadow-lg shadow-blue-500 rounded-xl p-6 mx-auto w-full max-w-xs md:max-w-none transform transition-transform duration-300 hover:scale-105 ">
          <h2 className="text-xl font-bold mb-2">About Us</h2>
          <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent purus lorem, luctus id mi at, convallis dapibus nunc. Nunc scelerisque, mi id lacinia tincidunt, ipsum eros viverra libero, sit amet sodales massa enim eget dolor. Curabitur euismod molestie rutrum. Quisque ultricies convallis neque ac fermentum. Donec et lectus dui. </p>
        </div>
        <div className="bg-white shadow-lg shadow-blue-500 rounded-xl p-6 mx-auto w-full max-w-xs md:max-w-none transform transition-transform duration-300 hover:scale-105">
          <h2 className="text-xl font-bold mb-2">Our Mission</h2>
          <p className="text-gray-700">Our mission is to provide exceptional service to give an exceptional information on available hospital service delivery in and around the country</p>
        </div>
        <div className="bg-white shadow-lg shadow-blue-500 rounded-xl p-6 mx-auto w-full max-w-xs md:max-w-none transform transition-transform duration-300 hover:scale-105">
          <h2 className="text-xl font-bold mb-2">Our Vision</h2>
          <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent purus lorem, luctus id mi at, convallis dapibus nunc. Nunc scelerisque, mi id lacinia tincidunt, ipsum eros viverra libero, sit amet sodales massa enim eget dolor.</p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
