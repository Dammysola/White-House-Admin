import React from 'react'
import Style from '../all_Account_Nav/Account_Nav.module.css'
import alphaBet_logo from '../../assets/svg/Alpha_Bet_Black_Logo.svg'
import arrowDown from '../../assets/svg/arrow_down.svg'
import mail from '../../assets/svg/mail.svg'
import user from '../../assets/svg/user.svg'



const Account_Nav = () => {
  return (
    <div id={Style.nav}>
        <nav>
        <div id={Style.Nav_Bar_Wrapper}>
        <div>
          <img src={alphaBet_logo} alt="" />
        </div>
        <div id={Style.NavBar_textDiv}>
          <p>Dashboard</p>
          <button id={Style.Nav_Dashboard_button}>Accounts</button>
          <p>Products</p>
          <p>Payment <img src={arrowDown} alt="" /></p>
          <p>Transactions</p>
          <p>Customers</p>
          <p>Staff <img src={arrowDown} alt="" /></p>
          <p>Dev/API</p>
          <p>Settings</p>
        </div>
        <div id={Style.NavBar_ContactDiv}>
          <button>English <img src={arrowDown} alt="" /></button>
          <div></div>
          <img src={mail} alt="" />
          <img src={user} alt="" />
          <p>XCel Inc. Limited <img src={arrowDown} alt="" /></p>
        </div>
      </div>  
        </nav>
        
    </div>
  )
}

export default Account_Nav