import React from 'react'
import Style from "./Confirm.module.css"


const Confirm_Pending = () => {
    return (
        <div id={Style.Confirm_mainDiv}>
            <div id={Style.Confirm_wrapperDiv}>
                <p>Are you sure you want to approve this request?</p>
                <div id={Style.btnDiv}>
                    <button>Yes</button>
                    <button>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default Confirm_Pending