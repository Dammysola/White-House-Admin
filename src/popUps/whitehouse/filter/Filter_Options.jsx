import React from 'react'
import Style from '../filter/Filter_Options.module.css'


const Filter_options = () => {
  return (
    <div id={Style.Filter_options_mainDiv}>
        <div id={Style.Filter_options_wrapperDiv}>
            <div><input type="radio" name="" id="" /> By Users ID</div>
            <div><input type="radio" name="" id="" /> By Ticket ID</div>
        </div>
    </div>
  )
}

export default Filter_options