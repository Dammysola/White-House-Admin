import React from 'react'
import Style from '../mainLayout2/MainLayout_Two.module.css'
import { Outlet } from 'react-router-dom'
// import { PopupContextHook } from '../PopupContext '
import NavBar from '../components/navBar/NavBar'
import Filter_Options from '../popUps/whitehouse/filter/Filter_Options'
import { PopupContextHook } from '../WhiteHouse_PopupContext'


const MainLayout_Two = () => {

  const {filterPopup} = PopupContextHook()

  return (
    <div id={Style.wrapper}>
      {filterPopup && <Filter_Options/>}
      <NavBar/>
      <div><Outlet /></div>
    </div>
  )
}

export default MainLayout_Two