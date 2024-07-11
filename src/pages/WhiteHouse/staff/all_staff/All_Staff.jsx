import React from 'react'
import Style from '../all_staff/All_Staff.module.css'
import rise from '../../../../assets/svg/rise.svg'
import arrow_side from '../../../../assets/svg/arrow_side.svg'
import person from '../../../../assets/images/Person1.png'
import Staff_Card from './component/Staff_Card'
import InputField from '../../../../components/input/InputField'
import filter_img from '../../../../assets/svg/Complete_filter_img.svg'
import search from '../../../../assets/svg/Search.svg'
import Header from '../../../../components/header/Header'
import { Link } from 'react-router-dom'



const All_Staff = () => {
    const all_Staffs = [
        {
            img: person,
            name: "John Doe",
            position: "Customer care representative",
            status: "Online",
            to: "/staffDetails"
        },
        {
            img: person,
            name: "John Doe",
            position: "Customer care representative",
            status: "Online"
        },
        {
            img: person,
            name: "John Doe",
            position: "Customer care representative",
            status: "Online"
        },
        {
            img: person,
            name: "John Doe",
            position: "Customer care representative",
            status: "Online"
        },
        {
            img: person,
            name: "John Doe",
            position: "Customer care representative",
            status: "Online"
        },
        {
            img: person,
            name: "John Doe",
            position: "Customer care representative",
            status: "Online"
        },

    ]
    return (
        <div id={Style.All_Staff_mainDiv}>

            <Header
                headerText={"All Staffs"}
                headerInfo={"Here’s an overview of all Staff"} />

            <div id={Style.All_Staff_EntireCard_Wrapper}>
                <div id={Style.All_Staff_Card_wrapper}>
                    <div className={Style.All_Staff_CardDiv}>
                        <img src={rise} alt="" />
                        <div>
                            <p className={Style.Card_figure}>200k</p>
                            <p className={Style.Card_text}>All Staff</p>
                        </div>
                       
                            <img src={arrow_side} alt="" />
                
                    </div>
                    <div className={Style.All_Staff_CardDiv}>
                        <img src={rise} alt="" />
                        <div>
                            <p className={Style.Card_figure}>14</p>
                            <p className={Style.Card_text}>Department</p>
                        </div>
                        <Link to={'/department'}>
                        <img src={arrow_side} alt="" />
                        </Link>
                    </div>
                    <div className={Style.All_Staff_CardDiv}>
                        <img src={rise} alt="" />
                        <div>
                            <p className={Style.Card_figure}>200</p>
                            <p className={Style.Card_text}>Online</p>
                        </div>
                        <img src={arrow_side} alt="" />
                    </div>
                    <div className={Style.All_Staff_CardDiv}>
                        <img src={rise} alt="" />
                        <div>
                            <p className={Style.Card_figure}>50</p>
                            <p className={Style.Card_text}>Offline</p>
                        </div>
                        <img src={arrow_side} alt="" />
                    </div>
                </div>
                <p id={Style.All_StaffText}>All Staff</p>

                <div id={Style.input_FilterDiv}>
                    <div id={Style.searchDiv}>
                        <img src={search} alt="" />
                        <InputField
                            placeholder={"Search by user ID"} />
                    </div>

                    <img src={filter_img} alt="" />
                </div>
                <div id={Style.All_Staff_Card}>
                    {
                        all_Staffs.map((object) => {
                            return (
                                <Staff_Card
                                    img={object.img}
                                    status={object.status}
                                    name={object.name}
                                    position={object.position}
                                    to = {object.to} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default All_Staff