import React from 'react';
import { CiSearch } from "react-icons/ci";
import { MdOutlineEditNotifications } from "react-icons/md";
import image from '../assets/images/logo-black.png';

function Header({ toggleSidebar }) {
  return (
    <header className="bg-white w-full flex justify-between items-center">
      <div className="flex items-center ml-[10px] mr-[15px] mt-[16px] ">
        {/* Logo */}
        <img src={image} className="h-[1121px] md:h-12 w-[202px]" alt="Logo" />

        {/* Search Bar */}
        <div className="flex items-center ml-8 w-72 h-8 rounded-lg border px-2">
          <CiSearch className="text-gray-600 text-xl" />
          <input
            type="text"
            placeholder="Search Now..."
            className="w-full bg-transparent border-none outline-none text-sm text-gray-800 placeholder-gray-500"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <MdOutlineEditNotifications className="text-2xl" />
        <div className="h-10 w-10 bg-blue-200 rounded-full"></div>
      </div>
    </header>
  );
}

export default Header;
