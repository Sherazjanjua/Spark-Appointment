import React, { useEffect, useState } from "react";
import axios from "axios";

const ShowAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalRecords, setTotalRecords] = useState(0);
  const [paginationLimit, setPaginationLimit] = useState(10);

  const fetchAppointments = async (page = 1) => {
    try {
      const response = await axios.get(
        `https://api-appointments.thesparksolutionz.com/api/manage-appointment/list`,
        {
          params: { position_id: "", page },
        }
      );

      if (response.data.success) {
        setAppointments(response.data.data.data || []);
        setPaginationLimit(response.data.data.Pagination_Limit || 10);
        setTotalRecords(response.data.data.Total_Recode || 0);
        setCurrentPage(response.data.data.Current_Page || 1);
      }
    } catch (error) {
      console.error("Error fetching appointments:", error);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const handlePageChange = (page) => {
    fetchAppointments(page);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Appointments</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">ID</th>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">Contact</th>
              <th className="border border-gray-300 px-4 py-2">Date</th>
              <th className="border border-gray-300 px-4 py-2">Slot</th>
              <th className="border border-gray-300 px-4 py-2">Title</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment.id}>
                <td className="border border-gray-300 px-4 py-2">{appointment.id}</td>
                <td className="border border-gray-300 px-4 py-2">{appointment.name}</td>
                <td className="border border-gray-300 px-4 py-2">{appointment.email}</td>
                <td className="border border-gray-300 px-4 py-2">{appointment.contact}</td>
                <td className="border border-gray-300 px-4 py-2">{appointment.date}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {appointment.start_time} - {appointment.end_time}
                </td>
                <td className="border border-gray-300 px-4 py-2">{appointment.title}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <a
                    href={`https://api-appointments.thesparksolutionz.com/${appointment.resume}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    View Resume
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex justify-between items-center">
        <p className="text-sm">
          Showing {Math.min(currentPage * paginationLimit, totalRecords)} of{" "}
          {totalRecords} records
        </p>
        <div className="flex space-x-2">
          <button
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
            className={`px-3 py-1 rounded ${
              currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            Previous
          </button>
          <button
            disabled={currentPage * paginationLimit >= totalRecords}
            onClick={() => handlePageChange(currentPage + 1)}
            className={`px-3 py-1 rounded ${
              currentPage * paginationLimit >= totalRecords
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowAppointments;
