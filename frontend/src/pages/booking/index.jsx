import React, { useEffect, useRef } from 'react';
import { Navigate } from "react-router-dom";
import { FaTimes } from 'react-icons/fa';

const Booking = ({ isOpen, onClose }) => {
    const modalRef = useRef(null);
    
    const handleClose = () => {
        onClose();
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const user = sessionStorage.getItem("userToken");

    if (!user) {
        return <Navigate to="/login" replace={true} />;
    }

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4 text-center">
                <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>

                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                <div ref={modalRef} className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                            <div className="mt-3 text-center sm:mt-0 sm:text-left">
                                <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                                    Book Appointment
                                </h3>
                                <div className="mt-2">
                                    <form>
                                        <div className="mb-5">
                                            <label htmlFor="name" className="mb-3 block text-base font-medium text-black">
                                                Full Name
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                id="name"
                                                placeholder="Full Name"
                                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-blue-500 focus:shadow-md"
                                            />
                                        </div>
                                        <div className="mb-5">
                                            <label htmlFor="phone" className="mb-3 block text-base font-medium text-black">
                                                Phone Number
                                            </label>
                                            <input
                                                type="text"
                                                name="phone"
                                                id="phone"
                                                placeholder="Enter your phone number"
                                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-blue-500 focus:shadow-md"
                                            />
                                        </div>
                                        <div className="mb-5">
                                            <label htmlFor="email" className="mb-3 block text-base font-medium text-black">
                                                Email Address
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                placeholder="Enter your email"
                                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-blue-500 focus:shadow-md"
                                            />
                                        </div>
                                        <div className="-mx-3 flex flex-wrap">
                                            <div className="w-full px-3 sm:w-1/2">
                                                <div className="mb-5">
                                                    <label htmlFor="date" className="mb-3 block text-base font-medium text-black">
                                                        Date
                                                    </label>
                                                    <input
                                                        type="date"
                                                        name="date"
                                                        id="date"
                                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-blue-500 focus:shadow-md"
                                                    />
                                                </div>
                                            </div>
                                            <div className="w-full px-3 sm:w-1/2">
                                                <div className="mb-5">
                                                    <label htmlFor="time" className="mb-3 block text-base font-medium text-black">
                                                        Time
                                                    </label>
                                                    <input
                                                        type="time"
                                                        name="time"
                                                        id="time"
                                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-blue-500 focus:shadow-md"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-5">
                                            <label htmlFor="category" className="mb-3 block text-base font-medium text-black">
                                                Category
                                            </label>
                                            <select
                                                name="category"
                                                id="category"
                                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-blue-500 focus:shadow-md"
                                            >
                                                <option value="surgery">Surgery</option>
                                                <option value="laboratory">Laboratory</option>
                                            </select>
                                        </div>
                                        <div>
                                            <button
                                                type="submit"
                                                className="hover:shadow-form w-full rounded-md bg-blue-500 py-3 px-8 text-center text-base font-semibold text-white outline-none"
                                            >
                                                Book Appointment
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute top-0 right-0 m-4">
                    <button
                        type="button"
                        onClick={handleClose}
                        className="text-gray-700 hover:text-gray-900 focus:outline-none"
                    >
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;
