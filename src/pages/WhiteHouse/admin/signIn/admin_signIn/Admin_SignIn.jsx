import React from 'react'
import Style from './Admin_SignIn.module.css'
import Input from '../../../../../components/SignUp_input/Input'
import Button from '../../../../../components/button/Button'
import revenue_BG from '../../../../../assets/svg/revenue_BG.svg'
import chart_BG from '../../../../../assets/svg/chart_BG.svg'
import pie_BG from '../../../../../assets/svg/pie_BG.svg'
import game_BG from '../../../../../assets/svg/game_BG.svg'
// import lady_BG from '../../../../../assets/svg/lady_BG.svg'
import WH_logo from '../../../../../assets/images/WH_logo.png'
import { Link } from 'react-router-dom'


const Admin_SignIn = () => {
  return (
    <div id={Style.SignIn_mainDiv}>
      <div id={Style.scattered_imagesDiv}>
        <img id={Style.gamePad} src={game_BG} alt="" />
        <img src={revenue_BG} alt="" />

        <div id={Style.pie_Chart_textDiv}>
          <img src={pie_BG} alt="" />
          <div>
            <p>Daily Win</p>
            <p>$250,000</p>
          </div>
        </div>
        <img src={chart_BG} alt="" />
        {/* <img id={Style.gamePad} src={lady_BG} alt="" /> */}
      </div>

      <div id={Style.admin_signIn_wrapperDiv}>
        <div id={Style.SignIn_headerDiv}>
          <img src={WH_logo} alt="" />

          <p id={Style.signIn_Text}>Sign in into your Account</p>
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
            <p id={Style.forget_passwordText}>Forgot Password?</p>

          </div>

          <Link to={"/whiteHouseDashboard"}> <div id={Style.btnDiv}><Button text={"Sign In"} /></div></Link>

        </form>
      </div>
    </div >
  )
}

export default Admin_SignIn