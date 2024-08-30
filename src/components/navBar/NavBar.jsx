import React, { useState } from 'react'
import Style from './NavBar.module.css'
import arrowDown from '../../assets/svg/arrow_down.svg'
import mail from '../../assets/svg/mail.svg'
import user from '../../assets/svg/user.svg'
import alphaBet_logo from '../../assets/svg/Alpha_Bet_Black_Logo.svg'
import { NavLink } from 'react-router-dom'


const NavBar = () => {

  const [activeLink1, setActiveLink1] = useState(false)
  const [activeLink2, setActiveLink2] = useState(false)
  const [activeLink3, setActiveLink3] = useState(false)
  const [activeLink4, setActiveLink4] = useState(false)
  const [activeLink5, setActiveLink5] = useState(false)
  const [activeLink6, setActiveLink6] = useState(false)
  const [activeLink7, setActiveLink7] = useState(false)
  const [activeLink8, setActiveLink8] = useState(false)
  const [activeRadio, setActiveRadio] = useState(false)

  
  const radio = () => {
    setActiveRadio(true)
  }


  const handleClick = (index) => {

    if (index == 1) {

      setActiveLink1(true)
      setActiveLink2(false)
      setActiveLink3(false)
      setActiveLink4(false)
      setActiveLink5(false)
      setActiveLink6(false)
      setActiveLink7(false)
      
    } else if (index == 2) {

      setActiveLink1(false)
      setActiveLink2(true)
      setActiveLink3(false)
      setActiveLink4(false)
      setActiveLink5(false)
      setActiveLink6(false)
      setActiveLink7(false)

    } else if (index == 3) {

      setActiveLink1(false)
      setActiveLink2(false)
      setActiveLink3(true)
      setActiveLink4(false)
      setActiveLink5(false)
      setActiveLink6(false)
      setActiveLink7(false)

    }
    else if (index == 4) {

      setActiveLink1(false)
      setActiveLink2(false)
      setActiveLink3(false)
      setActiveLink4(true)
      setActiveLink5(false)
      setActiveLink6(false)
      setActiveLink7(false)

    }
    else if (index == 5) {

      setActiveLink1(false)
      setActiveLink2(false)
      setActiveLink3(false)
      setActiveLink4(false)
      setActiveLink5(true)
      setActiveLink6(false)
      setActiveLink7(false)

    }
    else if (index == 6) {

      setActiveLink1(false)
      setActiveLink2(false)
      setActiveLink3(false)
      setActiveLink4(false)
      setActiveLink5(false)
      setActiveLink6(true)
      setActiveLink7(false)
    }
    else if (index == 7) {

      setActiveLink1(false)
      setActiveLink2(false)
      setActiveLink3(false)
      setActiveLink4(false)
      setActiveLink5(false)
      setActiveLink6(false)
      setActiveLink7(true)
      setActiveLink8(false)
    }
  };

  return (
    <div>
      <div id={Style.Nav_Bar_Wrapper}>
        <div id={Style.NavBar_textDiv}>

          {/* <img src={alphaBet_logo} alt="" /> */}
          <p id={Style.logo}>Logo</p>
          
          <NavLink to={"/whiteHouseDashboard"} className={`${activeLink1 ? Style.Nav_styled_Link : Style.NavBar_text}`} onClick={() => handleClick(1)}>
            <p>Dashboard</p>
          </NavLink>

          <NavLink to={'/placebet'} className={`${activeLink2 ? Style.Nav_styled_Link : Style.NavBar_text}`} onClick={() => handleClick(2)}>
            <p>Bet Placed</p>
          </NavLink >

          <NavLink to={'/dice'} className={`${activeLink3 ? Style.Nav_styled_Link : Style.NavBar_text}`} onClick={() => handleClick(3)}>
           
            <p id={Style.game}>Games <img src={arrowDown} alt="" /></p>
            <div id={Style.dropdown}>
              <ul>
                <NavLink to={'/dice'}><li><input type="radio" onClick={radio} className={`${activeRadio ? Style.radioInput : Style.radio_input}`} name="game" value="dice" id={Style.radio_input} /> Dice</li></NavLink>
                <NavLink to={'/sports'}><li><input type="radio" name="game" id="" value="sport" />Sports</li></NavLink>
              </ul>      

            </div>
          </NavLink>

          <NavLink to={'/allusers'} className={`${activeLink4 ? Style.Nav_styled_Link : Style.NavBar_text}`} onClick={() => handleClick(4)}>
            <p>Users</p>
          </NavLink>

          <NavLink id='transactions' to={'/transactions'} className={`${activeLink5 ? Style.Nav_styled_Link : Style.NavBar_text}`} onClick={() => handleClick(5)}>
            <p>Transactions</p>
          </NavLink>

          <NavLink to={'/queries'} className={`${activeLink7 ? Style.Nav_styled_Link : Style.NavBar_text}`} onClick={() => handleClick(7)}>
          <p>Queries</p>
          </NavLink>
        </div>
        <div id={Style.NavBar_ContactDiv}>
          <NavLink to={'/customerCare'} className={`${activeLink6 ? Style.Nav_styled_Link : Style.NavBar_text}`} onClick={() => handleClick(6)}>
            <p>Customer Care</p>
          </NavLink>
          <p>Mgt</p>
          <p>English <img src={arrowDown} alt="" /></p>
          <div id={Style.NavBar_lastlineDiv}>
            <div id={Style.NavBar_line}></div>
            <img src={mail} alt="" />
            <img src={user} alt="" />

              <NavLink to={''} className={`${activeLink8 ? Style.Nav_styled_Link : Style.NavBar_text}`}>
                  <p id={Style.NavBar_businessName}>WhiteHouse Limited <img src={arrowDown} alt="" /></p>
                  <div id={Style.Business_name_dropdown}>
                    <ul>

                      <NavLink to={'/allAccounts'}><li id={Style.Alphabet}>AlphaBet Limited</li></NavLink>
                    </ul>
                  </div>
              </NavLink>
          </div>
        </div>
      </div>

    </div>
  )
}

export default NavBar