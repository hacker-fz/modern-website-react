import React, { useEffect, useState } from 'react';
import { loading } from '../assets';

const Generating = ({ className }) => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setRotation((prev) => prev + window.scrollY * 0.05); 
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`flex items-center h-[3.5rem] text-n-1 px-6 bg-n-8/80 backdrop-blur-sm rounded-full ${
        className || ''
      } text-base`}
    >
      <img
        src={loading}
        alt="loading"
        className="w-5 h-5 mr-4"
        style={{ transform: `rotate(${rotation}deg)` }}
      />
      AI is generating...
    </div>
  );
};

export default Generating;
