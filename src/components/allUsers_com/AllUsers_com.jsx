import React, { useState } from 'react'
import Style from "./AllUsers_com.module.css"
import InputField from '../input/InputField'
import search from "../../assets/svg/Search.svg"
import Staff_Card from '../userStaff_Card/Staff_Card'



const AllUsers_com = (props) => {

    const { arr } = props
    let array = [...arr]


    const [toggleIndex, setToggleIndex] = useState(0)


    const transactionToggle = (index) => {

        setToggleIndex(index)

    }






    return (

        <div>

            <div id={Style.All_Users_toggle_dateDiv}>

                <div id={Style.All_Users_toggleDiv}>
                    <button onClick={() => transactionToggle(0)} className={toggleIndex == 0 ? Style.toggleDiv_buttonActive : Style.All_Users_listDiv_button}>All</button>
                    <button onClick={() => transactionToggle(1)} className={toggleIndex == 1 ? Style.toggleDiv_buttonActive : Style.All_Users_listDiv_button}>Subscribed</button>
                    <button onClick={() => transactionToggle(2)} className={toggleIndex == 2 ? Style.toggleDiv_buttonActive : Style.All_Users_listDiv_button}>Unsubscribed</button>
                    <button onClick={() => transactionToggle(3)} className={toggleIndex == 3 ? Style.toggleDiv_buttonActive : Style.All_Users_listDiv_button}>Not-Subscribed</button>
                </div>

                <div id={Style.searchDiv}>

                    <img src={search} alt="" />
                    <InputField
                        placeholder={"A-Z"} />
                </div>

            </div>

            <div id={Style.All_Users_Card}>
                {
                    arr.map((object) => {
                        let statusColor = object.status === "Online" ? true : false

                        return (
                            <Staff_Card
                                img={object.img}
                                status={object.status}
                                name={object.name}
                                position={object.position}
                                to={object.to}
                                statusColor={statusColor} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default AllUsers_com