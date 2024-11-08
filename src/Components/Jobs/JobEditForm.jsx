import React, { useEffect, useState } from 'react';
import Jobservice from '../../services/Jobservice';

const JobEditForm = ({ jobId, onUpdateSuccess}) => {
  const [formData, setFormData] = useState({
    title: '',
    job_type: '',
    requirement: [],
    description: '',
    post_date: ''
  });

  useEffect(() => {
    fetchJobDetails();
  }, [jobId]);

  const fetchJobDetails = async () => {
    try {
      const data = await Jobservice.getJobById(jobId);
      setFormData(data);
    } catch (error) {
      console.error('Error fetching job details:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await Jobservice.updateJob(jobId, formData);
      onUpdateSuccess(); // Notify parent about the update
    } catch (error) {
      console.error('Error updating job:', error);
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
                <h3 className="text-center text-2xl  font-semibold text-gray-900" id="modal-title">Job Details</h3>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Job Type</label>
            <select
              name="job_type"
              value={formData.job_type}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            >
              <option value="full_time">Full Time</option>
              <option value="part_time">Part Time</option>
            </select>
          </div>
          
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              rows={4}
            />
          </div>
        </div>

        <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded-md">
          Update Job
        </button>
      </form>
    </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
  );
}

export default JobEditForm;
