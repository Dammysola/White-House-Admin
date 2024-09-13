import React from 'react'
import Style from '../mainLayout2/MainLayout_Two.module.css'
import { Outlet, useLocation } from 'react-router-dom'
// import { PopupContextHook } from '../PopupContext '
import NavBar from '../components/navBar/NavBar'
import Filter_Options from '../popUps/whitehouse/filter/Filter_Options'
import { PopupContextHook } from '../WhiteHouse_PopupContext'
import Performance_Details from '../pages/WhiteHouse/customerCare/performance/performance_details/Performance_Details'
import Revenue_Details from '../pages/WhiteHouse/admin/foot_soldiers/revenue_details/Revenue_Details'
import ForgotPassword from '../popUps/whitehouse/forgotPassword/ForgotPassword'


const MainLayout_Two = () => {

 const location = useLocation();
  const showNavbar = location.pathname !== '/admin_signIn';

  const {revenuePopup, passwordPopup} = PopupContextHook()

  return (
    <div id={Style.wrapper}>
      {/* {filterPopup && <Performance_Details/>} */}
      {showNavbar && <NavBar/>}

      {revenuePopup && <Revenue_Details/>}

      {passwordPopup && <ForgotPassword/>}
      
      <div><Outlet/></div>
    </div>
  )
}

export default MainLayout_Two