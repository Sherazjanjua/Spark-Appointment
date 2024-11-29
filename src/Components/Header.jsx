import React from 'react';
import search from '../assets/images/search.svg';
import notnprfl from '../assets/images/notnprfl.svg';

function Header({ toggleSidebar }) {
  return (
  <>
    <div className='flex w-full justify-between'>

     <div className="w-[372px] h-[42px] m-[15px_0px_25px_35px] p-[12px_246px_11px_9px] rounded-[7px] border border-[#f0f0f0] bg-white flex items-center">
       <div className="w-[18px] h-[18px] mr-[10px]">
        <img src={search} alt="Search Icon" />
       </div>
  
         <input 
            type="text" 
            placeholder="Search now..." 
            className="w-full bg-transparent border-none outline-none text-sm text-black placeholder-black"
         />
      </div>
      <div className='mt-[15px] mr-[40px]'>
        <img src={notnprfl} alt="" className='w-[93px] h-[50px]' />
      </div>
    </div>


    
  </>

  );
}

export default Header;
