import React from 'react'
import Style from '../all_users/All_Users.module.css'
import Staff_Card from '../../staff/all_staff/component/Staff_Card'
import person from '../../../../assets/images/Person1.png'
import arrow_down from '../../../../assets/svg/arrow_down-dark.svg'
import search from '../../../../assets/svg/Search.svg'
import InputField from '../../../../components/input/InputField'
import filter_img from '../../../../assets/svg/Complete_filter_img.svg'
import download from '../../../../assets/svg/download_img.svg'
import Header from '../../../../components/header/Header'



const All_Users = () => {

    const all_Users_arr = [
        {
            img: person,
            name: "John Doe",
            position: "Customer care representative",
            status: "Online",
            to: "/userDetails"
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
        }
    ]
    return (
        <div id={Style.All_Users_mainDiv}>
            <Header
                headerText={"All Users"}
                headerInfo={"Here’s an information on all Users"} />

            <div id={Style.All_Users_wrapperDiv}>
                <div id={Style.All_Users_input_FilterDiv}>

                    <p>3rd July, 2024 <img src={arrow_down} alt="" /></p>
                    <div id={Style.searchDiv}>
                        <img src={search} alt="" />
                        <InputField
                            placeholder={"A-Z"} />
                    </div>

                    <div id={Style.InputField_images}>
                        <img src={filter_img} alt="" />
                        <img src={download} alt="" />
                    </div>

                </div>
                <div id={Style.All_Users_Card}>
                    {
                        all_Users_arr.map((object) => {
                            return (
                                <Staff_Card
                                    img={object.img}
                                    status={object.status}
                                    name={object.name}
                                    position={object.position}
                                    to ={object.to} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default All_Users