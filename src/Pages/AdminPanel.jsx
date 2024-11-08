import React, { useState } from "react";
import Header from '../Components/Header';
import SideBar from "../Components/SideBar";
import { Outlet } from 'react-router-dom';

function AdminPanel() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  return (
    <>
      <div>
        <Header toggleSidebar={() => setIsSidebarVisible(!isSidebarVisible)} />
      </div>
      <div className="flex md:flex-row w-full justify-start  h-screen">
        <div className="w-full md:w-[20%]">
          <SideBar isVisible={isSidebarVisible} setisVisible={ setIsSidebarVisible} />
        </div>

        {/* Main Content */}
        <div className="w-full md:w-[80%] p-4  overflow-auto">
          <Outlet />
        </div>
      </div>
    </>
  );
}
export default AdminPanel;