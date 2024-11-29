import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GoDotFill } from 'react-icons/go';
import image from '../assets/images/logo-black.png';
import dashboard from '../assets/images/dashboard.svg';
import jobs from '../assets/images/jobs.svg';
import slots from '../assets/images/slots.svg';
import appoint from '../assets/images/appoint.svg';
import setting from '../assets/images/setting.svg';

function SideBar({ isVisible }) {
  const [showJobs, setShowJobs] = useState(false);
  const [showSlots, setShowSlots] = useState(false);
  const [showAppointments, setShowAppointments] = useState(false);

  const handleSectionClick = (section) => {
    if (section === 'jobs') setShowJobs(!showJobs);
    if (section === 'slots') setShowSlots(!showSlots);
    if (section === 'appointments') setShowAppointments(!showAppointments);
  };

  return (
    <div className="w-[202px] p-4 bg-white">
      <div className="mb-12">
        <img src={image} alt="Logo" className="w-full" />
      </div>

      <div className="flex items-center mt-16 mb-6">
        <img src={dashboard} alt="Dashboard" className="w-5 h-5" />
        <Link to="/admin" className="ml-4 text-sm text-black">
          Dashboard
        </Link>
      </div>

      {/* Manage Jobs */}
      <div className="flex flex-col mt-10">
        <div className="flex items-center cursor-pointer" onClick={() => handleSectionClick('jobs')}>
          <img src={jobs} alt="Jobs" className="w-5 h-5" />
          <span className="ml-4 text-sm text-black">Manage Jobs</span>
        </div>
        {showJobs && (
          <div className="ml-9 mt-6 space-y-2">
            <Link to="/admin/jobs/create" className="flex items-center text-sm text-black">
              <GoDotFill className="mr-2" /> Post a Job
            </Link>
            <Link to="/admin/jobs/show" className="flex items-center text-sm text-black">
              <GoDotFill className="mr-2" /> Show Jobs
            </Link>
          </div>
        )}
      </div>

      {/* Manage Slots */}
      <div className="flex flex-col mt-10">
        <div className="flex items-center cursor-pointer" onClick={() => handleSectionClick('slots')}>
          <img src={slots} alt="Slots" className="w-5 h-5" />
          <span className="ml-4 text-sm text-black">Manage Slots</span>
        </div>
        {showSlots && (
          <div className="ml-9 mt-6 space-y-2">
            <Link to="/admin/createslot" className="flex items-center text-sm text-black">
              <GoDotFill className="mr-2" /> Create a Slot
            </Link>
            <Link to="/admin/showslots" className="flex items-center text-sm text-black">
              <GoDotFill className="mr-2" /> Show all Slots
            </Link>
          </div>
        )}
      </div>

      {/* Appointments */}
      <div className="flex flex-col mt-10">
        <div className="flex items-center cursor-pointer" onClick={() => handleSectionClick('appointments')}>
          <img src={appoint} alt="Appointments" className="w-5 h-5" />
          <span className="ml-4 text-sm text-black">Appointments</span>
        </div>
        {showAppointments && (
          <div className="ml-9 mt-6 space-y-2">
            <Link to="/admin/appointments" className="flex items-center justify-center text-sm text-black">
              <GoDotFill className="mr-2" /> Show Appointments
            </Link>
          </div>
        )}
      </div>

      {/* Settings */}
      <div className="flex items-center mt-10">
        <img src={setting} alt="Settings" className="w-5 h-5" />
        <span className="ml-4 text-sm text-black">Settings</span>
      </div>
    </div>
  );
}

export default SideBar;
