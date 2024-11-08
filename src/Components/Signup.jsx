import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Use AuthContext to handle login after signup
import authService from '../services/AuthService';
import image from '../assets/Images/adminposter.jpg';
import logo from '../assets/Images/logo-black.png';

const Signup = () => {
  const { login } = useAuth(); // Access login to automatically log the user in after sign up
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Required'),
  });

  const onSubmit = async (values, { setSubmitting }) => {
    try {
      const { email, password } = values;
      // Call the signup service
      await authService.signup(email, password);

      // Automatically login the user after successful sign-up
      login();

      // Redirect to admin panel after sign-up
      navigate('/admin');
    } catch (error) {
      console.error('Signup failed:', error);
      setError('Sign-up failed. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <div className="flex min-h-screen">
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start p-8">
        <div className="w-full flex justify-center md:justify-start mb-8">
          <div className="block md:flex items-center">
            <img src={logo} alt="Logo" className="w-18 h-12 mr-4" />
          </div>
        </div>
        <div className="block mt-12 md:mt-0 md:flex flex-col justify-center h-full max-w-sm w-full">
          <h1 className="block text-xl md:text-2xl font-bold mb-6">Sign Up</h1>

          {error && <div className="text-red-500 text-center mb-4">{error}</div>}

          <form onSubmit={formik.handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="email@example.com"
                className="w-full py-2 px-3 text-gray-700 leading-tight"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.errors.email && formik.touched.email && (
                <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="w-full py-2 px-3 text-gray-700 leading-tight"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.errors.password && formik.touched.password && (
                <div className="text-red-500 text-sm mt-1">{formik.errors.password}</div>
              )}
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                className="w-full py-2 px-3 text-gray-700 leading-tight"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmPassword}
              />
              {formik.errors.confirmPassword && formik.touched.confirmPassword && (
                <div className="text-red-500 text-sm mt-1">{formik.errors.confirmPassword}</div>
              )}
            </div>
            <div className="flex flex-col justify-between">
              <button
                className="bg-cyan-500 w-[60%] mb-4 hover:bg-cyan-600 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
                type="submit"
                disabled={formik.isSubmitting}
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>

      <div
        className="w-1/2 min-h-screen hidden md:block"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
    </div>
  );
};

export default Signup;
