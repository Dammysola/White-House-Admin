import React from 'react'
import Style from './NavBar.module.css'
import arrowDown from '../../assets/svg/arrow_down.svg'
import mail from '../../assets/svg/mail.svg'
import user from '../../assets/svg/user.svg'
import alphaBet_logo from '../../assets/svg/Alpha_bet_logo.svg'


const NavBar = () => {
  return (
    <div>
      <div id={Style.Nav_Bar_Wrapper}>
        <div>
          <img src={alphaBet_logo} alt="" />
        </div>
        <div id={Style.NavBar_textDiv}>
          <button id={Style.Nav_Dashboard_button}>Dashboard</button>
          <p>User Mgt.</p>
          <p>Bet Mgt.</p>
          <p>Analytics <img src={arrowDown} alt="" /></p>
          <p>Transactions</p>
          <p>Support</p>
          <p>Staff <img src={arrowDown} alt="" /></p>
          <p>Dev/API</p>
          <p>Settings</p>
        </div>
        <div id={Style.NavBar_ContactDiv}>
          <button>English <img src={arrowDown} alt="" /></button>
          <div></div>
          <img src={mail} alt="" />
          <img src={user} alt="" />
          <p>AlphaBet Limited <img src={arrowDown} alt="" /></p>
        </div>
      </div>
    </div>
  )
}

export default NavBar