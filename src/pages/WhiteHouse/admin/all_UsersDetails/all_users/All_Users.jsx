import React, { useState } from 'react'
import Style from '../all_users/All_Users.module.css'
import person from '../../../../../assets/images/Person1.png'
import Header from '../../../../../components/header/Header'
import { Link } from 'react-router-dom'
import AllUsers_com from '../../../../../components/allUsers_com/AllUsers_com'



const All_Users = () => {


    const all_Users_arr = [
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
        <div id={Style.All_Users_mainDiv}>
            <Header
                headerText={"All Users"}
                headerInfo={"Here’s an information on all Users"} />

            <div id={Style.All_Users_wrapperDiv}>

           



                <div id={Style.button_Div}>

                    <Link to={"/freezedAccounts"}>
                        <button id={Style.button}>Freezed Accounts</button>

                    </Link>
                    <Link to={"/suspendedAccounts"}>
                        <button id={Style.accounts_btn}>Suspended Accounts</button>

                    </Link>
                </div>

                <AllUsers_com arr={all_Users_arr} />

            </div>
        </div>
    )
}

export default All_Users