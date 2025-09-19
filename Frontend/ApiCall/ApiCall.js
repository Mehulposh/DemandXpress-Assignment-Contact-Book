import  axios  from "axios"
import backend from "../ApiEndpoint/endpoint"


export const fetchContacts = async (page,limit) => {
    try {
        const response = await axios.get(`${backend.endpoint}?page=${page}?limit=${limit}`);
        return response
    } catch (error) {
        console.log(error);
        
    }
}

export const deleteContact = async (id) => {
    try {
        const response = await axios.delete(`${backend.endpoint}/${id}`);
        return response
    } catch (error) {
        console.log(error);
        
    }
}


export const addContact = async (data) => {
    try {
        const response = await axios.post(`${backend.endpoint}`,data);
        return response
    } catch (error) {
        console.log(error);
        
    }
}