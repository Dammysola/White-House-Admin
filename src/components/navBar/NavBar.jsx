import React, { useState } from 'react'
import Style from './NavBar.module.css'
import arrowDown from '../../assets/svg/arrow_down.svg'
import mail from '../../assets/svg/mail.svg'
import user from '../../assets/svg/user.svg'
import alphaBet_logo from '../../assets/svg/Alpha_bet_logo.svg'
import { NavLink } from 'react-router-dom'


const NavBar = () => {

  const [activeLink1, setActiveLink1] = useState(false)
  const [activeLink2, setActiveLink2] = useState(false)
  const [activeLink3, setActiveLink3] = useState(false)
  const [activeLink4, setActiveLink4] = useState(false)
  const [activeLink5, setActiveLink5] = useState(false)
  const [activeLink6, setActiveLink6] = useState(false)

  const handleClick = (index) => {

    if (index == 1) {

      setActiveLink1(true)
      setActiveLink2(false)
      setActiveLink3(false)
      setActiveLink4(false)
      setActiveLink5(false)
      setActiveLink6(false)

    } else if (index == 2) {

      setActiveLink1(false)
      setActiveLink2(true)
      setActiveLink3(false)
      setActiveLink4(false)
      setActiveLink5(false)
      setActiveLink6(false)

    } else if (index == 3) {

      setActiveLink1(false)
      setActiveLink2(false)
      setActiveLink3(true)
      setActiveLink4(false)
      setActiveLink5(false)
      setActiveLink6(false)
    }
    else if (index == 4) {

      setActiveLink1(false)
      setActiveLink2(false)
      setActiveLink3(false)
      setActiveLink4(true)
      setActiveLink5(false)
      setActiveLink6(false)
    }
    else if (index == 5) {

      setActiveLink1(false)
      setActiveLink2(false)
      setActiveLink3(false)
      setActiveLink4(false)
      setActiveLink5(true)
      setActiveLink6(false)
    }
    else if (index == 6) {

      setActiveLink1(false)
      setActiveLink2(false)
      setActiveLink3(false)
      setActiveLink4(false)
      setActiveLink5(false)
      setActiveLink6(true)
    }
  };

  return (
    <div>
      <div id={Style.Nav_Bar_Wrapper}>
        <div id={Style.NavBar_textDiv}>
          <img src={alphaBet_logo} alt="" />
          <NavLink to={'/whiteHouseDashboard'} className={`${activeLink1 ? Style.Nav_styled_Link : Style.NavBar_text}`} onClick={() => handleClick(1)}>
            <p>Dashboard</p>
          </NavLink>

          <NavLink to={'/placebet'} className={`${activeLink2 ? Style.Nav_styled_Link : Style.NavBar_text}`} onClick={() => handleClick(2)}>
            <p>Bet Placed</p>
          </NavLink >

          <NavLink to={'/dice'} className={`${activeLink3 ? Style.Nav_styled_Link : Style.NavBar_text}`} onClick={() => handleClick(3)}>
            <div>
              <p id={Style.game}>Games <img src={arrowDown} alt="" /></p>
              <div id={Style.dropdown}>
                <ul>
                  <NavLink to={'/dice'}><li>Dice</li></NavLink>
                  <NavLink><li>Lorem</li></NavLink>
                </ul>
              </div>

            </div>
          </NavLink>

          <NavLink to={'/allusers'} className={`${activeLink6 ? Style.Nav_styled_Link : Style.NavBar_text}`} onClick={() => handleClick(6)}>
            <p>Users</p>
          </NavLink>

          <NavLink id='transactions' to={'/transactions'} className={`${activeLink4 ? Style.Nav_styled_Link : Style.NavBar_text}`} onClick={() => handleClick(4)}>
            <p>Transactions</p>
          </NavLink>
          <p>Reports</p>
        </div>
        <div id={Style.NavBar_ContactDiv}>
          <NavLink to={'/customerCare'} className={`${activeLink5 ? Style.Nav_styled_Link : Style.NavBar_text}`} onClick={() => handleClick(5)}>
            <p>Customer Care</p>
          </NavLink>
          <p>Mgt</p>
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