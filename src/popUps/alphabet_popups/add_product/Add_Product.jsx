import React from 'react'
import Style from '../add_product/Add_Product.module.css'
import Add_Card from '../../components/add_Card/Add_Card'
import { PopupContextHook } from '../../PopupContext '



const Add_Product = () => {

  const { updateAddProductsPopup, updateSuccessProductPopup } = PopupContextHook()

  const createProduct_success = () => {
    updateAddProductsPopup(false)
    updateSuccessProductPopup(true)
  }

  return (
    <div>
        <Add_Card
        cols = {"4"}
        rows = {"3"}
        placeholder = {"Category Name"}
        name = {"Category Name"} 
        AddText = {"Add Product Category"} 
        btnText = {"Create Category"}
        onClick = {createProduct_success}/>
    </div>
  )
}

export default Add_Product