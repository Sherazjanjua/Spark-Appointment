import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Jobservice from '../../services/Jobservice';

const JobCreateForm = () => {
  const [qualificationInput, setQualificationInput] = useState('');
  const [experienceInput, setExperienceInput] = useState('');
  const [skillsInput, setSkillsInput] = useState('');

  const formik = useFormik({
    initialValues: {
      title: '',
      job_type: '',
      qualification: [],
      experience: [],
      skills: [],
      description: '',
      post_date: '',
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Job title is required'),
      job_type: Yup.string().required('Job type is required'),
      description: Yup.string().required('Job description is required'),
      qualification: Yup.array().min(1, 'At least one qualification is required').required('Qualifications are required'),
      experience: Yup.array().min(1, 'At least one experience level is required').required('Experience is required'),
      skills: Yup.array().min(1, 'At least one skill is required').required('Skills are required'),
      post_date: Yup.date().required('Post date is required'),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const newJob = await Jobservice.createJob(values);
        console.log('Job created successfully:', newJob);
        resetForm();
      } catch (error) {
        console.error('Error creating job:', error);
      }
    },
  });

  const handleAddQualification = () => {
    if (qualificationInput) {
      formik.setFieldValue('qualification', [...formik.values.qualification, qualificationInput]);
      setQualificationInput('');
    }
  };

  const handleAddExperience = () => {
    if (experienceInput) {
      formik.setFieldValue('experience', [...formik.values.experience, experienceInput]);
      setExperienceInput('');
    }
  };

  const handleAddSkill = () => {
    if (skillsInput) {
      formik.setFieldValue('skills', [...formik.values.skills, skillsInput]);
      setSkillsInput('');
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-3xl p-6 bg-white shadow-lg rounded-xl">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">Create New Job</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Job Title */}
            <div>
              <label className="block text-gray-600 font-medium mb-2">Job Title</label>
              <input
                type="text"
                name="title"
                value={formik.values.title}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full border ${formik.touched.title && formik.errors.title ? 'border-red-500' : 'border-gray-300'} rounded-lg p-3 focus:border-blue-500`}
              />
              {formik.touched.title && formik.errors.title && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.title}</p>
              )}
            </div>

            {/* Job Type */}
            <div>
              <label className="block text-gray-600 font-medium mb-2">Job Type</label>
              <select
                name="job_type"
                value={formik.values.job_type}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full border ${formik.touched.job_type && formik.errors.job_type ? 'border-red-500' : 'border-gray-300'} rounded-lg p-3 focus:border-blue-500`}
              >
                <option value="">Select Job Type</option>
                <option value="full_time">Full-Time</option>
                <option value="part_time">Part-Time</option>
                <option value="internship">Internship</option>
              </select>
              {formik.touched.job_type && formik.errors.job_type && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.job_type}</p>
              )}
            </div>

            {/* Job Description */}
            <div className="col-span-2">
              <label className="block text-gray-600 font-medium mb-2">Job Description</label>
              <textarea
                rows="4"
                name="description"
                value={formik.values.description}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full border ${formik.touched.description && formik.errors.description ? 'border-red-500' : 'border-gray-300'} rounded-lg p-3 focus:border-blue-500`}
              />
              {formik.touched.description && formik.errors.description && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.description}</p>
              )}
            </div>

            {/* Qualifications */}
            <div>
              <label className="block text-gray-600 font-medium mb-2">Qualifications</label>
              <input
                type="text"
                value={qualificationInput}
                onChange={(e) => setQualificationInput(e.target.value)}
                className="w-full border-gray-300 rounded-lg p-3 mb-2"
              />
              <button type="button" onClick={handleAddQualification} className="py-1 px-3 bg-blue-500 text-white rounded-lg">
                Add Qualification
              </button>
              <ul className="mt-2">
                {formik.values.qualification.map((qual, index) => (
                  <li key={index} className="text-gray-600">{qual}</li>
                ))}
              </ul>
            </div>

            {/* Experience */}
            <div>
              <label className="block text-gray-600 font-medium mb-2">Experience</label>
              <input
                type="text"
                value={experienceInput}
                onChange={(e) => setExperienceInput(e.target.value)}
                className="w-full border-gray-300 rounded-lg p-3 mb-2"
              />
              <button type="button" onClick={handleAddExperience} className="py-1 px-3 bg-blue-500 text-white rounded-lg">
                Add Experience
              </button>
              <ul className="mt-2">
                {formik.values.experience.map((exp, index) => (
                  <li key={index} className="text-gray-600">{exp}</li>
                ))}
              </ul>
            </div>

            {/* Skills */}
            <div>
              <label className="block text-gray-600 font-medium mb-2">Skills</label>
              <input
                type="text"
                value={skillsInput}
                onChange={(e) => setSkillsInput(e.target.value)}
                className="w-full border-gray-300 rounded-lg p-3 mb-2"
              />
              <button type="button" onClick={handleAddSkill} className="py-1 px-3 bg-blue-500 text-white rounded-lg">
                Add Skill
              </button>
              <ul className="mt-2">
                {formik.values.skills.map((skill, index) => (
                  <li key={index} className="text-gray-600">{skill}</li>
                ))}
              </ul>
            </div>

            {/* Post Date */}
            <div>
              <label className="block text-gray-600 font-medium mb-2">Post Date</label>
              <input
                type="date"
                name="post_date"
                value={formik.values.post_date}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full border ${formik.touched.post_date && formik.errors.post_date ? 'border-red-500' : 'border-gray-300'} rounded-lg p-3 focus:border-blue-500`}
              />
              {formik.touched.post_date && formik.errors.post_date && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.post_date}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="col-span-2">
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 hover:from-purple-600 hover:to-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-200"
              >
                Create Job
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobCreateForm;
