import React, { useState } from 'react'
import Style from '../all_users/All_Users.module.css'
import Staff_Card from '../../staff/all_staff/component/Staff_Card'
import person from '../../../../../assets/images/Person1.png'
import arrow_down from '../../../../../assets/svg/arrow_down-dark.svg'
import search from '../../../../../assets/svg/Search.svg'
import InputField from '../../../../../components/input/InputField'
import filter_img from '../../../../../assets/svg/Complete_filter_img.svg'
import download from '../../../../../assets/svg/download_img.svg'
import Header from '../../../../../components/header/Header'
import { Link } from 'react-router-dom'
import AllUsers_com from '../../../../../components/allUsers_com/AllUsers_com'
import Date_Picker from '../../../../../components/date_picker/Date_Picker'



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

    const [selectedDate, setSelectedDate] = useState(new Date());  // Initialize with current date
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);  // Initialize with current date



    const handleDateChange = (newDate) => {

        setSelectedDate(newDate);  // Update selectedDate when newDate is received

        console.log("New selected date:", newDate);  // This should log the new date when clicked

        setIsCalendarOpen(false)
    };

    const toggleCalendar = () => {
        setIsCalendarOpen(true)
    }


    return (
        <div id={Style.All_Users_mainDiv}>
            <Header
                headerText={"All Users"}
                headerInfo={"Here’s an information on all Users"} />

            <div id={Style.All_Users_wrapperDiv}>

                <h1>Selected Date: {selectedDate.toDateString()} <img src={arrow_down} onClick={toggleCalendar} alt="" /></h1>

                {
                    isCalendarOpen && (
                        <div id={Style.calendar_popup}>
                            <Date_Picker onDateChange={handleDateChange} />
                        </div>
                    )
                }



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