import { updateProfile_Service } from "../services/user_services";





export const updateProfile_Provider = async (body, email, updateLoadingPopup, updateErrorPopup, updateErrorText) => {

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

        updateErrorText(err.response.data.responseMessage);

        console.log("Error :", err);
        updateErrorPopup(true)
        setTimeout(() => {
            updateErrorPopup(false)
        }, 2000)

    }

}