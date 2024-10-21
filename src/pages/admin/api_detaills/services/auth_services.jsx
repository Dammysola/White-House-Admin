import React from 'react'
import { login_url, getUsers } from "../constant/url_path"
import axios from 'axios';





export const login_service = async (body) => {
    console.log("Login Initiated")

    const response = await axios.post(login_url, body);

    if (response.status == 200) {
        
        console.log('Success:', response.data);
        return response.data;

    } else {

        // updateErrorText(response.data["responseMessage"])
        console.log("Login failed", response.data)
  
    }

    return response;
};



export const getAllUsersService = async () => {

    console.log("Player Initiated")

    const response = await axios.get(getUsers);

    if (response.status == 200) {

        console.log('Success:', response.data);
        console.log("Not Successful joor")

    } else {

        // updateErrorText(response.data["responseMessage"])
        console.log("Login failed", response.data)
        // updateErrorPopup(true)
        // setTimeout(() => {
        //     updateErrorPopup(false)
        // }, 2000)
    }

    return response;
};
