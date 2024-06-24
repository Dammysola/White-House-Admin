import React from 'react'
import Style from '../mainLayout2/MainLayout_Two.module.css'
import Create_AccountNav from '../components/create_AccountNav/Create_AccountNav'
import { Outlet } from 'react-router-dom'
import Account_Nav from '../components/all_Account_Nav/Account_Nav'
import { PopupContextHook } from '../PopupContext '
import Add_CurrentAccount from '../popUps/add_Account/Add_CurrentAccount'
import Successful_Product from '../popUps/successful_product/Successful_Product'
import Successful_AccCreation from '../popUps/successful_account/Successful_AccCreation'
import Delete_Products from '../popUps/delete_Products/Delete_Products'
import Add_Product from '../popUps/add_product/Add_Product'
import Create_Product from '../popUps/create_Product/Create_Product'
import Product_Confirmation from '../popUps/Create_Product_Confirmation/Product_Confirmation'



const MainLayout_Two = () => {
  const {addAccountsPopup, successAccountPopup, deleteProductsPopup, productConfirmPopup, createProductsPopup, addProductsPopup, successProductPopup} = PopupContextHook()
  return (
    <div id={Style.wrapper}>
        <Account_Nav/>
        {addAccountsPopup && <Add_CurrentAccount/>}
        {successAccountPopup && <Successful_AccCreation/>}
        {deleteProductsPopup && <Delete_Products/>}
        {addProductsPopup && <Add_Product/>}
        {successProductPopup && <Successful_Product/>}
        {createProductsPopup && <Create_Product/>}
        {productConfirmPopup && <Product_Confirmation/>}
        <div><Outlet/></div>
    </div>
  )
}

export default MainLayout_Two