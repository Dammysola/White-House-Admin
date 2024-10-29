import React from 'react'
import { login_url, getUsers, getUserDetails, getSuspendedUsers, 
    getFreezedUsers, postSuspendAccounts, getRegCountries } from "../constant/url_path"
import axios from 'axios';





export const login_service = async (body) => {
    console.log("Login Initiated")

    const response = await axios.post(login_url, body);

    if (response.status == 200 || response.status == 201) {
        
        console.log('Success:', response.data);


                // Assuming the token is in response.data.token
                // if (response.data["responseBody"]) {

                //     setToken(response.data["responseBody"]);
        
                //     // Store the email in local storage
                //     if (body.email) {
                //         setEmail(body.email);
                //     }
                // } else {
                //     console.warn('Token not found in response');
                // }
                // console.log(response.data["responseBody"]);
        return response;

    } else {

        // updateErrorText(response.data["responseMessage"])
        console.log("Login failed", response.data)
  
    }

    return response;
};

// Modify other service functions to include the token in the request header
const authAxios = axios.create({

    headers: {
        Authorization: `Bearer ${getToken()}`
    }
});

export const getAllUsersService = async () => {

    console.log("Player Initiated")

    const response = await axios.get(getUsers);


    return response;
};

export const getUserDetailsService = async (phone) => {

    const response = await axios.get(`${getUserDetails}/${phone}`);


    console.log(response);
    
    return response;
};

export const getSuspendedUsersService = async () => {

    console.log("Player Initiated")

    const response = await axios.get(getSuspendedUsers);

    console.log(response);
    
    return response;
};

export const getFreezedUsersService = async () => {

    console.log("Player Initiated")

    const response = await axios.get(getFreezedUsers);

    console.log(response);
    
    return response;
};


export const postSuspendService = async (phone) => {

    const response = await axios.get(`${postSuspendAccounts}/${phone}`);


    console.log(response);
    
    return response;
};

export const getRegCountriesService = async ()=>{

    const response = await axios.get(getRegCountries)

    console.log(response);

    
    return response
    
}
