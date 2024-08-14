import React from 'react'
import Style from '../customerCare_Navbar/CustomerCare_NavBar.module.css'
import mail from '../../assets/svg/staff_mail.svg'
import person from '../../assets/svg/staff_person.svg'
import { NavLink } from 'react-router-dom'


const CustomerCare_NavBar = () => {
    return (
        <div id={Style.CustomerCare_NavBar_mainDiv}>

            <div id={Style.Navbar_firstWrapperDiv}>

                <p id={Style.logoText}>Logo</p>

                <div id={Style.Navbar_textsDiv}>
                    <p>Dashboard</p>
                    <NavLink to={"/customerCare_queries"}>
                        <p>Query Management</p>
                    </NavLink>
                    <p>Users</p>
                    <p>Tickets</p>
                    <p>Transactions</p>
                </div>
            </div>
            <div id={Style.Navbar_lastLineDiv}>
                <p>Performance</p>
                <p>Mgt</p>
                <p>English</p>
                <div id={Style.line}></div>
                <div id={Style.imgDiv}>
                    <img src={mail} alt="" />
                    <img src={person} alt="" />
                </div>
                <p>WhiteHouse Ltd</p>

            </div>
            
        </div>
    )
}

export default CustomerCare_NavBar