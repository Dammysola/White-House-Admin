import React, { useState } from 'react'
import Style from './Director_Details.module.css'
import arrow_black from '../../../assets/svg/arrow_down-dark.svg'
import location_logo from '../../../assets/svg/Location_logo.svg'
import alpha_logo from '../../../assets/svg/Alpha_Bet_Black_Logo.svg'
import Input from '../../../components/SignUp_input/Input'
import Button from '../../../components/button/Button'
import { Link } from 'react-router-dom'


const Director_Details = () => {
    const [directorDetails, setDirectorDetail] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: ''
    })

    const details = (e) => {
        const name = e.target.name
        const value = e.target.value

        setDirectorDetail(
            (prev) => ({
                ...prev,
                [name]: value
            })
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault(e)
    }
    return (

        <div>
            <div id={Style.Director_Details_form_MainDiv}>
                
                <div id={Style.Director_Details_LineDiv}>
                    <div className={Style.Director_Details_Line} id={Style.line}></div>
                    <div className={Style.Director_Details_Line}></div>
                    <div className={Style.Director_Details_Line}></div>
                    <div className={Style.Director_Details_Line}></div>
                </div>
                <div id={Style.Director_Details_formDiv}>
                    <div id={Style.Director_Details_Logo_headerDiv}>
                        <img src={location_logo} alt="" />
                        <div>Company Information</div>
                    </div>


                    <form onSubmit={handleSubmit}>
                        <div id={Style.Input_mainDiv}>
                            <div className={Style.inputDiv}>
                                <Input
                                    label={"Director's First Name"}
                                    placeholder={"Director's First Name"}
                                    type={"text"}
                                    name={"firstName"}
                                    value={directorDetails.firstName}
                                    // error={validation.email}
                                    OnChange={details}
                                />
                                <Input
                                    label={"Director's Last Name"}
                                    placeholder={"Director's Last Name"}
                                    type={"text"}
                                    name={"lastName"}
                                    value={directorDetails.lastName}
                                    // error={validation.email}
                                    OnChange={details}
                                />
                            </div>

                            <Input
                                label={"Director's Email"}
                                placeholder={"Director's Email"}
                                type={"email"}
                                name={"email"}
                                value={directorDetails.email}
                                // error={validation.email}
                                OnChange={details}
                            />
                            <Input
                                label={"Director's Phone Number"}
                                placeholder={"Director's Phone Number"}
                                type={"text"}
                                name={"phoneNumber"}
                                value={directorDetails.phoneNumber}
                                // error={validation.email}
                                OnChange={details}
                            />

                            <div className={Style.inputDiv}>
                                <Input
                                    label={"Password"}
                                    placeholder={"*******"}
                                    type={"text"}
                                    name={"password"}
                                    value={directorDetails.email}
                                    // error={validation.email}
                                    OnChange={details}
                                />
                                <Input
                                    label={"Confirm Password"}
                                    placeholder={"*******"}
                                    type={"password"}
                                    name={"password"}
                                    value={directorDetails.confirmPassword}
                                    // error={validation.email}
                                    OnChange={details}
                                />
                            </div>
                            <div id={Style.BtnDiv}>

                                <button id={Style.Cancel_Btn}>Back</button>
                                <Link to={'/success'}>
                                    <Button
                                        type={"submit"}
                                        text={"Complete Registration"}
                                        onSubmit={handleSubmit}
                                    />
                                </Link>


                            </div>
                        </div>
                    </form>
                    <div id={Style.SignIn}>Already have an account? Sign In</div>
                </div>
            </div>
        </div>

    )
}

export default Director_Details