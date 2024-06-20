import React from 'react'
import Style from '../add_product/Add_Product.module.css'
import Add_Card from '../../components/add_Card/Add_Card'



const Add_Product = () => {
  return (
    <div>
        <Add_Card
        cols = {"4"}
        rows = {"3"}
        placeholder = {"Category Name"}
        name = {"Category Name"} 
        AddText = {"Add Product Category"} 
        btnText = {"Create Category"}/>
    </div>
  )
}

export default Add_Product