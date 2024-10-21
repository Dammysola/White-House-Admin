import React from 'react'
import Style from './Suspend_Reason.module.css'
import Button from '../../components/button/Button'

const Suspend_Reason = () => {

    return (

        <div id={Style.suspend_reason_mainDiv}>

            <div id={Style.suspend_reason_container}>

                <div id={Style.reasonText}>Reason for Action</div>

                <form action="">

                    <div id={Style.textareaDiv}>

                        <textarea name="" id={Style.textarea} placeholder=" Type your Reason"></textarea>
                        <label htmlFor="" id={Style.label}>Reason</label>

                    </div>

                    <Button text={"Suspend Account"} />
                </form>

            </div>
        </div >
    )
}

export default Suspend_Reason