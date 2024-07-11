import React from 'react'
import Style from '../user_friends/User_Friends.module.css'
import Staff_Card from '../../staff/all_staff/component/Staff_Card'
import person from '../../../../assets/images/Person1.png'
import arrow_down from '../../../../assets/svg/arrow_down-dark.svg'
import search from '../../../../assets/svg/Search.svg'
import InputField from '../../../../components/input/InputField'
import filter_img from '../../../../assets/svg/Complete_filter_img.svg'
import download from '../../../../assets/svg/download_img.svg'
import Header from '../../../../components/header/Header'




const User_Friends = () => {
    const user_friends_arr = [
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
                headerText={"John Doe's Friends"}
                headerInfo={"Here’s an information on all John Doe's friends"} />

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
                        user_friends_arr.map((object) => {
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

export default User_Friends