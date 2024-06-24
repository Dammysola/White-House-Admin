import React, { useState } from 'react'
import Style from '../successful_account/Successful_AccCreation.module.css'
import green_tick from '../../assets/svg/Green_tick.svg'
import cancel_img from '../../assets/svg/cancel_img.svg'
import Successful_Card from '../../components/successful_Card/Successful_Card'
import { PopupContextHook } from '../../PopupContext '



const Successful_AccCreation = () => {
  const { updateSuccessAccountPopup} = PopupContextHook()
  return (
    <div>
      <Successful_Card
      cancel = {()=>{updateSuccessAccountPopup(false)}}
      text= {"Congratulations! Your current account creation was successful"}/>

    </div>

  )
}

export default Successful_AccCreation