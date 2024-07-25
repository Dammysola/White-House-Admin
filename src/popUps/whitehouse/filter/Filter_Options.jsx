import React from 'react'
import Style from '../filter/Filter_Options.module.css'


const Filter_options = () => {
  return (
    <div id={Style.Filter_options_mainDiv}>
        <div id={Style.Filter_options_wrapperDiv}>
            <p><input type="radio" name="" id="" /> By User ID</p>
            <p><input type="radio" name="" id="" /> By Ticket ID</p>
        </div>
    </div>
  )
}

export default Filter_options