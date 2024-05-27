
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id='footer' className="bg-gradient-to-t from-blue-500 to-blue-300 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          <div className="flex flex-col items-center">
            <h3 className="text-lg font-bold mb-2">LifeLine</h3>
            <p className="text-center">Easy access to Healthcare!</p>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-lg font-bold mb-2">Location</h3>
            <p className="text-center">Nii Adjei Street 47</p>
            <p className="text-center">Accra-Ghana</p>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-lg font-bold mb-2">Contact</h3>
            <p className="text-center">+233 244741470</p>
            <p className="text-center">info@lifeline.com</p>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-lg font-bold mb-2">Socials</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com" aria-label="Facebook" className="text-2xl hover:text-gray-300">
                <FaFacebookF />
              </a>
              <a href="https://www.twitter.com" aria-label="Twitter" className="text-2xl hover:text-gray-300">
                <FaTwitter />
              </a>
              <a href="https://www.instagram.com" aria-label="Instagram" className="text-2xl hover:text-gray-300">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} LifeLine. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
