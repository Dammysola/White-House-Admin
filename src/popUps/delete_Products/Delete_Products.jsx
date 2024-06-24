import React from 'react'
import Style from '../delete_Products/Delete_Products.module.css'
import back_arrow from '../../assets/svg/black_arrow_back.svg'
import { Link } from 'react-router-dom'
import Button from '../../components/button/Button'
import cancel_img from '../../assets/svg/cancel_img.svg'
import { PopupContextHook } from '../../PopupContext '



const Delete_Products = () => {
  // const {updateDeleteProductsPopup } = PopupContextHook()

  const cancel =()=>{
    updateDeleteProductsPopup(false)
  }
  return (
    <div id={Style.Delete_Products_mainDiv}>
      <div id={Style.Delete_Products_WrapperDiv}>
        <div id={Style.cancelDiv}>
          <div></div>
          <button onClick={cancel}><img src={cancel_img} alt="" /></button>
        </div>
        <div id={Style.Delete_Products_Wrapper}>
          <div id={Style.Delete_Products_header}><img src={back_arrow} alt="" />Confirmation</div>

          <div id={Style.Delete_Products_TextDiv}>
            <p>Are you sure you want to delete this product?</p>
            <div id={Style.BtnDiv}>
              <button id={Style.discard_Btn}>Discard</button>

              <Button
                text={"Delete Product"}
                type={"submit"}
              />


            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Delete_Products