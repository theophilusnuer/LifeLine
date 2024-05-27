import React, { useState } from 'react';
import pharmaData from '../rawData/pharma';

const PharmaCard = ({ image, title, description, price, addToCart }) => {
  const [isLoading, setIsLoading] = useState(false);
  const handleAddToCart = () => {
    setIsLoading(true);

    // Simulate an async operation for API call
    setTimeout(() => {
      addToCart(pharmaData);
      setIsLoading(false);
    }, 1000);
  };
  return (
    <div className='flex justify-center items-center'>
      <div className="max-w-xs rounded-xl my-2 overflow-hidden shadow-lg">
        <div className="w-full h-48 bg-[#E0DEDA]">
          <img className="w-full h-full object-cover object-center" src={image} alt={title} />
        </div>
        <div className="px-4">
          <div className="font-bold text-lg mb-2">{title}</div>
          <p className="text-gray-700 text-sm">{description}</p>
          <p className="text-gray-900 text-md font-bold mt-1">GHC {price}</p>
        </div>
        <div className="px-4 py-2 flex justify-between">
          <button
            onClick={handleAddToCart}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-md text-xs"
            disabled={isLoading} // Disable the button when loading
          >
            {isLoading ? (
              <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
            ) : (
              'Add to Cart'
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PharmaCard;
