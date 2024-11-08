import axios from "axios";
const API_URL = "https://api-appointments.thesparksolutionz.com/api/slots";
const slotSercice = {
    getAllSlots: async() => {
        try{
            const response = await axios.get(API_URL);
            return response.data;
        }catch(error){
            throw error.response ? error.response.data.message : 'Something went Wrong';
        }
    },
    createSlot: (slotdata)=>{
        
            const response =  axios.post(API_URL,slotdata,{
                headers:{
                    'Content-Type' : 'application/json',
                },
            });  
           return response.data;                  
    },
    getSlot:  async(id) => {
        try{
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
        }catch(error)
        {
            throw error.response ? error.response.data.message : 'Something went wrong';

        }

    },
    deleteSlot: (id)=>{
        const response = axios.delete(`${API_URL}/${id}`);
        return response.data;
    },
    updateSlot : (slotId, values) => {
        const response = axios.put(`${API_URL}/${slotId}`, values, {
            headers: {
                'Content-Type': 'application/json',
              },
    });
            return response.data;
    },
    
}
export default slotSercice;