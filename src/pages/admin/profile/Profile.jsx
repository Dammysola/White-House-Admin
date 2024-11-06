import React, { useEffect, useState } from 'react'
import Style from './Profile.module.css'
import profile_img from '../../../assets/images/profile_img.png'
import edit from '../../../assets/svg/edit.svg'
import white_edit from '../../../assets/svg/white_edit.svg'
import capture_two from '../../../assets/svg/capture_two.svg'
import Input from '../../../components/SignUp_input/Input'
import Button from '../../../components/button/Button'
import { PopupContextHook } from '../../../WhiteHouse_PopupContext'
import { getEmail } from '../api_detaills/constant/local_storage'
import { getprofileProvider } from '../api_detaills/provider/auth_provider'
import { updateProfile_Provider } from '../api_detaills/provider/user_provider'



const Profile = () => {

    // Hook to manage error text and popup state
    const { updateErrorText, updateErrorPopup, updateLoadingPopup } = PopupContextHook()

    // Retrieve email from local storage
    const email = getEmail()
    // console.log(caemail); // Log the retrieved email

    // State to manage edit mode and image URL
    const [editState, setEditState] = useState(false)
    const [imgUrl, SetImgUrl] = useState("")
    const [profile, setProfile] = useState({
        details: {}
    })


    useEffect(() => {

        getprofileProvider({

            updateProfile: (data) => {

                setProfile({
                    details: data.details
                })
            },
            email,
            updateErrorPopup,
            updateErrorText,
        })

    }, [])

    console.log(profile);

    const { details } = profile

    // Function to show success popup
    // const successPopup = () => {
    //     updateProfilePopup(true)
    // }




    // Handle file input change
    const handleFile = (e) => {

        const file = e.target.files[0]

        // Create a URL for the selected file

        const url = URL.createObjectURL(file)
        SetImgUrl(url) // Set the image URL state
    }

    // State to manage profile update fields
    const [profileUpdate, setProfileUpdate] = useState({
        fullName: "",
        phone: "",
        img: imgUrl
    })


    // Toggle edit state
    const editFun = () => {
        setEditState(!editState)
    }

    // Handle input changes for profile update
    const HandleChange = (e) => {
        const { value, name, files } = e.target
        setProfileUpdate((prev) => ({
            ...prev,
            [name]: name === "imgURL" ? URL.createObjectURL(files[0]) : value
        }))
    }


    const updateProfile = ()=>{

        let email = getEmail()
        
        let body = profileUpdate
        
        updateProfile_Provider(email, body, updateErrorPopup, updateErrorText, updateLoadingPopup )

    }
    // Handle form submission
    const HandleSubmit = (e) => {

        e.preventDefault()
        console.log(profileUpdate); // Log the profile update data
    }

    return (
        <div id={Style.Profile_mainDiv}>

            <div id={Style.Profile_wrapperDiv}>

                <div id={Style.profile_detailsDiv}>

                    {/* Profile details section */}

                    <div id={Style.Profile_firstline}>

                        <img src={profile_img} alt="" />
                        <p id={Style.nameText}>{details.fullname}</p>
                        <p id={Style.positionText}>Super Admin</p>
                        <p id={Style.status}><div id={Style.statusDiv}></div> Online</p>

                    </div>

                    {/* Account creation and last login info */}

                    <div className={Style.log_InfoDiv}>

                        <p className={Style.loggedText}>Date of Creation</p>
                        <p className={Style.dateText}>24- Oct-2024</p>

                    </div>

                    <div className={Style.log_InfoDiv}>
                        <p className={Style.loggedText}>Last Login</p>
                        <p className={Style.dateText}>24- Oct-2024</p>
                    </div>

                    <div id={Style.lastlineDiv}>
                        <p className={Style.loggedText}>Status</p>
                        <p id={Style.activeText}>{details.status}</p>
                    </div>
                </div>

                <div id={Style.settings_Div}>

                    {/* Account settings button */}

                    <div id={Style.accountDiv}>
                        <button id={Style.accountText}>Account Settings</button>
                    </div>

                    <div id={Style.setting_img_EditDiv}>

                        {/* Display profile image */}

                        {imgUrl ? <img id={Style.profile_img} src={imgUrl} alt="" /> : <img id={Style.profile_img} src={profile_img} alt="" />}

                        {/* Edit button */}

                        <div onClick={() => editFun()}>
                            {editState ? <p id={Style.editText} style={{ color: "#FFFFFF", backgroundColor: "#0E093C" }}><img src={white_edit} alt="" /> Edit</p> : <p id={Style.editText} style={{ color: "#464646" }}><img src={edit} alt="" /> Edit</p>}
                        </div>
                    </div>

                    {/* Image upload section when in edit mode */}

                    {
                        editState &&

                        <div id={Style.imageUpload}>

                            <label htmlFor="input_file"><img src={capture_two} alt="" />Change Cover</label>
                            <input type="file" id="input_file" name="imgURL" onChange={handleFile} />
                        </div>
                    }

                    {/* Display user information or edit form based on edit state */}

                    {
                        !editState &&

                        <div id={Style.infoDetails_Div}>

                            <div id={Style.settings_informations}>
                                <div>
                                    <p className={Style.settings_headerText}>First Name</p>
                                    <p className={Style.settings_detailsText}>{details.fullname}</p>
                                </div>

                            </div>

                            <div id={Style.settings_informations}>

                                <div>
                                    <p className={Style.settings_headerText}>Email address</p>
                                    <p className={Style.settings_detailsText}>{details.email}</p>
                                </div>

                                <div>
                                    <p className={Style.settings_headerText}>Phone</p>
                                    <p className={Style.settings_detailsText}>+{details.phone_number}</p>
                                </div>

                            </div>

                        </div>
                    }

                    {/* Edit form when in edit mode */}

                    {
                        editState &&

                        <form action="">

                            <div id={Style.Input_mainDiv}>

                                <Input
                                    type={"text"}
                                    placeholder={"Type your full name"}
                                    label={"Full Name"}
                                    name={"fullName"}
                                    value={profileUpdate.fullName}
                                    onChange={HandleChange}
                                />

                                <Input
                                    type={"tel"}
                                    placeholder={"Type your phone number"}
                                    label={"Phone"}
                                    name={"phone"}
                                    value={profileUpdate.phone}
                                    onChange={HandleChange}
                                />

                            </div>

                            <Button
                                type={"submit"}
                                text={"Upload Profile"}
                                onSubmit={HandleSubmit}
                            />
                            <button type='submit'></button>

                        </form>
                    }

                </div>
            </div>
        </div>
    )
}

export default Profile