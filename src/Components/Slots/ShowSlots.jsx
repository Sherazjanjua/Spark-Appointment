import React, { useEffect, useState } from 'react';
import Slotservice from '../../services/Slotservice';
import ReactPaginate from 'react-paginate';
import EditSlot from './EditSlot';

function ShowSlots() {
  const [slots, setSlots] = useState([]);
  const [editSlotid,setEditSlotId] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;

  useEffect(() => {
    fetchSlots();
  }, []);
  const handledelete = async (id) => {
    if(window.confirm('Are you Sure you want to delete this slot?')){
      try{
        await Slotservice.deleteSlot(id);
        fetchSlots();
      }catch (error) {
        console.log('Error Deleting Slot', error);
        
      }
    }
  };

  const start = currentPage * itemsPerPage;
  const end = start + itemsPerPage;
  const itemToDisplay = slots.slice(start, end);

  const handlePageClick = (selected) => {
    setCurrentPage(selected.selected);
  };

  const fetchSlots = async () => {
    try {
      const data = await Slotservice.getAllSlots();
      setSlots(data.data.Recode); 
    } catch (error) {
      console.error('Error fetching slots:', error);
    }
  };

  return (
    <div className="m-2 p-8 w-full flex justify-center">
      <div className="">
        <table className="space-x-5 bg-white shadow-md rounded-lg">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold">Start Time</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">End Time</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {itemToDisplay.map((slot, index) => (
              <tr
                key={index}
                className={`border-b ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'} hover:bg-gray-200 transition-colors`}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm">{slot.start_time}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">{slot.end_time}</td>
                <td className="px-6 py-4 flex space-x-3">
                 
                  <button 
                  onClick={()=> setEditSlotId(slot.id)}                  
                  className="bg-green-500 text-white px-4 py-2 rounded-lg transition hover:bg-green-600">
                    Edit
                  </button>
                  <button 
                    onClick={()=> handledelete(slot.id) }
                    className="bg-red-500 text-white px-4 py-2 rounded-lg transition hover:bg-red-600">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-4 w-full">
          <ReactPaginate
            previousLabel={'<Prev'}
            nextLabel={'Next>'}
            breakLabel={'...'}
            pageCount={Math.ceil(slots.length / itemsPerPage)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={1}
            onPageChange={handlePageClick}
            containerClassName={'flex justify-center space-x-2'}
            pageLinkClassName={'bg-gray-300 text-black py-1 px-3 rounded mx-1 hover:bg-gray-400'}
            previousLinkClassName={'bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-700'}
            nextLinkClassName={'page-link bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-700'}
          />
        </div>
      </div>
      {editSlotid && (
         <EditSlot slotId={editSlotid} onUpdateSuccess={() => setEditSlotId(null)}  />
      )}
    </div>
  );
}

export default ShowSlots;
