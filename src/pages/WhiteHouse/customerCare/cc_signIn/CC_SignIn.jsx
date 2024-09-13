import React from 'react'
import Style from '../cc_signIn/CC_SignIn.module.css'
import WH_logo from '../../../../assets/images/WH_logo.png'
import Input from '../../../../components/SignUp_input/Input'
import { Link } from 'react-router-dom'
import Button from '../../../../components/button/Button'
import { PopupContextHook } from '../../../../WhiteHouse_PopupContext'

const CC_SignIn = () => {

  const { updatePasswordPopup } = PopupContextHook()

  const showPopup = () => {
    updatePasswordPopup(true)
  }
  return (
    <div id={Style.CC_SignIn_mainDiv}>

      <div id={Style.CC_SignIn_wrapperDiv}>
        <div id={Style.SignIn_headerDiv}>
          <img src={WH_logo} alt="" />

          <p id={Style.signIn_Text}>Sign In into your Account</p>
          <p id={Style.login_detailsText}>Sign in by filling your administrator login details below</p>
        </div>

        <form action="">
          <div id={Style.inputDiv}>
            <Input
              placeholder={"account@email.com"}
              label={"Email"} />

            <Input
              placeholder={"Password"}
              label={"Password"} />
          </div>

          <div id={Style.checkbox_passwordDiv}>
            {/* <div id={Style.checkBox_textDiv}> */}
            {/* <input type="checkbox" name="" id="" /> */}
            <p id={Style.Stay_signedIn}> <input type="checkbox" name="" id="" /> Stay Signed In</p>
            {/* </div> */}
            <p id={Style.forget_passwordText} onClick={showPopup}>Forgot Password?</p>

          </div>

          <Link to={"/"}> <div id={Style.btnDiv}><Button text={"Sign In"} /></div></Link>

        </form>
      </div>
    </div>
  )
}

export default CC_SignIn