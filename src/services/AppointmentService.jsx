import axios from "axios";
const API_URL = "https://api-appointments.thesparksolutionz.com/api/appointment/create";

const appointmentservice = {
    createappointment : async(data)=>{
        try{
            const response = await axios.post(API_URL,data,{
                headers: {
                  'Content-Type': 'multipart/form-data',
                },
              });
             return response.data; // Return the response data if successful
            } catch (error) {
              throw error.response ? error.response.data.message : 'Something went wrong';
            }
          },
    showallappoints : () =>{
     const response = axios.get('https://api-appointments.thesparksolutionz.com/api/manage-appointment/list?position_id=');
     return response.data;
    },      
        };

export default appointmentservice;
