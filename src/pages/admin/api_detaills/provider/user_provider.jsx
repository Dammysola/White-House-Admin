import { dashboard_Service, updatePicture_Service, updateProfile_Service } from "../services/user_services";





export const updateProfile_Provider = async (email, body, updateLoadingPopup, updateErrorPopup, updateErrorText, updateProfilePopup) => {

    console.log("Email being passed:", email); // Check the value of email
    try {

        updateLoadingPopup(true);

        const response = await updateProfile_Service(email, body);


        if (response.status == 200 || response.status == 201) {

            updateLoadingPopup(false);

            updateProfilePopup(true)

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
        updateLoadingPopup(false)

        console.log("What is going on na ");

        // updateErrorText(err.response.data["responseMessage"]);

        console.log("Error :", err);
        updateErrorPopup(true)
        setTimeout(() => {
            updateErrorPopup(false)
        }, 2000)

    }

}

export const dashboardProvider = async ({ updateDashboard, updateErrorText, updateErrorPopup }) => {


    try {

        let response = await dashboard_Service()


        if (response.status == 200 || response.status == 201) {

            updateDashboard(response.data["responseBody"]);

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


    } catch (error) {

        updateLoadingPopup(false);
        updateErrorText(error.responseMessage)
        console.log("Error :", error);
        updateErrorPopup(true)
        setTimeout(() => {
            updateErrorPopup(false)
        }, 2000)

        console.log("Error :", error);

    }

}


export const updatePicture_Provider = async (email, body, updateLoadingPopup, updateErrorPopup, updateErrorText, updateProfilePopup) => {

    console.log("Email being passed:", email); // Check the value of email

    try {

        updateLoadingPopup(true);

        const response = await updatePicture_Service(email, body);


        if (response.status == 200 || response.status == 201) {

            updateLoadingPopup(false);

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
        updateLoadingPopup(false)

        // updateErrorText(err.response.data["responseMessage"]);

        console.log("Error :", err);
        updateErrorPopup(true)
        setTimeout(() => {
            updateErrorPopup(false)
        }, 2000)

    }

}
