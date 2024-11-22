import React, { useState } from "react";
import Header from '../Components/Header';
import SideBar from "../Components/SideBar";
import { Outlet } from 'react-router-dom';
import Dashboard from "../Components/Dashnoard";


function AdminPanel() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <Header toggleSidebar={() => setIsSidebarVisible(!isSidebarVisible)} />

      {/* Content */}
      <div className="flex h-full">
        {/* Sidebar */}
        <SideBar isVisible={isSidebarVisible} toggleVisibility={setIsSidebarVisible} />

        {/* Main Content */}
        <main className="w-full md:w-[82%] p-4 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminPanel;
