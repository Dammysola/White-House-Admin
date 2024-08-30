import React from 'react'
import Style from '../totalOnline_players/Online_Players.module.css'
import Header from '../../../../../components/header/Header'
import Staff_Card from '../../staff/all_staff/component/Staff_Card'
import person from '../../../../../assets/images/Person1.png'
import arrow_down from '../../../../../assets/svg/arrow_down-dark.svg'
import search from '../../../../../assets/svg/Search.svg'
import InputField from '../../../../../components/input/InputField'
import filter_img from '../../../../../assets/svg/Complete_filter_img.svg'
import download from '../../../../../assets/svg/download_img.svg'




const Online_Players = () => {

    const Online_Players_arr = [
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
        <div id={Style.Online_Players_mainDiv}>
            <Header
                headerText={"Total Online Players"}
                headerInfo={"Here’s an information on all Online Players"} />

            <div id={Style.Online_Players_wrapperDiv}>
                <div id={Style.input_FilterDiv}>

                    <p>3rd July, 2024 <img src={arrow_down} alt="" /></p>
                    <div id={Style.searchDiv}>
                        <img src={search} alt="" />
                        <InputField
                            placeholder={"A-Z"} />
                    </div>

                    <div id={Style.InputField_images}>
                        <img src={filter_img} alt="" />
                        <img id={Style.download_img} src={download} alt="" />
                    </div>

                </div>

                <div id={Style.Online_Players_Card}>
                    {
                        Online_Players_arr.map((object) => {
                            return (
                                <Staff_Card
                                    img={object.img}
                                    status={object.status}
                                    name={object.name}
                                    position={object.position}
                                    to={object.to} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Online_Players