import React, { useState, useEffect } from 'react';
import slotService from '../../services/Slotservice';

function EditSlot({ slotId, onUpdateSuccess }) {
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch the existing slot details
  useEffect(() => {
    const fetchSlot = async () => {
      try {
        const slot = await slotService.getSlot(slotId);
        setStartTime(slot.start_time || '');
        setEndTime(slot.end_time || '');
      } catch (error) {
        console.error('Error fetching slot data:', error);
        setError('Failed to load slot data');
      } finally {
        setLoading(false);
      }
    };
    fetchSlot();
  }, [slotId]);

  const handleSaveChanges = async (e) => {
    e.preventDefault();
    try {
      const updatedSlot = await slotService.updateSlot(slotId, {
        start_time: startTime,
        end_time: endTime,
      });
      console.log('Slot updated successfully:', updatedSlot);
      onUpdateSuccess();
    } catch (error) {
      console.error('Error updating slot:', error);
      setError('Failed to update slot');
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
      <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
          <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
            <div className="text-center sm:ml-4 sm:mt-0 sm:text-left">
    <div className="h-[80%] flex items-center justify-center">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-xl">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">
          Edit Slot
        </h2>
        <form onSubmit={handleSaveChanges} className="space-y-4">
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
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
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
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
  );
}

export default EditSlot;
