import React from 'react'
import Style from '../component/Staff_Card.module.css'
import Person from '../../../../../assets/images/Person1.png'
import Button from '../../../../../components/button/Button'


const Staff_Card = () => {
    return (
        <div>
            <div id={Style.Staff_Card_WrapperDiv}>
                <img src={Person} alt="" />
                <div id={Style.Staff_Card_textDiv}>
                    <p className={Style.Staff_Card_nameText}>John Doe</p>
                    <p id={Style.Staff_Card_careRep}>Customer care representative</p>
                    <p >Online</p>
                    <Button
                        text={"View More Details"} />
                </div>
            </div>
        </div>
    )
}

export default Staff_Card