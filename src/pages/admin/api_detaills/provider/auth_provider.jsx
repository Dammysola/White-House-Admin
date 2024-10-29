import { login_service, getAllUsersService, getUserDetailsService, getSuspendedUsersService, getFreezedUsersService, postSuspendService } from "../services/auth_services"



export const login_provider = async (body, navigate, updateLoadingPopup, updateErrorText, updateErrorPopup) => {


    try {

        updateLoadingPopup(true);
        let response = await login_service(body);




        if (response.status === 200 || response.status === 201) {

            updateLoadingPopup(true);

            console.log("Login Success");

            updateLoadingPopup(false);

            navigate("/dashboard");

        } else {
            updateLoadingPopup(false)
            updateErrorText(response.data);
            updateErrorPopup(true)
            setTimeout(() => {
                updateErrorPopup(false)
            }, 2000)
        }

    } catch (err) {
        updateLoadingPopup(false);
        updateErrorText(err.response?.data?.responseMessage || "Login failed");
        console.log("Error :", err);
        updateErrorPopup(true);
        setTimeout(() => {
            updateErrorPopup(false);
        }, 2000);
    }
}

export const getAllUsersProvider = async ({ updateUsers, updateErrorText, updateErrorPopup }) => {

    try {

        let response = await getAllUsersService()

        if (response.status == 200 || response.status == 201) {

            updateUsers(response.data["responseBody"]);

            console.log(response.data["responseBody"]);

        }



    } catch (err) {

        updateErrorText(err.responseMessage);
        console.log("Error :", err);
        updateErrorPopup(true)
        setTimeout(() => {
            updateErrorPopup(false)
        }, 2000)
    }

}

export const getUserDetailsProvider = async ({ updateUserDetails, phone, updateErrorText, updateErrorPopup }) => {


    try {

        let response = await getUserDetailsService(phone)

        if (response.status == 200 || response.status == 201) {

            updateUserDetails(response.data["responseBody"])

            console.log(response.data["responseBody"]);


        } else {
            throw new Error("User Details not found")
        }

    } catch (error) {

        // updateErrorText(error.responseMessage)
        // console.log("Error :", error);
        // updateErrorPopup(true)
        // setTimeout(() => {
        //     updateErrorPopup(false)
        // }, 2000)

        console.log("Error :", error);

    }

}

export const getSuspendedUsersProvider = async ({ updateSuspended, updateErrorText, updateErrorPopup }) => {

    try {

        let response = await getSuspendedUsersService()

        if (response.status == 200 || response.status == 201) {

            updateSuspended(response.data["responseBody"]);

            console.log(response.data["responseBody"]);

        }



    } catch (err) {

        // updateErrorText(err.responseMessage);
        // console.log("Error :", err);
        // updateErrorPopup(true)
        // setTimeout(() => {
        //     updateErrorPopup(false)
        // }, 2000)
    }

}


export const getFreezedUsersProvider = async ({ updateFreezed, updateErrorText, updateErrorPopup }) => {

    try {

        let response = await getFreezedUsersService()

        if (response.status == 200 || response.status == 201) {

            updateFreezed(response.data["responseBody"]);

            console.log(response.data["responseBody"]);

        }



    } catch (err) {

        updateErrorText(err.responseMessage);
        console.log("Error :", err);
        updateErrorPopup(true)
        setTimeout(() => {
            updateErrorPopup(false)
        }, 2000)
    }

}


export const postSuspendProvider = async ({ phone, updateErrorText, updateErrorPopup }) => {


    try {

        let response = await postSuspendService(phone)

        if (response.status == 200 || response.status == 201) {

            console.log("success:", response);



        } else {
            updateLoadingPopup(false);
            updateErrorText(response.data["responseMessage"]);
            console.log("Error :", err);
            updateErrorPopup(true)
            setTimeout(() => {
                updateErrorPopup(false)
            }, 2000)
        }

    } catch (error) {

        updateErrorText(error.responseMessage)
        console.log("Error :", error);
        updateErrorPopup(true)
        setTimeout(() => {
            updateErrorPopup(false)
        }, 2000)

        console.log("Error :", error);

    }

}


export const getRegCountriesProvider = async ({ updateCountries, updateErrorText, updateErrorPopup }) => {

    try {

        let response = await getAllUsersService()

        if (response.status == 200 || response.status == 201) {

            updateCountries(response.data["responseBody"]);

            console.log(response.data["responseBody"]);


        } else {
            
            updateLoadingPopup(false);
            updateErrorText(response.data["responseMessage"]);
            console.log("Error :", err);
            updateErrorPopup(true)
            setTimeout(() => {
                updateErrorPopup(false)
            }, 2000)
        }



    } catch (err) {

        updateErrorText(err.responseMessage);
        console.log("Error :", err);
        updateErrorPopup(true)
        setTimeout(() => {
            updateErrorPopup(false)
        }, 2000)
    }

}