
import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import slotSercice from '../../services/Slotservice';
import appointmentservice from '../../services/AppointmentService';

function CreateAppointment({ onClose, positionid }) {
  const [slots, setSlots] = useState([]);
  const [loadingSlots, setLoadingSlots] = useState(false);

  const formik = useFormik({
    initialValues: {
      position_id: positionid || '',
      slot_id: '',
      name: '',
      email: '',
      contact: '',
      date: '',
      cover_letter: '',
      resume: '',
      image:'',
      mode:'',

    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required('Name is required')
        .min(3, 'Name must be at least 3 characters')
        .max(50, 'Name cannot exceed 50 characters'),
      email: Yup.string()
        .email('Invalid email format')
        .required('Email is required'),
      contact: Yup.string()
        .matches(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits')
        .required('Phone number is required'),
      date: Yup.date().required('Date is required').nullable(),
      slot_id: Yup.string().required('Time slot is required'),
      position_id: Yup.number().required('Position ID is required'),
      cover_letter: Yup.string()
        .required('Cover letter is required')
        .min(50, 'Cover letter must be at least 50 characters long'),
      resume: Yup.mixed()
        .required('Resume is required')
        .test(
          'fileFormat',
          'Only PDF files are allowed',
          (value) => value && value.type === 'application/pdf'
        ),
    }),
    onSubmit:  (values) => {
          appointmentservice.createappointment(values);
          console.log("Appointment created successfully");
          onclose();
      
      }
  });

  useEffect(() => {
    fetchSlots();
  }, []);

  const fetchSlots = async () => {
    setLoadingSlots(true);
    try {
      const response = await slotSercice.getAllSlots();
      setSlots(response.data.Recode || []);
    } catch (error) {
      console.error('Error fetching slots:', error);
    } finally {
      setLoadingSlots(false);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      formik.setFieldValue('resume', file);
    }
  };
  
  return (
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <h3 className="text-center text-2xl font-semibold text-gray-900" id="modal-title">
                Create Appointment
              </h3>
              <form onSubmit={formik.handleSubmit} className="mt-4 space-y-4">
                {/* Name */}
                <div>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={`w-full border ${
                      formik.touched.name && formik.errors.name ? 'border-red-500' : 'border-gray-300'
                    } rounded-lg p-3 focus:border-blue-500`}
                  />
                  {formik.touched.name && formik.errors.name && (
                    <p className="text-red-500 text-sm">{formik.errors.name}</p>
                  )}
                </div>
                <div>
<label htmlFor="email">Email</label>
<input
  type="email"
  name="email"
  value={formik.values.email}
  onChange={formik.handleChange}
  onBlur={formik.handleBlur}
  className={`w-full border ${
    formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-300'
  } rounded-lg p-3 focus:border-blue-500`}
/>
{formik.touched.email && formik.errors.email && (
  <p className="text-red-500 text-sm">{formik.errors.email}</p>
)}
</div>

<div>
<label htmlFor="contact">Contact</label>
<input
  type="text"
  name="contact"
  value={formik.values.contact}
  onChange={formik.handleChange}
  onBlur={formik.handleBlur}
  className={`w-full border ${
    formik.touched.contact && formik.errors.contact ? 'border-red-500' : 'border-gray-300'
  } rounded-lg p-3 focus:border-blue-500`}
/>
{formik.touched.contact && formik.errors.contact && (
  <p className="text-red-500 text-sm">{formik.errors.contact}</p>
)}
</div>
<div>
              <label className="block text-gray-600 font-medium mb-2">InterView Mode</label>
              <select
                name="mode"
                value={formik.values.mode}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full border ${formik.touched.mode && formik.errors.mode ? 'border-red-500' : 'border-gray-300'} rounded-lg p-3 focus:border-blue-500`}
              >
                <option value="">Select Job Type</option>
                <option value="virtual">Virtual</option>
                <option value="physical">Physical</option>
              </select>
              {formik.touched.mode && formik.errors.mode && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.mode}</p>
              )}
            </div>

<div>
<label htmlFor="date">Date</label>
<input
  type="date"
  name="date"
  value={formik.values.date}
  onChange={formik.handleChange}
  onBlur={formik.handleBlur}
  className={`w-full border ${
    formik.touched.date && formik.errors.date ? 'border-red-500' : 'border-gray-300'
  } rounded-lg p-3 focus:border-blue-500`}
/>
{formik.touched.date && formik.errors.date && (
  <p className="text-red-500 text-sm">{formik.errors.date}</p>
)}
</div>

<div>
<label htmlFor="slot">Select Slot</label>
<select
  name="slot_id"
  value={formik.values.slot_id}
  onChange={formik.handleChange}
  onBlur={formik.handleBlur}
  className={`w-full border ${
    formik.touched.slot_id && formik.errors.slot_id? 'border-red-500' : 'border-gray-300'
  } rounded-lg p-3 focus:border-blue-500`}
>
  <option value="" label="Available Slots" />
  {slots.map((slot) => (
    <option key={slot.id} value={slot.id}>
      {slot.start_time} - {slot.end_time}
    </option>
  ))}
</select>
{formik.touched.slot_id && formik.errors.slot_id && (
  <p className="text-red-500 text-sm">{formik.errors.slot}</p>
)}
</div>

<div>
<label htmlFor="cover_letter">Cover Letter</label>
<textarea
  name="cover_letter"
  value={formik.values.cover_letter}
  onChange={formik.handleChange}
  onBlur={formik.handleBlur}
  className={`w-full border ${
    formik.touched.cover_letter && formik.errors.cover_letter
      ? 'border-red-500'
      : 'border-gray-300'
  } rounded-lg p-3 focus:border-blue-500`}
></textarea>
{formik.touched.cover_letter && formik.errors.cover_letter && (
  <p className="text-red-500 text-sm">{formik.errors.cover_letter}</p>
)}
</div>

<div>
<label htmlFor="resume">Resume</label>
<input
  type="file"
  name="resume"
  // value={formik.values.resume}
  onChange={handleFileChange}
  onBlur={formik.handleBlur}
  className={`w-full border ${
    formik.touched.resume && formik.errors.resume ? 'border-red-500' : 'border-gray-300'
  } rounded-lg p-3 focus:border-blue-500`}
/>
{formik.touched.resume && formik.errors.resume && (
  <p className="text-red-500 text-sm">{formik.errors.resume}</p>
)}
</div>

                {/* Other Fields (Email, Contact, etc.) */}

                <div className="flex justify-end mt-4">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    onClick={onClose}
                    className="ml-3 bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateAppointment;



