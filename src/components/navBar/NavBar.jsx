import React, { useState } from 'react'
import Style from './NavBar.module.css'
import arrowDown from '../../assets/svg/arrow_down.svg'
import mail from '../../assets/svg/transparent_mail.svg'
import user from '../../assets/svg/transparent_contact.svg'
import alphaBet_logo from '../../assets/svg/Alpha_Bet_Black_Logo.svg'
import mail_two from '../../assets/svg/staff_mail.svg'
import person from '../../assets/svg/staff_person.svg'
import { NavLink, useNavigate } from 'react-router-dom'


const NavBar = () => {

  const [activeLink8, setActiveLink8] = useState(false)
  const [activeNav, setActiveNav] = useState('');

  const handleNavClick = (navItem) => {
    setActiveNav(navItem);
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };



  return (
    <div>
      <div id={Style.Nav_Bar_Wrapper}>
        <div id={Style.NavBar_textDiv}>

          {/* <img src={alphaBet_logo} alt="" /> */}
          <p id={Style.logo}>Logo</p>

          <NavLink to={"/whiteHouseDashboard"} className={`${Style.NavBar_text} ${activeNav === 'dashboard' ? Style.Nav_styled_Link : ''}`} onClick={() => handleNavClick('dashboard')}>
            <p>Dashboard</p>
          </NavLink>

          <NavLink to={'/placebet'} className={`${Style.NavBar_text} ${activeNav === 'placebet' ? Style.Nav_styled_Link : ''}`} onClick={() => handleNavClick('placebet')}>
            <p>Bet Placed</p>
          </NavLink >

          <div className={`${Style.NavBar_text} ${activeNav === 'game' ? Style.Nav_styled_Link : ''}`}>
            <p className={Style.game}>Games <img src={arrowDown} alt="" /></p>
            <div id={Style.dropdown}>
              <ul>
                <NavLink to={'/dice'} onClick={() => handleNavClick('game')}><li><input type="radio" name="game" value="dice" id={Style.radio_input} /> Dice</li></NavLink>
                <NavLink to={'/sports'} onClick={() => handleNavClick('game')}><li><input type="radio" name="game" id="" value="sport" />Sports</li></NavLink>
              </ul>

            </div>
          </div>


          <NavLink to={'/allusers'} className={`${Style.NavBar_text} ${activeNav === 'users' ? Style.Nav_styled_Link : ''}`} onClick={() => handleNavClick('users')}>
            <p>Users</p>
          </NavLink>

          <NavLink id='transactions' to={'/transactions'} className={`${Style.NavBar_text} ${activeNav === 'transaction' ? Style.Nav_styled_Link : ''}`} onClick={() => handleNavClick('transaction')}>
            <p>Transactions</p>
          </NavLink>

          <NavLink to={'/queries'} className={`${Style.NavBar_text} ${activeNav === 'queries' ? Style.Nav_styled_Link : ''}`} onClick={() => handleNavClick('queries')}>
            <p>Queries</p>
          </NavLink>
        </div>
        <div id={Style.NavBar_ContactDiv}>
          <p onClick={toggleDropdown} className={`${Style.NavBar_text} ${activeNav === 'customerCare' ? Style.Nav_styled_Link : ''}`} > Customer Care


            {
              dropdownOpen && (
                <div id={Style.CustomerCare_details_mainDiv}>
                  <div id={Style.CustomerCare_details_wrapperDiv}>
                    <p>See details from the customer care unit</p>
                    <div id={Style.btnDiv}>
                      <NavLink to={"/customerCare"} onClick={() => handleNavClick('customerCare')}><button>Yes</button></NavLink>
                      <button onClick={() => toggleDropdown(false)}> Cancel</button>
                    </div>
                  </div>
                </div>
              )
            }
          </p>

          <p>Mgt</p>
          <p>English <img src={arrowDown} alt="" /></p>

          <div id={Style.NavBar_lastlineDiv}>
            <div id={Style.NavBar_line}></div>
            <img src={mail} alt="" />

            <NavLink to={'/profile'} onClick={() => handleNavClick('profile')}>
             <div id={Style.profile_img}>
             {activeNav === 'profile' ? <img src={person} alt="" /> : <img src={user} alt="" />}
             profile
             </div>
            </NavLink>

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