import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import AdminPanel from './Pages/AdminPanel';
import User from './Pages/User';
import PostJob from './Components/Jobs/PostJob';
import ShowJobs from './Components/Jobs/ShowJobs';
import JobDetails from './Components/Jobs/JobDetails'; // New component for job details
import CreateSlots from './Components/Slots/CreateSlots';
import ShowSlots from './Components/Slots/ShowSlots';
import ShowAppointments from './Components/Appointments/ShowAppointments';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', index: true, element: <User /> },
      {
        path: 'admin',
        element: <AdminPanel />,
        children: [
          {
            path: 'jobs', // New grouping for jobs
            children: [
              { path: 'create', element: <PostJob /> }, // Now correctly reflects the new path
              { path: 'show', element: <ShowJobs /> }, // Updated to show jobs
              { path: ':jobId', element: <JobDetails /> }, // Dynamic route for job details
            ],
          },
          { path: 'createslot', element: <CreateSlots /> },
          { path: 'showslots', element: <ShowSlots /> },
          { path: 'appointments', element: <ShowAppointments /> }, // Added for appointments
        ],
      },
    ],
  },
]);

const RouterComponent = () => {
  return <RouterProvider router={router} />;
};

export default RouterComponent;
