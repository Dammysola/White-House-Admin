import React, { useState } from 'react'
import Style from "../All_Users.module.css"
import InputField from '../../../../../components/input/InputField'
import Header from '../../../../../components/header/Header'
import person from '../../../../../assets/images/Person1.png'
import arrow_down from '../../../../../assets/svg/arrow_down-dark.svg'
import search from '../../../../../assets/svg/Search.svg'
import Accounts_Card from './accounts_card/Accounts_Card'


const Suspended_Accounts = () => {

    const [toggleIndex, setToggleIndex] = useState(0)

    const transactionToggle = (index) => {

        setToggleIndex(index)

    }


    const all_Users_arr = [
        {
            img: person,
            name: "John Doe",
            position: "Nigeria",
            status: "Online",
            account: "Suspended",
            to: "/userDetails"
        },
        {
            img: person,
            name: "John Doe",
            position: "Nigeria",
            account: "Suspended",
            status: "Offline"
        },
        {
            img: person,
            name: "John Doe",
            position: "Nigeria",
            account: "Suspended",
            status: "Online"
        },
        {
            img: person,
            name: "John Doe",
            position: "Nigeria",
            account: "Suspended",
            status: "Offline"
        },
        {
            img: person,
            name: "John Doe",
            position: "Nigeria",
            account: "Suspended",
            status: "Online"
        },
        {
            img: person,
            name: "John Doe",
            position: "Nigeria",
            account: "Suspended",
            status: "Online"
        },
        {
            img: person,
            name: "John Doe",
            position: "Nigeria",
            account: "Suspended",
            status: "Offline"
        },
        {
            img: person,
            name: "John Doe",
            position: "Nigeria",
            account: "Suspended",
            status: "Online"
        },
        {
            img: person,
            name: "John Doe",
            position: "Nigeria",
            account: "Suspended",
            status: "Online"
        },
   
       

    ]

    return (

        <div id={Style.All_Users_mainDiv}>
            <Header
                headerText={"Suspended Accounts"}
                headerInfo={"Here’s an information on all Suspended Accounts"} />

            <div id={Style.All_Users_wrapperDiv}>

                <div id={Style.button_Div}>
                    <button id={Style.accounts_btn}>Suspended Accounts</button>
                </div>

                <div id={Style.All_Users_toggle_dateDiv}>
                    <div id={Style.All_Users_toggleDiv}>
                        <button onClick={() => transactionToggle(0)} className={toggleIndex == 0 ? Style.toggleDiv_buttonActive : Style.All_Users_listDiv_button}>All</button>
                        <button onClick={() => transactionToggle(1)} className={toggleIndex == 1 ? Style.toggleDiv_buttonActive : Style.All_Users_listDiv_button}>Subscribed</button>
                        <button onClick={() => transactionToggle(2)} className={toggleIndex == 2 ? Style.toggleDiv_buttonActive : Style.All_Users_listDiv_button}>Unsubscribed</button>
                        <button onClick={() => transactionToggle(3)} className={toggleIndex == 3 ? Style.toggleDiv_buttonActive : Style.All_Users_listDiv_button}>Not-Subscribed</button>
                    </div>
                    <div id={Style.input_FilterDiv}>

                        <p>3rd July, 2024 <img src={arrow_down} alt="" /></p>
                        <div id={Style.searchDiv}>
                            <img src={search} alt="" />
                            <InputField
                                placeholder={"A-Z"} />
                        </div>

                    </div>
                
                </div>


                <div id={Style.All_Users_Card}>
              

                    {
                        all_Users_arr.map((object) => {
                        
                            let statusColor =  object.status === "Online" ? true : false

                            return (
                                <Accounts_Card
                                    img={object.img}
                                    status={object.status}
                                    name={object.name}
                                    position={object.position}
                                    to={object.to}
                                    account ={object.account}
                                    statusColor ={statusColor} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Suspended_Accounts