import React, { useEffect, useState } from 'react';
import JobOpenings from '../Components/Jobs/JobOpenings';
function User() {

  return (
    <div>
      <div className='flex flex-col h-full'>
        <div className='bg-ss'>
          <h1 className=' font-bold text-2xl m-4'>Careers</h1>
        </div>
        <div>
        <JobOpenings />
        </div>

      </div>
    </div>
  );
}

export default User;
