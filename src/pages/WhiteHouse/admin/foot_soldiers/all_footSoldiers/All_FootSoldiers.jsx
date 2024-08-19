import React from 'react'
import Style from '../all_footSoldiers/All_FootSoldiers.module.css'
import Header from '../../../../../components/header/Header'
import Staff_Card from '../../staff/all_staff/component/Staff_Card'
import person from '../../../../../assets/images/Person1.png'
import arrow_down from '../../../../../assets/svg/arrow_down-dark.svg'
import search from '../../../../../assets/svg/Search.svg'
import download from '../../../../../assets/svg/download_img.svg'
import InputField from '../../../../../components/input/InputField'




const All_FootSoldiers = () => {


    const all_soldiers_arr = [
        {
            img: person,
            name: "John Doe",
            position: "Nigeria",
            status: "Online",
            to: "/userDetails"
        },
        {
            img: person,
            name: "John Doe",
            position: "Nigeria",
            status: "Online"
        },
        {
            img: person,
            name: "John Doe",
            position: "Nigeria",
            status: "Online"
        },
        {
            img: person,
            name: "John Doe",
            position: "Nigeria",
            status: "Online"
        },
        {
            img: person,
            name: "John Doe",
            position: "Nigeria",
            status: "Online"
        },
        {
            img: person,
            name: "John Doe",
            position: "Nigeria",
            status: "Online"
        },
        {
            img: person,
            name: "John Doe",
            position: "Nigeria",
            status: "Online"
        },
        {
            img: person,
            name: "John Doe",
            position: "Nigeria",
            status: "Online"
        },
        {
            img: person,
            name: "John Doe",
            position: "Nigeria",
            status: "Online"
        },
        {
            img: person,
            name: "John Doe",
            position: "Nigeria",
            status: "Online"
        },
        {
            img: person,
            name: "John Doe",
            position: "Nigeria",
            status: "Online"
        },
        {
            img: person,
            name: "John Doe",
            position: "Nigeria",
            status: "Online"
        },

    ]
    return (
        <div id={Style.All_FootSoldiers_mainDiv}>
            <Header
                headerText={"All Foot Soldiers"}
                headerInfo={"Here’s an information of all Foot Soldiers"} />


            <div id={Style.All_FootSoldiers_wrapperDiv}>
                <div id={Style.All_Users_toggle_dateDiv}>
                    <p id={Style.All_FootSoldiers_headerText}>All Foot Soldiers</p>
                    <div id={Style.All_Users_input_FilterDiv}>

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
                        all_soldiers_arr.map((object) => {
                            return (
                                <Staff_Card
                                    img={object.img}
                                    status={object.status}
                                    name={object.name}
                                    position={object.position}
                                    to={object.to}
                                />
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default All_FootSoldiers