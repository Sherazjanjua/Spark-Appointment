import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown, FaChevronUp, FaGraduationCap } from 'react-icons/fa';
import { FaCheckToSlot } from 'react-icons/fa6';
import { MdWatchLater } from 'react-icons/md';
import { GoDotFill } from 'react-icons/go';

function SideBar({ isVisible }) {
  const [showJobs, setShowJobs] = useState(false);
  const [showSlots, setShowSlots] = useState(false);
  const [showAppointments, setShowAppointments] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const handleSectionClick = (section) => {
    setActiveSection(section);
    if (section === 'jobs') setShowJobs(!showJobs);
    if (section === 'slots') setShowSlots(!showSlots);
    if (section === 'appointments') setShowAppointments(!showAppointments);
  };

  return (
    <div className={`flex flex-col w-72 h-screen bg-white py-4 transition-transform duration-1000 ${isVisible ? '' : '-translate-x-full'}`}>
      {/* Manage Jobs */}
      <div className="mt-10 mb-4 relative hover:text-black">
        <FaGraduationCap 
          onClick={() => handleSectionClick('jobs')}
          className={`text-gray-700 absolute left-4 top-1 text-3xl ${activeSection === 'jobs' ? 'text-blue-500' : ''}`} 
        />
        <button
          className={`flex ml-12 w-[75%] text-gray-700 py-2 px-2 hover:bg-gray-200 hover:text-black ${activeSection === 'jobs' ? 'bg-gray-200 text-black' : ''}`}
          onClick={() => handleSectionClick('jobs')}
        >
          <span>Manage Jobs</span>
        </button>
        {showJobs && (
          <div className="flex flex-col mt-2 ml-6 space-y-2 animate-slide-down">
            <div className='flex relative'>
              <Link to="/admin/jobs/create" className="py-1 ml-12 px-2 hover:text-black text-gray-700">
                Post a Job
              </Link>
              <GoDotFill className='absolute top-2.5 left-9 text-gray-700' /> 
            </div>
            <div className='flex relative'>
              <Link to="/admin/jobs/show" className="py-1 ml-12 px-2 hover:text-black text-gray-500">
                Show Jobs
              </Link>
              <GoDotFill className='absolute top-2.5 left-9 text-gray-400' /> 
            </div>
          </div>
        )}
      </div>

      {/* Manage Slots */}
      <div className="mb-4 relative hover:text-black">
        <FaCheckToSlot
          onClick={() => handleSectionClick('slots')}
          className={`text-gray-700 absolute left-4 top-2 text-2xl ${activeSection === 'slots' ? 'text-blue-500' : ''}`} 
        />
        <button
          className={`flex ml-12 w-[75%] py-2 px-2 hover:bg-gray-200 hover:text-black text-gray-700 ${activeSection === 'slots' ? 'bg-gray-200 text-black' : ''}`}
          onClick={() => handleSectionClick('slots')}
        >
          <span>Manage Slots</span>
        </button>
        {showSlots && (
          <div className="flex flex-col mt-2 ml-6 space-y-2 animate-slide-down">
            <div className='flex relative'>
              <Link to="/admin/createslot" className="py-1 ml-12 px-2 hover:text-black text-gray-500">
                Create a Slot
              </Link>
              <GoDotFill className='absolute top-2.5 left-9 text-gray-400' /> 
            </div>
            <div className='flex relative'>
              <Link to="/admin/showslots" className="py-1 ml-12 px-2 hover:text-black text-gray-500">
                Show all Slots
              </Link>
              <GoDotFill className='absolute top-2.5 left-9 text-gray-400' /> 
            </div>
          </div>
        )}
      </div>

      {/* Appointments */}
      <div className="mb-4 relative hover:text-black">
        <MdWatchLater
          onClick={() => handleSectionClick('appointments')}
          className={`text-gray-700 absolute left-4 top-2.5 text-2xl ${activeSection === 'appointments' ? 'text-blue-500' : ''}`} 
        />
        <button
          className={`flex ml-12 w-[75%] py-2 px-2 hover:bg-gray-200 hover:text-black text-gray-700 ${activeSection === 'appointments' ? 'bg-gray-200 text-black' : ''}`}
          onClick={() => handleSectionClick('appointments')}
        >
          <span>Appointments</span>
        </button>
        {showAppointments && (
          <div className="flex flex-col mt-2 ml-6 space-y-2 animate-slide-down">
            <div className='flex relative'>
              <Link to="/admin/appointments" className="py-1 ml-11 px-2 hover:text-black text-gray-500">
                Show Appointments
              </Link>
              <GoDotFill className='absolute top-2.5 left-9 text-gray-400' /> 
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SideBar;
