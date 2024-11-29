import React, { useEffect, useState } from 'react';
import Jobservice from '../../services/Jobservice';
import JobDetails from './JobDetails';
import JobEditForm from './JobEditForm';
import ReactPaginate from 'react-paginate';
import edit from '../../assets/images/ep_edit.svg';
import show from '../../assets/images/show.svg';
import deleteicon from '../../assets/images/delete.svg';

const JobTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Control modal visibility
  const [jobs, setJobs] = useState([]);
  const [selectedJobId, setSelectedJobId] = useState(null);
  const [editJobId, setEditJobId] = useState(null);
  const [currentPage,setCurrentPage] = useState(0);
  const itemsPerPage = 3;



  useEffect(() => {
    fetchJobs();
  }, []);
  const start = currentPage * itemsPerPage;
  const end = start + itemsPerPage;
  const itemToDisplay = jobs.slice(start, end);

  const handlePageClick = (selected) => {
    setCurrentPage(selected.selected);
  };

  const fetchJobs = async () => {
    try {
      const data = await Jobservice.getAllJobs();
      setJobs(data.data);
      console.log(data.data);
      
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this job?')) {
      try {
        await Jobservice.deleteJob(id);
        fetchJobs(); 
      } catch (error) {
        console.error('Error deleting job:', error);
      }
    }
  };

  const handleJobDetails = (id) => {
    setSelectedJobId(id); 
  };

  return (
    <div className='flex flex-col justify-center items-center'>
      {/* <div>
        <h1 className="w-[38px] h-[25px] flex-grow-0 mt-0 mr-[169px] mb-[6px] ml-[24px] text-[18px] font-opensans font-bold text-[#262626]">Jobs</h1>
        <div className='flex justify-between'>
          <p className="w-[207px] h-[22px] flex-grow-0 mt-[9px] mr-[2px] mb-[28px] ml-[22px] text-[16px] font-normal text-[#7b7a7a]">Jobs posted by HR</p>
          {/* <div class="w-[33px] h-[32px] flex-grow-0 mt-[7px] mr-[11px] mb-[33px] ml-[21px] p-[8px_8px_9px_9px] rounded-[3px] bg-[#18ade4]">
          // {/* <img src={search} alt="" className='bg-black'/> */}

          {/* </div>  */}
          {/* <input type="text" placeholder='Search for the Post' className="w-[191px] h-[32px] flex-grow-0 mt-[8px] mr-0 mb-[33px] ml-[11px] p-[9px_112px_9px_8px] rounded-[5px] border border-gray-300 border-[1px_solid_#e0e4e9] bg-[#fafdfd]" /> */}
        {/* </div> */}
      {/* </div> */} 
      <table className="w-[788px] rounded-xl overflow-hidden">
  <thead className="bg-[rgba(24,173,228,0.25)]">
    <tr className="h-[48px] flex-grow-0 mt-[28px] mr-0 rounded-xl mb-[23px] ml-0 p-[13px_74px_13px_23px]">
      <th className="px-4 py-2 text-left">Title</th>
      <th className="px-4 py-2 text-left">Job Type</th>
      <th className="px-4 py-2 text-left">Post Date</th>
      <th className="px-4 py-2 text-left">Actions</th>
    </tr>
  </thead>
        <tbody>
          {itemToDisplay.map((job) => (
            <tr key={job.id} className="border-b">
              <td className="px-4 py-2">{job.title}</td>
              <td className="px-4 py-2">{job.job_type}</td>
              <td className="px-4 py-2">{job.post_date}</td>
              <td className="px-4 py-2  flex space-x-3">
              <button
  className="flex items-center justify-center bg-white border border-gray-300 text-white px-2 py-2 rounded-lg"
  onClick={() => {
    setEditJobId(job.id);
    setIsModalOpen(true);
  }}
>
  <img src={edit} alt="Edit Icon" className="mt-[1px]" />
</button>
                <button
  className="flex items-center justify-center bg-white border border-gray-300 text-white px-2 py-2 rounded-lg"
  onClick={() => {
                    handleJobDetails(job.id);
                    setIsModalOpen(true);
                   }}
                
                >
  <img src={show} alt="Edit Icon" className="mt-[1px]" />
  </button>
                

                <button
  className="flex items-center justify-center bg-white border border-gray-300 text-white px-2 py-2 rounded-lg"
  onClick={() =>{
                   handleDelete(job.id)
                  }}
                    
                >
  <img src={deleteicon} alt="Edit Icon" className="mt-[1px]" />
  </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 w-full">
          <ReactPaginate
            previousLabel={'<Prev'}
            nextLabel={'Next>'}
            breakLabel={'...'}
            pageCount={Math.ceil(jobs.length / itemsPerPage)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={1}
            onPageChange={handlePageClick}
            containerClassName={'flex justify-center space-x-2'}
            pageLinkClassName={'bg-gray-300 text-black py-1 px-3 rounded mx-1 hover:bg-gray-400'}
            previousLinkClassName={'bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-700'}
            nextLinkClassName={'page-link bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-700'}
          />
        </div>

      {/* Conditionally render JobDetails and JobEditForm components */}
      {selectedJobId && (
        isModalOpen && < JobDetails jobId={selectedJobId} onClose={() => setIsModalOpen(false)} />
      )}
      {editJobId && (
         <JobEditForm jobId={editJobId} onUpdateSuccess={() => setEditJobId(null)}  />
      )}
    </div>
  );
};

export default JobTable;
