import React from 'react';
import OverviewChart from './OverviewChart';
import ApplicationAnalysis from "./ApplicationAnalysis";
import apps from '../assets/Images/apps.png';
import emp from '../assets/Images/emp.png';
import hires from '../assets/Images/hires.png';
import rej from '../assets/Images/rej.png';
import cardbg from '../assets/Images/cardbg.png';
import ShowJobs from './Jobs/ShowJobs'
import filter from '../assets/Images/filter.svg';




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
    <div className='ml-[36px]'>
        <div >
        <h1  className="w-[144px] h-[37px] mt-[25px] mx-[163px] mb-[1px] ml-[0px] font-open-sans text-[27px] font-semibold leading-none tracking-normal text-left text-black"> Dashboard </h1>
        <span className="w-[200px] h-[19px] mt-[1px] mx-[105px] mb-[16px] ml-[0px] font-open-sans text-[14px] font-normal leading-none tracking-normal text-left text-gray-400">
         See all your Performance Here
        </span>
        </div>


         
        
        <div className='flex w-full'>
  {/* Card 1 */}
  <div class="w-[259px] h-[129px] mt-[16px] mr-[45px] mb-[19px] p-[23px_19px_21px_17px] rounded-[17px] shadow-[0_4px_10px_0_rgba(0,0,0,0.1)]"
             style={{
              backgroundImage: `url(${cardbg})`,
              background: "cover",
              backgroundPosition: "center",
              height: "129px",
             
            }}>
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
  <div class="w-[259px] h-[129px] mt-[16px] mr-[45px] mb-[19px] p-[20px_19.5px_21px_17px] rounded-[17px] shadow-[0_4px_10px_0_rgba(0,0,0,0.1)]"
  style={{
              backgroundImage: `url(${cardbg})`,
              background: "cover",
              backgroundPosition: "center",
              height: "129px",
             
            }}>           <div className='flex justify-between items-center'>
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
         <div class="w-[259px] h-[129px] mt-[16px] mr-[45px] mb-[19px] p-[17px_19px_21px_17px] rounded-[17px] shadow-[0_4px_10px_0_rgba(0,0,0,0.1)]"
         style={{
                backgroundImage: `url(${cardbg})`,
                background: "cover",
                backgroundPosition: "center",
                height: "129px",
               
              }}>          <div className='flex justify-between items-center'>
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
  <div class="w-[259px] h-[129px] mt-[16px] mb-[19px] mr-[45px] p-[17px_19px_21px_17px] rounded-[17px] shadow-[0_4px_10px_0_rgba(0,0,0,0.1)]"
  style={{
    backgroundImage: `url(${cardbg})`,
    background: "cover",
    backgroundPosition: "center",
    height: "129px",
    
   
  }}
  >
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



    <div className='flex mt-[24px]'>    
      <div className="w-[822px]  h-[398px]  mr-[14px] mb-[39px] ">
         <OverviewChart
           title="Overview"
           avg="150"
           percentage="13.4%"
           labels={labels}
           dataSets={dataSets}

           
          />
     </div>
    <div class="w-[338px] h-[412px]  mr-0 mb-[30px] ml-[14px] p-[0px_12px_40px_10px]">
      <ApplicationAnalysis />
    </div>
    
</div>
<div className='flex' >
      <div class="w-[819px] h-[370px] flex-grow-0 mt-[20px] mr-[17px] mb-[18px] ml-0 p-[19px_16px_17px_15px] rounded-[25px] shadow-[0_0_20px_0_rgba(27,62,143,0.06)] border-[0_#fff_solid] bg-white">
        <h1 className="w-[38px] h-[25px] flex-grow-0 mt-0 mr-[169px] mb-[6px] ml-[24px] text-[18px] font-opensans font-bold text-[#262626]">Jobs</h1>
        <div className='flex items-center justify-between'>
          <p className="w-[207px] h-[22px] flex-grow-0 mt-[9px] mr-[2px] mb-2 ml-[22px] text-[16px] font-normal text-[#7b7a7a]">Jobs posted by HR</p>
           <div className='flex justify-center items-center'>
           <img src={filter} alt="" className='bg-blue-500 px-2 py-2 rounded-lg '/> 

          
          <input type="text" placeholder='Search for the Post' className="w-[271px] h-[32px] flex-grow-0 mt-[9px] mr-0  mb-2 ml-[11px] p-[9px_112px_9px_8px] rounded-[5px] border border-gray-300 border-[1px_solid_#e0e4e9] bg-[#fafdfd]" />
          </div>
        </div>
       
        <ShowJobs />
        </div>
        <div className="w-[319px] h-[370px] flex-grow-0 mt-[22px] mr-[15px] mb-[17px] ml-[18px] p-[15px_15px_40px_18px] rounded-[25px] shadow-[0_0_20px_0_rgba(27,62,143,0.06)] border-[0px] border-[#fff] bg-[#fff]">
         <h1 class="w-[190px] h-[24px] flex-grow-0 mr-[29px] mb-[34px] font-poppins text-[16px] font-bold leading-normal text-left text-[#000]">Recent Job Applications</h1>
         
        </div>
        </div>



    

    </div>
  )
}

export default Dashnoard