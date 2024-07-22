import React from 'react'
import Style from '../stats_card/Stats_Card.module.css'
import rise from '../../assets/svg/rise.svg'
import arrow_side from '../../assets/svg/arrow_side.svg'
import { Link } from 'react-router-dom'



const Stats_Card = (props) => {
    const { img, figure, text, to } = props
    return (
        <div>
            <div className={Style.Stats_CardDiv}>
                <img src={img} alt="" />
                <div>
                    <p className={Style.Card_figure}>{figure}</p>
                    <p className={Style.Card_text}>{text}</p>
                </div>
                <Link to={to}>
                    <img src={arrow_side} alt="" />
                </Link>
            </div>
        </div>
    )
}

export default Stats_Card