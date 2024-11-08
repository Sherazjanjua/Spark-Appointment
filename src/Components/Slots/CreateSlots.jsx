import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import slotSercice from '../../services/Slotservice';

function CreateSlots() {
  // Formik setup
  const formik = useFormik({
    initialValues: {
      start_time: '',
      end_time: '',
    },
    validationSchema: Yup.object({
      start_time: Yup.string().required('Start time is required'),
      end_time: Yup.string().required('End time is required'),
    }),
    onSubmit: async(values ,{resetForm}) => {
      try{
        const newSlot = await slotSercice.createSlot(values);
        console.log('Slot created successfully:', newSlot);
        resetForm();
      }catch (error) {
        console.error('Error creating job:', error);

      }


      }
  });

  return (
    <div className="h-[80%] flex items-center justify-center">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-xl">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">
          Create New Slot
        </h2>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          {/* Start Time */}
          <div>
            <label
              htmlFor="start_time"
              className="block text-sm font-medium text-gray-700"
            >
              Start Time
            </label>
            <input
              type="time"
              id="start_time"
              name="start_time"
              value={formik.values.start_time}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`mt-1 block w-full px-3 py-2 border ${
                formik.touched.start_time && formik.errors.start_time
                  ? 'border-red-500'
                  : 'border-gray-300'
              } rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            />
            {formik.touched.start_time && formik.errors.start_time ? (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.start_time}
              </p>
            ) : null}
          </div>

          {/* End Time */}
          <div>
            <label
              htmlFor="end_time"
              className="block text-sm font-medium text-gray-700"
            >
              End Time
            </label>
            <input
              type="time"
              id="end_time"
              name="end_time"
              value={formik.values.end_time}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`mt-1 block w-full px-3 py-2 border ${
                formik.touched.end_time && formik.errors.end_time
                  ? 'border-red-500'
                  : 'border-gray-300'
              } rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            />
            {formik.touched.end_time && formik.errors.end_time ? (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.end_time}
              </p>
            ) : null}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateSlots;
