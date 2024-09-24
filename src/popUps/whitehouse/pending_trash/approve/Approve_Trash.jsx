import React from 'react'
import Style from "./Approve.module.css"
import blue_success from "../../../../assets/svg/blue_success.svg"


const Approve_Trash = () => {
    return (
        <div id={Style.Approve_mainDiv}>
            <div id={Style.Approve_wrapperDiv}>
                <img id={Style.success_img} src={blue_success} alt="" />
                <p>Moved to trash</p>
                <div id={Style.btnDiv}>
                    <button>Continue</button>
                </div>
            </div>
        </div>
    )
}

export default Approve_Trash