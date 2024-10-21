import React from 'react'
import Style from "./Accounts_Card.module.css"
import { Link } from 'react-router-dom'
import Button from '../../../../../../components/button/Button'



const Accounts_Card = (props) => {

    const { img, status, position, name, account, to, BG, statusColor } = props


    return (

        <div id={Style.Staff_Card_mainDiv}>

            <div id={Style.Staff_Card_WrapperDiv}>
                <div id={Style.onboardedText}>
                    <p style={{backgroundColor: BG ? "#FC9E2F" : "#ED2F2F"}}>{account}</p>
                </div>



                <div id={Style.Staff_Card_textDiv}>
                    <img src={img} alt="" />
                    <div>
                        <p className={Style.Staff_Card_nameText}>{name}</p>
                       
                        <p className={Style.Staff_Card_careRep}>{position}</p>

                        <p className={Style.Staff_Card_onlineDiv}> <div className={Style.Staff_Card_online_signalDiv} style={{backgroundColor: statusColor ? "#59C150" : "#999999" }}></div>{status}</p>

                        <Link to={to}>
                            <Button
                                text={"View More Details"} />
                        </Link>

                    </div>
                </div>
            </div>
        </div >
    )
}

export default Accounts_Card