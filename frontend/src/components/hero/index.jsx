import React, { useState, useEffect } from 'react';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    {
      url: 'https://www.nerdwallet.com/assets/blog/wp-content/uploads/2017/09/GettyImages-693893643-medical-expense-tax-deduction-2400x1440.jpg',
      text: 'Uncompromising Care,Unmatched Expertise!',
      sub: "Get your medical needs with just a click at where you are"
    },
    {
      url: 'https://media.istockphoto.com/id/178164812/photo/african-male-doctor-examining-baby-boy.jpg?s=612x612&w=0&k=20&c=3SFly0FHKoeICCyX-MZqZWQdkFlEYdJAnMa5cAzWjJY=',
      text: 'Uncompromising Care,Unmatched Expertise!',
      sub: "Get your medical needs with just a click at where you are"
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative overflow-hidden w-full h-[500px]">
      {images.map((slide, index) => (
        <div
          key={index}
          className="absolute w-full h-full top-0 left-0 flex items-center justify-center text-white"
          style={{ opacity: currentSlide === index ? 1 : 0 }}
        >
          <img src={slide.url} alt={`Slide ${index + 1}`} className="object-cover w-full h-full" />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="absolute  w-full  text-center">
            <h1 className="text-4xl font-bold">{slide.text}</h1>
            <h2>{slide.sub}</h2>
          </div>
        </div>
      ))}
      <div className="absolute bottom-4 left-0 w-full flex justify-center">
        {images.map((_, index) => (
          <button
            key={index}
            className={`mx-1 w-3 h-3 rounded-full bg-white opacity-50 hover:opacity-100 focus:outline-none ${
              currentSlide === index ? 'opacity-100' : ''
            }`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
