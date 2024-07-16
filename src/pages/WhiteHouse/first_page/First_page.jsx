import React from 'react'
import Style from '../first_page/First_page.module.css'
import alphaBet_logo from '../../../assets/svg/Alpha_Bet_Black_Logo.svg' 
import arrow_down from '../../../assets/svg/arrow_down-dark.svg'

const First_page = () => {
  return (
    <div id={Style.First_page_mainDiv}>
        <div id={Style.First_page_wrapperDiv}>
            <img src={alphaBet_logo} alt="" />
            <p>Welcome!!!</p>
            <div>
                <button>Admin</button>
                <button>Staff</button>
            </div>
        </div>
        <div id={Style.First_page_WhiteHouse_textDiv}>
          <div id={Style.headerText_Div}>
            <p id={Style.WhiteHouseText}>The White House</p>
            <p id={Style.englishText}>English <img src={arrow_down} alt="" /></p>
          </div>
        </div>
    </div>
  )
}

export default First_page