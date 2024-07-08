import React from 'react'
import Style from '../header/Header.module.css'
import dice from '../../assets/svg/Dice.svg'


const Header = (props) => {
    const { headerText, headerInfo, image } = props

    return (
        <div id={Style.HeaderDiv}>
            <div >

                <div id={Style.headerText}>{headerText}</div>
                <p>{headerInfo}</p>
            </div>
            <img src={image} alt="" />
        </div>
    )
}

export default Header