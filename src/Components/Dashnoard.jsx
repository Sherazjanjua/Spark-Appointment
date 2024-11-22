import React from 'react';
import OverviewChart from './OverviewChart';
import ApplicationAnalysis from "./ApplicationAnalysis";
import apps from '../assets/Images/apps.png';
import emp from '../assets/Images/emp.png';
import hires from '../assets/Images/hires.png';
import rej from '../assets/Images/rej.png';




function Dashnoard() {
    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const dataSets = [
      {
        label: 'Applications',
        data: [30, 50, 40, 35, 50, 70, 90, 60, 40, 50, 30, 40],
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 1,
        barPercentage: 1.6,
      },
      {
        label: 'Interviews',
        data: [20, 40, 30, 25, 40, 60, 53.3, 50, 30, 40, 20, 30],
        backgroundColor: 'rgba(156, 163, 175, 0.5)',
        borderColor: 'rgba(156, 163, 175, 1)',
        // borderWidth: 1,
        // barPercentage: 1.6,
      },
    ];
  return (
    <div className='w-full mt-[25px] mx-[33px]'>
        <div>
           <h1 className='text-3xl font-semibold tracking-wide'> Dashboard </h1>
           <p className='text-gray-400'>See all your performance here</p>
        </div>
        <div className='flex gap-2 w-full'>
  {/* Card 1 */}
        <div className='w-[25%] bg-white shadow-lg rounded-lg p-4 m-4 space-y-2'>
        <div className='flex justify-between items-center'>
        <p className='font-medium text-gray-500'>Total Employees</p>
        <img src={emp} alt="" />
        </div>
        <h1 className='text-4xl font-bold'>700</h1>
         <div className='flex justify-between items-center text-sm text-gray-500'>
           <p>Since last week</p>
           <p className='text-blue-400 font-medium'>40,75 % ↑</p>
         </div>
       </div>

  {/* Card 2 */}
         <div className='w-[25%] bg-white shadow-lg rounded-lg p-4 m-4 space-y-2'>
           <div className='flex justify-between items-center'>
             <p className='font-medium text-gray-500'>Total Applicants</p>

            <img src={apps} alt="" className='Vector-3' />  
          </div>
           <h1 className='text-4xl font-bold'>900</h1>
           <div className='flex justify-between items-center text-sm text-gray-500'>
             <p>Since last week</p>
             <p className='text-blue-400 font-medium'>40,75 % ↑</p>
           </div>
         </div>
       
         {/* Card 3 */}
         <div className='w-[25%] bg-white shadow-lg rounded-lg p-4 m-4 space-y-2'>
          <div className='flex justify-between items-center'>
            <p className='font-medium text-gray-500'>New Hires</p>
            <img src={hires} alt="" />

          </div>
          <h1 className='text-4xl font-bold'>30</h1>
          <div className='flex justify-between items-center text-sm text-gray-500'>
            <p>Since last week</p>
            <p className='text-blue-400 font-medium'>40,75 % ↑</p>
          </div>
        </div>

  {/* Card 4 */}
  <div className='w-[25%] bg-white shadow-lg rounded-lg p-4 m-4 space-y-2'>
    <div className='flex justify-between items-center'>
      <p className='font-medium text-gray-500'>Rejected Applications</p>
      <img src=
      
      {rej} alt="" />
    </div>
    <h1 className='text-4xl font-bold'>60</h1>
    <div className='flex justify-between items-center text-sm text-gray-500'>
      <p>Since last week</p>
      <p className='text-red-400 font-medium'>40,75 % ↓</p>
    </div>
  </div>
</div>

<div className='flex w-full ml-[-12px]' >    
<div className="w-[70%] ">
      <OverviewChart
        title="Overview"
        avg="150"
        percentage="13.4%"
        labels={labels}
        dataSets={dataSets}
      />
    </div>
    <div className="w-[30%] h-56">
      <ApplicationAnalysis />
    </div>
    
</div>
    

    </div>
  )
}

export default Dashnoard