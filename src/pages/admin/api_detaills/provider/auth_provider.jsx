import {login_service, getAllUsersService} from "../services/auth_services"



export const login_provider = async (body, navigate, updateLoadingPopup) => {

    try {

        updateLoadingPopup(true);
        let response = await login_service(body);

        if (response.status === 200 || response.status === 201) {
            console.log("Login Success");

            updateLoadingPopup(false);

            navigate("/dashboard");
        } else {
            throw new Error('Login failed');
        }
    } catch (err) {
        updateLoadingPopup(false);
        // updateErrorText(err.response?.data?.responseMessage || "Login failed");
        console.log("Error :", err);
        // updateErrorPopup(true);
        // setTimeout(() => {
        //     updateErrorPopup(false);
        // }, 2000);
    }
}

export const getAllUsersProvider = async ({ updateUsers }) => {
    try {
        let response = await getAllUsersService()

        if (response.status == 200) {
      

            updateUsers(response.data["responseBody"]);

            console.log(response.data["data"]);
        }



    } catch (err) {

        // updateErrorText(err.response.data.message)
        console.log("Error :", err);
        // updateErrorPopup(true)
        // setTimeout(() => {
        //     updateErrorPopup(false)
        // }, 2000)
    }


}