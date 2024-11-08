import axios from 'axios';

const API_URL = 'https://api-appointments.thesparksolutionz.com/api/positions';

const Jobservice = {
  // Fetch all jobs
  getAllJobs: async () => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data.message : 'Something went wrong';
    }
  },

  // Fetch job by ID
  getJobById: async (id) => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data.message : 'Something went wrong';
    }
  },

  // Update job by ID
  updateJob: async (id, updatedJob) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, updatedJob, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data.message : 'Something went wrong';
    }
  },

  // Delete job by ID
  deleteJob: async (id) => {
    try {
      const response = await axios.delete(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data.message : 'Something went wrong';
    }
  },

  // Create a new job
  createJob: async (jobData) => {
    try {
      const response = await axios.post(API_URL, jobData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data; // Return the response data if successful
    } catch (error) {
      throw error.response ? error.response.data.message : 'Something went wrong';
    }
  }
};

export default Jobservice;
