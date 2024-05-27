import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { NavHashLink as Link } from 'react-router-hash-link';



const Navbar = ({ cartItemsCount, onSearch }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');


  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    onSearch(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      onSearch(searchQuery);
    }
  };

  
  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-blue-500">LifeLine</a>
          </div>
          <div className="hidden md:flex flex-grow items-center justify-center space-x-4">
           <Link to='/#'> 
           <p className="text-black hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Home</p>
           </Link>
            <Link to='/#about'>
            <p className="text-black hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">About Us</p>
            </Link>
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
                className="text-black hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium inline-flex items-center"
              >
                Services
                <svg className="ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {isDropdownOpen && (
                <div
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                  className="origin-top-right absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10"
                >
                  <div className="py-1">
                    <a href="/pharma" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Pharmaceuticals</a>
                    <a href="/lab" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Laboratory services</a>
                    <a href="/surgical" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Surgical services</a>
                  </div>
                </div>
              )}
            </div>
            <Link to="/#footer">
            <p className="text-black hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Contact Us</p>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:flex">
              <input
                type="text"
                placeholder="Search..."
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-300"
              />
            </div>
           <Link to="/cart">
           <div className="relative">
              <FaShoppingCart className="text-gray-600 text-2xl" />
              <span className="absolute -top-1 -right-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">{cartItemsCount}</span>
            </div>
           </Link>
            <Link to='/login'>
            <button className="text-gray-600 border border-blue-500 hover:text-white hover:bg-blue-700  py-1 px-4 rounded">Sign In</button>
            </Link>
            <Link to='/register'>
            <button className="bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-700 hidden md:block">Register</button>
            </Link>
            <button className="md:hidden text-gray-600 hover:text-gray-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <AiOutlineClose className="text-2xl" /> : <AiOutlineMenu className="text-2xl" />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="/about" className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">About Us</a>
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="text-gray-600 hover:text-gray-900 block w-full text-left px-3 py-2 rounded-md text-base font-medium"
              >
                Services
                <svg className="ml-1 h-5 w-5 inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="mt-2 space-y-1">
                  <a href="/pharma" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Pharmceuticals</a>
                  <a href="/lab" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Laboratory services</a>
                  <a href="/surgical" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Surgical services</a>
                </div>
              )}
            </div>
            <a href="/footer" className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Contact Us</a>
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              onKeyDown={handleKeyDown}
              placeholder="Search..."
              className="mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 block w-full"
            />
            <Link to='/login'>
            <button className="mt-2 text-gray-600 hover:text-gray-900 block w-full text-left px-3 py-2 rounded-md text-base font-medium">Sign In</button>
            </Link>
            <Link to='/register'>
            <button className="mt-2 bg-blue-500 text-white block w-full text-left px-3 py-2 rounded-md hover:bg-blue-700">Register</button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
