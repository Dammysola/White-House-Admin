import React from 'react'
import Style from '../mainLayout2/MainLayout_Two.module.css'
import Create_AccountNav from '../components/create_AccountNav/Create_AccountNav'
import { Outlet } from 'react-router-dom'
import Account_Nav from '../components/all_Account_Nav/Account_Nav'
import { PopupContextHook } from '../PopupContext '
import Add_CurrentAccount from '../popUps/add_Account/Add_CurrentAccount'
import Successful_Product from '../popUps/successful_product/Successful_Product'



const MainLayout_Two = () => {
  const {addAccountsPopup, successAccountPopup} = PopupContextHook()
  return (
    <div id={Style.wrapper}>
        <Account_Nav/>
        {addAccountsPopup && <Add_CurrentAccount/>}
        {successAccountPopup && <Successful_Product/>}
        <div><Outlet/></div>
    </div>
  )
}

export default MainLayout_Two