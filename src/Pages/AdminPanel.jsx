import React, { useState } from "react";
import Header from '../Components/Header';
import SideBar from "../Components/SideBar";
import { Outlet } from 'react-router-dom';
import Dashboard from "../Components/Dashnoard";


function AdminPanel() {

  return (<>
    
    <div className="flex h-screen">
  {/* Sidebar */}
  <div className="w-[202px]">
    <SideBar />
  </div>

  {/* Main Content */}
  <div className="flex flex-col flex-1 w-[1440px] bg-gray-100">
    {/* Header */}
    <div className="">
      <Header />
    </div>

    {/* Outlet */}
    <main className="flex-1 overflow-y-auto">
      <Outlet />
    </main>
  </div>
</div>

    </>
  );
}

export default AdminPanel;
