import { dashboard, updatePicture, updateProfile } from "../constant/url_path"
import axios from 'axios';




export const updateProfile_Service = async (email, body) => {

    const response = await axios.put(`${updateProfile}/${email}`, body);



    console.log(response);

    return response;
};

export const dashboard_Service = async () => {

    const response = await axios.get(dashboard);


    console.log(response);

    return response;
};


export const updatePicture_Service = async (email, body) => {

    const response = await axios.put(`${updatePicture}/${email}`, body);



    console.log(response);

    return response;
};