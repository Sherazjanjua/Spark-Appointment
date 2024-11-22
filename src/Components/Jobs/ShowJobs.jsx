import React, { useEffect, useState } from 'react';
import Jobservice from '../../services/Jobservice';
import JobDetails from './JobDetails';
import JobEditForm from './JobEditForm';
import ReactPaginate from 'react-paginate';

const JobTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Control modal visibility
  const [jobs, setJobs] = useState([]);
  const [selectedJobId, setSelectedJobId] = useState(null);
  const [editJobId, setEditJobId] = useState(null);
  const [currentPage,setCurrentPage] = useState(0);
  const itemsPerPage = 5;



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
    <div className=" mt-8">
      <table className="min-w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr>
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
                  className="bg-blue-500 text-white px-4 py-2 rounded grid justify-items-center"
                  onClick={() => {
                    handleJobDetails(job.id);
                    setIsModalOpen(true);
                   }}
                
                >
                  View
                </button>
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded grid justify-items-center"
                  onClick={() => {
                    setEditJobId(job.id)
                    setIsModalOpen(true);
                  }}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded grid justify-items-center"
                  onClick={() =>{
                   handleDelete(job.id)
                  }}
                    
                >
                  Delete
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
