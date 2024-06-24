import React, { useState } from 'react'
import Style from '../all_Account_Nav/Account_Nav.module.css'
import alphaBet_logo from '../../assets/svg/Alpha_Bet_Black_Logo.svg'
import arrowDown from '../../assets/svg/arrow_down.svg'
import mail from '../../assets/svg/mail.svg'
import user from '../../assets/svg/user.svg'
import { NavLink } from 'react-router-dom';



const Account_Nav = () => {
  const [activeLink1, setActiveLink1] = useState(false)
  const [activeLink2, setActiveLink2] = useState(false)
  const [activeLink3, setActiveLink3] = useState(false)

  const handleClick = (index) => {
    if (index == 1) {

      setActiveLink1(!activeLink1)

    } else if
      (index == 2) {

      setActiveLink2(!activeLink2)

    }
    else if (index == 3) {

      setActiveLink3(!activeLink3)
    }
  };




  return (
    <div id={Style.nav}>
      <nav>
        <div id={Style.Nav_Bar_Wrapper}>
          <div>
            <img src={alphaBet_logo} alt="" />
          </div>
          <div id={Style.NavBar_textDiv}>
            <NavLink id='account' to={'/allAccounts'} className={`${activeLink1 ? Style.Nav_styled_Link : Style.NavBar_text}`} onClick={() => handleClick(1)}>
              <p>Dashboard</p>
            </NavLink>

            <NavLink id='account' to={'/allAccounts'} className={`${activeLink2 ? Style.Nav_styled_Link : Style.NavBar_text}`} onClick={() => handleClick(2)}>
              <p>Accounts</p>
            </NavLink>



            <NavLink id='account' to={'/products'} className={`${activeLink3 ? Style.Nav_styled_Link : Style.NavBar_text}`} onClick={() => handleClick(3)}>
              <p>Products</p>
            </NavLink>

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