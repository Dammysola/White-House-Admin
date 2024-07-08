import React from 'react'
import Style from '../successful_product/Successful_Product.module.css'
import green_tick from '../../assets/svg/Green_tick.svg'
import cancel_img from '../../assets/svg/cancel_img.svg'
import Successful_Card from '../../components/successful_Card/Successful_Card'
import { PopupContextHook } from '../../PopupContext '




const Successful_Product = () => {
  const { updateSuccessProductPopup } = PopupContextHook()

  return (
    <div>
        <Successful_Card
        cancel = {()=>updateSuccessProductPopup(false)}
        text ={"Congratulations! You have successfully created a category for your products."}/>
    </div>
  )
}

export default Successful_Product