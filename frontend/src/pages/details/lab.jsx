import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import labData from '../../components/rawData/lab';
import Booking from '../booking';

const LabDetail = () => {
  const { id } = useParams();
  const item = labData.find(data => data.id === parseInt(id));

  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="relative w-full h-64 bg-[#E0DEDA]">
          <img className="w-full h-full object-cover object-center" src={item.image} alt={item.name} />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white text-3xl font-bold">{item.name}</h1>
          </div>
        </div>
        <div className="max-w-4xl mx-auto p-4 py-8 border-2 my-4 rounded-xl border-blue-500">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div>
              <p className="text-gray-700 text-lg mb-4"><span className="font-semibold">Location:</span> {item.location}</p>
              <p className="text-gray-700 text-lg mb-4"><span className="font-semibold">Working Hours:</span> {item.hours}</p>
              <p className="text-gray-700 text-lg mb-4"><span className="font-semibold">Price:</span> {item.price}</p>
              <p className="text-gray-700 text-lg mb-4"><span className="font-semibold">Contact:</span> {item.contact}</p>
            </div>
            <div className="border-l-2 pl-4">
              <p className='font-semibold text-2xl mb-4'>Reviews</p>
              <div className="flex items-center mb-4 hover:bg-gray-100 transition rounded p-2">
                <img src="https://via.placeholder.com/40" alt="Reviewer 1" className="w-10 h-10 rounded-full mr-4" />
                <p className="text-gray-700 text-lg"><span className="font-semibold"></span> {item.review1}</p>
              </div>
              <div className="flex items-center mb-4 hover:bg-gray-100 transition rounded p-2">
                <img src="https://via.placeholder.com/40" alt="Reviewer 2" className="w-10 h-10 rounded-full mr-4" />
                <p className="text-gray-700 text-lg"><span className="font-semibold"></span> {item.review2}</p>
              </div>
              <div className="flex items-center mb-4 hover:bg-gray-100 transition rounded p-2">
                <img src="https://via.placeholder.com/40" alt="Reviewer 3" className="w-10 h-10 rounded-full mr-4" />
                <p className="text-gray-700 text-lg"><span className="font-semibold"></span> {item.review3}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 text-sm rounded-md hover:bg-blue-700 transition"
              onClick={openModal}
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
      <Footer />
      <Booking isOpen={isModalVisible} onClose={closeModal} />
    </div>
  );
};

export default LabDetail;
