import { updateProfile } from "../constant/url_path"
import axios from 'axios';




export const updateProfile_Service = async (email, body) => {

    const response = await axios.put(`${updateProfile}/${email}`, body);


    console.log(response);
    
    return response;
};