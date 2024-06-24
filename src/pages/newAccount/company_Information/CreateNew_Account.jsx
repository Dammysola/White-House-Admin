import React, { useState } from 'react'
import Style from '../company_Information/CreateNew_Account.module.css'
import arrow_black from '../../../assets/svg/arrow_down-dark.svg'
import location_logo from '../../../assets/svg/Location_logo.svg'
import alpha_logo from '../../../assets/svg/Alpha_Bet_Black_Logo.svg'
import Input from '../../../components/SignUp_input/Input'
import Button from '../../../components/button/Button'
import { Link } from 'react-router-dom'



const CreateNew_Account = () => {
    const [createAccount, setCreateAccount] = useState({
        countryIncorporation: '',
        password: '',
        issuerCode: '',
        subCode: '',
        registrationName: '',
        address: '',
        state: '',
        town: '',
        zipcode: ''
    })
    const accountDetails = (e) => {
        const name = e.target.name
        const value = e.target.value
    }

    const handleSubmit = (e) => {
        e.preventDefault(e)
    }

    return (
        <div>
            <div id={Style.CreateNew_Account_form_MainDiv}>

                <div id={Style.CreateNew_Account_LineDiv}>
                    <div className={Style.CreateNew_Account_Line} id={Style.line}></div>
                    <div className={Style.CreateNew_Account_Line}></div>
                    <div className={Style.CreateNew_Account_Line}></div>
                    <div className={Style.CreateNew_Account_Line}></div>
                </div>
                <div id={Style.CreateNew_Account_formDiv}>
                    <div id={Style.CreateNew_Account_Logo_headerDiv}>
                        <img src={location_logo} alt="" />
                        <div>Company Information</div>
                    </div>


                    <form onSubmit={handleSubmit}>
                        <div id={Style.Input_mainDiv}>
                            <div className={Style.inputDiv}>
                                <Input
                                    label={"Country of Incorporation"}
                                    placeholder={"Select Country"}
                                    type={"text"}
                                    name={"countryIncorporation"}
                                    value={createAccount.countryIncorporation}
                                    // error={validation.email}
                                    OnChange={accountDetails}
                                />
                                <Input
                                    label={"Password"}
                                    placeholder={"......."}
                                    type={"password"}
                                    name={"password"}
                                    value={createAccount.password}
                                    // error={validation.email}
                                    OnChange={accountDetails}
                                />
                            </div>
                            <div className={Style.inputDiv}>
                                <Input
                                    label={"Issuer Code"}
                                    placeholder={"Issuer Code"}
                                    type={"text"}
                                    name={"issuerCode"}
                                    value={createAccount.issuerCode}
                                    // error={validation.email}
                                    OnChange={accountDetails}
                                />
                                <Input
                                    label={"Sub-Issuer Code"}
                                    placeholder={"Sub-Issuer Code"}
                                    type={"text"}
                                    name={"subCode"}
                                    value={createAccount.subCode}
                                    // error={validation.email}
                                    OnChange={accountDetails}
                                />
                            </div>
                            <Input
                                label={"Registration Name"}
                                placeholder={"Registration Name"}
                                type={"text"}
                                name={"registrationName"}
                                value={createAccount.registrationName}
                                // error={validation.email}
                                OnChange={accountDetails}
                            />
                            <Input
                                label={"Address"}
                                placeholder={"Address"}
                                type={"text"}
                                name={"address"}
                                value={createAccount.address}
                                // error={validation.email}
                                OnChange={accountDetails}
                            />
                            <div id={Style.inputDiv} className={Style.inputDiv}>
                                <Input
                                    label={"State/Province"}
                                    placeholder={"State/Province"}
                                    type={"text"}
                                    name={"state"}
                                    value={createAccount.state}
                                    // error={validation.email}
                                    OnChange={accountDetails}
                                />
                                <Input
                                    label={"Town/City"}
                                    placeholder={"Town/City"}
                                    type={"text"}
                                    name={"town"}
                                    value={createAccount.town}
                                    // error={validation.email}
                                    OnChange={accountDetails}
                                />
                                <Input
                                    label={"Post/ZipCode"}
                                    placeholder={"Post/ZipCode"}
                                    type={"tel"}
                                    name={"zipcode"}
                                    value={createAccount.zipcode}
                                    // error={validation.email}
                                    OnChange={accountDetails}
                                />
                            </div>
                            <div id={Style.Checkbox_div}>
                                <input type="checkbox" name="" id="" />
                                Are you a branch office? Please tick below if you are a branch office
                            </div>
                            <div id={Style.ButtonDiv}>
                                <Link to={'/businessDetails'}>
                                    <Button
                                        type={"submit"}
                                        text={"Proceed"}
                                        onSubmit={handleSubmit} />
                                </Link>
                            </div>
                        </div>
                    </form>
                    <div id={Style.SignUpDiv}>Already have an account?<Link to={'/signIn'}>Sign In</Link> </div>
                </div>
            </div>
        </div>
    )
}

export default CreateNew_Account