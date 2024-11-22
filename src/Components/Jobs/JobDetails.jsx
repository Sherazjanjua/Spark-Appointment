import React, { useEffect, useState } from 'react';
import Jobservice from '../../services/Jobservice';

function Modal({ jobId, onClose }) {
  const [job, setJob] = useState();

  useEffect(() => {
    if (jobId) {
      fetchJobDetails();
    }
  }, [jobId]);

  const fetchJobDetails = async () => {
    try {
      const data = await Jobservice.getJobById(jobId);
      console.log(data); 
      setJob(data);
    } catch (error) {
      console.error('Error fetching job details:', error);
    }
  };

  return (
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="text-center sm:ml-4 sm:mt-0 sm:text-left">
                <h3 className="text-center text-2xl font-semibold text-gray-900" id="modal-title">Job Details</h3>
                <div className="mt-2">
                  {job ? (
                    <div className="bg-white shadow-md rounded-lg p-6">
                      <h2 className="text-xl font-bold mb-3">{job.title}</h2>
                      <p><strong>Type:</strong> {job.job_type}</p>
                      <p><strong>Description:</strong> {job.description}</p>
                      <p><strong>Post Date:</strong> {job.post_date}</p>
                      
                      <div className="mt-3">
                        <strong>Requirements:</strong>
                        <ul className="list-disc pl-5 mt-2">
                          <li><strong>Qualifications:</strong> {job.qualification || "N/A"}</li>
                          <li><strong>Experience:</strong> {job.experience || "N/A"}</li>
                          <li><strong>Skills:</strong> {job.skills || "N/A"}</li>
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <p>Loading job details...</p>
                  )}
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button 
                type="button"
                onClick={onClose} 
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">
                Done
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
