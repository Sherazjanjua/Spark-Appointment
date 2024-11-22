// src/App.js

import React from 'react';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div  className='' >    
      <div className='w-full bg-white   opacity-98 flex items-center justify-center'>
       
      </div>
      
      {/* Render child routes here */}
      <Outlet />

      {/* Additional content or footer can go here */}
      <div></div>    
    </div>
  );
}

export default App;
