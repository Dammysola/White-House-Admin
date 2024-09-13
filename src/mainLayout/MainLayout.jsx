import React, { useEffect, useState } from 'react'
import Style from '../mainLayout/MainLayout.module.css'
import { Outlet, useLocation } from 'react-router-dom'
import Create_AccountNav from '../components/create_AccountNav/Create_AccountNav'
import CustomerCare_NavBar from '../components/customerCare_Navbar/CustomerCare_NavBar'
import { PopupContextHook } from '../WhiteHouse_PopupContext'
import Performance_Details from '../pages/WhiteHouse/customerCare/performance/performance_details/Performance_Details'
import Revenue_Details from '../pages/WhiteHouse/admin/foot_soldiers/revenue_details/Revenue_Details'
import ForgotPassword from '../popUps/whitehouse/forgotPassword/ForgotPassword'
// import SignIn from '../pages/signUp/SignIn'


const MainLayout = () => {

  const location = useLocation();
  const showNavbar = location.pathname !== '/signIn';

  const {filterPopup, passwordPopup} = PopupContextHook()


  return (
    
    <div id={Style.wrapper}>
      
      {showNavbar && <CustomerCare_NavBar/>}

      {filterPopup && <Performance_Details/>}
      
      {passwordPopup && <ForgotPassword/>}

      

      <div><Outlet /></div >
    </div>
  )
}

export default MainLayout