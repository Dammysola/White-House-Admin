import React from 'react'
import Style from '../component/Staff_Card.module.css'
import Person from '../../../../../assets/images/Person1.png'
import Button from '../../../../../components/button/Button'


const Staff_Card = (props) => {
    const {img, status, position, name} = props
    return (
        <div>
            <div id={Style.Staff_Card_WrapperDiv}>
                <img src={img} alt="" />
                <div id={Style.Staff_Card_textDiv}>
                    <p className={Style.Staff_Card_nameText}>{name}</p>
                    <p className={Style.Staff_Card_careRep}>{position}</p>
                    <p className={Style.Staff_Card_onlineDiv}> <div className={Style.Staff_Card_online_signalDiv}></div>{status}</p>
                    <Button
                        text={"View More Details"} />
                </div>
            </div>
        </div>
    )
}

export default Staff_Card