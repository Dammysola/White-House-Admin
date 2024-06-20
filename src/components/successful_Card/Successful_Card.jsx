import React from 'react'
import Style from '../successful_Card/Successful_Card.module.css'
import green_tick from '../../assets/svg/Green_tick.svg'
import cancel_img from '../../assets/svg/cancel_img.svg'




const Successful_Card = (props) => {
    const {text} = props
  return (
    <div id={Style.Successful_AccCreation_mainDiv}>
        <div id={Style.Successful_AccCreation_wrapperDiv}>
        <div id={Style.cancelDiv}>
            <div></div>
            <img src={cancel_img} alt="" />
        </div>
        <div id={Style.Successful_AccCreation_TextDiv}>
            <img src={green_tick} alt="" />
            <div>
                <p>Successful</p>
                <div>{text}</div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Successful_Card