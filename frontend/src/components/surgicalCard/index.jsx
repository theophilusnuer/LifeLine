import React from 'react';
import { Link } from 'react-router-dom';

const SurgicalCard = ({ id, image, name, location, hours, price }) => {
  return (
    <div className='flex justify-center items-center'>
      <div className="max-w-xs rounded-xl my-2 overflow-hidden shadow-lg">
        <div className="w-full h-48 bg-[#E0DEDA]">
          <img className="w-full h-full object-cover object-center" src={image} alt={name} />
        </div>
        <div className="px-4">
          <div className="font-semibold text-lg mb-2 ">{name}</div>
          <p className='font-semibold'>Location:</p>
          <p className="text-gray-700 text-sm">{location}</p>
          <p className='font-semibold'>Working Hours:</p>
          <p className="text-gray-700 text-sm">{hours}</p>
        </div>
        <div className="px-4 py-2 flex justify-between">
          <Link to={`/surgical/${id}`}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-md text-xs">
              Read more
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SurgicalCard;
