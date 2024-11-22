import React, { useEffect, useState } from 'react';
import Jobservice from '../../services/Jobservice';

const JobEditForm = ({ jobId, onUpdateSuccess }) => {
  const [formData, setFormData] = useState({
    title: '',
    job_type: '',
    qualification: [],
    experience: [],
    skills: [],
    description: '',
    post_date: ''
  });

  useEffect(() => {
    fetchJobDetails();
  }, [jobId]);

  const fetchJobDetails = async () => {
    try {
      const data = await Jobservice.getJobById(jobId);


      // Ensure each field is an array if it exists, or use an empty array
      setFormData((prevState) => ({
        ...prevState,
        title: data.title || '',
        job_type: data.job_type || '',
        qualification: data.qualification.split(","),
        experience: data.experience.split(","),
        skills: data.skills.split(","),
        description: data.description || '',
        post_date: data.post_date || ''
      }));
    } catch (error) {
      console.error('Error fetching job details:', error);
    }
    console.log(formData);

  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleArrayChange = (name, index, value) => {
    setFormData((prevState) => {
      const newArray = [...prevState[name]];
      newArray[index] = value;
      return {
        ...prevState,
        [name]: newArray,
      };
    });
  };

  const handleAddItem = (name) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: [...prevState[name], ''],
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
                <h3 className="text-center text-2xl font-semibold text-gray-900" id="modal-title">
                  Edit Job Details
                </h3>
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    {/* Job Title */}
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

                    {/* Job Type */}
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

                    {/* Job Description */}
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

                    {/* Qualifications */}
                    <div className="col-span-2">
                      <label className="block text-sm font-medium text-gray-700">Qualifications</label>
                      {formData.qualification.map((qual, index) => (
                        <input
                          key={index}
                          type="text"
                          value={qual}
                          onChange={(e) => handleArrayChange('qualification', index, e.target.value)}
                          className="w-full mt-1 rounded-md border-gray-300 shadow-sm mb-2"
                        />
                      ))}
                      <button
                        type="button"
                        className="mt-2 text-blue-500"
                        onClick={() => handleAddItem('qualification')}
                      >
                        Add Qualification
                      </button>
                    </div>

                    {/* Experience */}
                    <div className="col-span-2">
                      <label className="block text-sm font-medium text-gray-700">Experience</label>
                      {formData.experience.map((exp, index) => (
                        <input
                          key={index}
                          type="text"
                          value={exp}
                          onChange={(e) => handleArrayChange('experience', index, e.target.value)}
                          className="w-full mt-1 rounded-md border-gray-300 shadow-sm mb-2"
                        />
                      ))}
                      <button
                        type="button"
                        className="mt-2 text-blue-500"
                        onClick={() => handleAddItem('experience')}
                      >
                        Add Experience
                      </button>
                    </div>

                    {/* Skills */}
                    <div className="col-span-2">
                      <label className="block text-sm font-medium text-gray-700">Skills</label>
                      {formData.skills.map((skill, index) => (
                        <input
                          key={index}
                          type="text"
                          value={skill}
                          onChange={(e) => handleArrayChange('skills', index, e.target.value)}
                          className="w-full mt-1 rounded-md border-gray-300 shadow-sm mb-2"
                        />
                      ))}
                      <button
                        type="button"
                        className="mt-2 text-blue-500"
                        onClick={() => handleAddItem('skills')}
                      >
                        Add Skill
                      </button>
                    </div>

                    {/* Post Date */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Post Date</label>
                      <input
                        type="date"
                        name="post_date"
                        value={formData.post_date}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
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
};

export default JobEditForm;
