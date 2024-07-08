import React from 'react'
import Style from '../mainLayout2/MainLayout_Two.module.css'
import { Outlet } from 'react-router-dom'
import { PopupContextHook } from '../PopupContext '
// import Add_CurrentAccount from '../popUps/add_Account/Add_CurrentAccount'
// import Successful_Product from '../popUps/successful_product/Successful_Product'
// import Successful_AccCreation from '../popUps/successful_account/Successful_AccCreation'
// import Delete_Products from '../popUps/delete_Products/Delete_Products'
// import Add_Product from '../popUps/add_product/Add_Product'
// import Create_Product from '../popUps/create_Product/Create_Product'
// import Product_Confirmation from '../popUps/Create_Product_Confirmation/Product_Confirmation'
// import Move_to_bank from '../popUps/move_to_bank/Move_to_bank'
import NavBar from '../components/navBar/NavBar'


const MainLayout_Two = () => {

  const { addAccountsPopup, successAccountPopup, moveToBankPopup, deleteProductsPopup, productConfirmPopup, createProductsPopup, addProductsPopup, successProductPopup, } = PopupContextHook()
  return (
    <div id={Style.wrapper}>
      {/* <Account_Nav /> */}
      <NavBar/>
      {/* {addAccountsPopup && <Add_CurrentAccount />}
      {successAccountPopup && <Successful_AccCreation />}
      {deleteProductsPopup && <Delete_Products />}
      {addProductsPopup && <Add_Product />}
      {successProductPopup && <Successful_Product />}
      {createProductsPopup && <Create_Product />}
      {productConfirmPopup && <Product_Confirmation />}
      {moveToBankPopup && <Move_to_bank/>} */}
      <div><Outlet /></div>
    </div>
  )
}

export default MainLayout_Two