import React from 'react';
import { IoOptions } from 'react-icons/io5';
import image from '../assets/Images/logo-black.png';

function Header({ toggleSidebar }) {
 
  return (
    <div className='bg-white w-full p-4'>
      <div className='flex justify-between items-center w-full mx-auto px-4 sm:px-6'>
        {/* Left section: Logo and Icon */}
        <div className='flex items-center'>
          {/* Logo */}
          <img src={image} className='h-10 w-auto md:h-12 md:w-48 lg:h-12' alt="Logo" />
        </div>

        {/* Center section: Dashboard title */}
        <div className='absolute left-1/2 transform -translate-x-1/2'>
          <h1 className='text-lg tracking-wider sm:text-xl md:text-2xl lg:text-3xl font-sans font-semibold'>
            Admin Dashboard
          </h1>
        </div>

        {/* Right section: Options button */}
        <div>
          <IoOptions
            className='ml-4 text-cyan-400 font-bold text-2xl md:text-3xl lg:text-4xl'
            onClick={toggleSidebar}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
