import React from 'react'
import Style from '../Create_Product_Confirmation/Product_Confirmation.module.css'
import back_arrow from '../../assets/svg/black_arrow_back.svg'
import Button from '../../components/button/Button'
import { Link } from 'react-router-dom'
import { PopupContextHook } from '../../PopupContext '


const Product_Confirmation = () => {
    const { updateProductConfirmPopup } = PopupContextHook()

    return (
        <div id={Style.Product_Confirm_mainDiv}>
            <div id={Style.Product_Confirm_WrapperDiv}>

                <div id={Style.Product_Confirm_Wrapper}>
                    <div id={Style.Product_Confirm_header}><img src={back_arrow} alt="" />Confirmation</div>

                    <div id={Style.Product_Confirm_TextDiv}>
                        <p>Are you sure you want to create a new wallet?</p>
                        <div id={Style.BtnDiv}>
                            <button id={Style.discard_Btn} onClick={()=>updateProductConfirmPopup(false)}>Discard</button>
                            <Link to={'/addSettlement'}>
                                <Button
                                    text={"Create Wallet"}
                                    type={"submit"} />
                            </Link>
                            
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Product_Confirmation