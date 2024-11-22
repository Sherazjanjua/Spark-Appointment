import React, { useEffect, useState } from 'react';
import Jobservice from '../../services/Jobservice';
import CreateAppointments from '../Appointments/CreateAppointment'
function JobOpenings() {
    const [jobs, setJobs] = useState([]);
    const [apply,setapply] = useState(null);
    const [position_id,setposition_id] = useState();

    useEffect(()=>{
        console.log(apply);
        console.log();
        
        
    },[apply]);



    useEffect(() => {
        fetchJobs();
      }, []);
    
      const fetchJobs = async () => {
        try {
          const data = await Jobservice.getAllJobs();
          setJobs(data.data);
          console.log(data.data);
        } catch (error) {
          console.error('Error fetching jobs:', error);
        }
      };
  return (
    <>
    <div className='m-4'>
    <h1 className='mb-4 text-center font-bold text-3xl'>Job Openings</h1>
      {jobs.map((job, index) => (
        <div key={index} className='mb-4 p-4 border rounded'>
          <span>{job.id}</span>
          <h1 className='font-semibold text-xl'>{job.title}</h1>
          <div>
            <span>Type: </span>
            <span>{job.job_type}</span>
          </div>
          <div>
            <h2>Qualification: {job.qualification}</h2>
            <h2>Experience: {job.experience}</h2>
          </div>
          <div className='mt-4'>
            <h2 className='font-semibold'>Skills:</h2>
            {job.skills && (
              <div className='flex flex-wrap mt-2'>
                {job.skills.split(",").map((skill, skillIndex) => (
                  <div key={skillIndex} className='p-2'>
                    <div className='bg-gray-200 border rounded px-4 py-2 text-center'>
                      {skill.trim()}
                    </div>

                  </div>
                  
                ))}
               
              </div>
              
            )}
          </div>
          <div>          
          <button 
          className='bg-ss px-4 py-2 mt-2 text-center'
          onClick={()=>
            {
              setapply(true);
              setposition_id(job.id);
              

          }}
          >Apply Now</button>
          </div>
        </div>
      ))}
  </div> 
  {apply && <CreateAppointments positionid = {position_id}  onClose={()=>setapply(false)}/>}

  </>
)
}

export default JobOpenings