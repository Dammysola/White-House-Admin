import React from 'react'
import Style from '../component/Staff_Card.module.css'
import Button from '../../../../../../components/button/Button'
import verified from '../../../../../../assets/images/subscribed.png'
import { Link } from 'react-router-dom'


const Staff_Card = (props) => {
    const { img, status, position, name, to } = props
    return (
        <div id={Style.Staff_Card_mainDiv}>

            <div id={Style.imgDiv}>                            
                {/* <img id={Style.verified_img} src={verified} alt="" /> */}
            </div>
            <div id={Style.Staff_Card_WrapperDiv}>
                <img src={img} alt="" />
                <div id={Style.Staff_Card_textDiv}>
                    <p className={Style.Staff_Card_nameText}>{name}</p>
                    <p className={Style.Staff_Card_careRep}>{position}</p>
                    <p className={Style.Staff_Card_onlineDiv}> <div className={Style.Staff_Card_online_signalDiv}></div>{status}</p>
                    <Link to={to}>
                        <Button
                            text={"View More Details"} />
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default Staff_Card