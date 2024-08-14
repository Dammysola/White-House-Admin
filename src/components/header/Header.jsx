import React from 'react'
import Style from '../header/Header.module.css'
import dice from '../../assets/svg/Dice.svg'
import sports from '../../assets/svg/sport.svg'


const Header = (props) => {
    const { headerText, headerInfo, image, image2 } = props

    return (
        <div id={Style.HeaderDiv}>
            <div >

                <div id={Style.headerText}>{headerText}</div>
                <p>{headerInfo}</p>
            </div>
            <div id={Style.imgDiv}>
                <img src={image} alt="" />
                <img id={Style.sports_img} src={image2} alt="" />
            </div>
        </div>
    )
}

export default Header