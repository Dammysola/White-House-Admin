import React from 'react'
import Style from '../header/Header.module.css'


const Header = (props) => {
    const { headerText, headerInfo } = props

    return (
        <div>
            <div id={Style.HeaderDiv}>

                <div id={Style.headerText}>{headerText}</div>
                <p>{headerInfo}</p>
            </div>
        </div>
    )
}

export default Header