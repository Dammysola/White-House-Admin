import React, { useEffect, useState } from 'react'
import Style from '../mainLayout/MainLayout.module.css'
import { Outlet, useLocation } from 'react-router-dom'
import Create_AccountNav from '../components/create_AccountNav/Create_AccountNav'
// import SignIn from '../pages/signUp/SignIn'


const MainLayout = () => {

  const location = useLocation();
  const showNavbar = location.pathname !== '/signIn';

  return (
    
    <div id={Style.wrapper}>
      {/* {showNavbar && <Create_AccountNav />} */}

      (<div><Outlet /></div >)
    </div>
  )
}

export default MainLayout