import React from 'react'
import Style from '../mainLayout/MainLayout.module.css'
import { Outlet } from 'react-router-dom'
import Create_AccountNav from '../components/create_AccountNav/Create_AccountNav'



const MainLayout = () => {
  return (
    <div id={Style.wrapper}>
        <Create_AccountNav/>
        
        <div><Outlet/></div>
    </div>
  )
}

export default MainLayout