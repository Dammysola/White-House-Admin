import React from 'react'
import Style from '../mainLayout2/MainLayout_Two.module.css'
import { Outlet } from 'react-router-dom'
// import { PopupContextHook } from '../PopupContext '
import NavBar from '../components/navBar/NavBar'
import Filter_Options from '../popUps/whitehouse/filter/Filter_Options'
import { PopupContextHook } from '../WhiteHouse_PopupContext'
import Performance_Details from '../pages/WhiteHouse/customerCare/performance/performance_details/Performance_Details'


const MainLayout_Two = () => {

  const {filterPopup} = PopupContextHook()

  return (
    <div id={Style.wrapper}>
      {filterPopup && <Performance_Details/>}
      <NavBar/>
      <div><Outlet /></div>
    </div>
  )
}

export default MainLayout_Two