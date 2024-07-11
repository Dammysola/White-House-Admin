import React from 'react'
import Style from '../staff_details/Staff_Details.module.css'
import Header from '../../../../components/header/Header'
import person from '../../../../assets/images/Person1.png'
import arrow_down from '../../../../assets/svg/arrow_down-dark.svg'

const Staff_Details = () => {
    return (
        <div id={Style.Staff_Details_mainDiv}>
            <Header
                headerText={"All Staff"}
                headerInfo={"Here’s an overview of all Staff"} />

            <div id={Style.Staff_Details_wrapperDiv}>
                <div id={Style.Staff_Details_tableDiv}>

                    <table>
                        <tr id={Style.headerTable}>
                            <th>Photo</th>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Country</th>
                            <th>Bank Detail</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>

                        <tr>
                            <td><img src={person} alt="" /></td>
                            <td>SA 123476689</td>
                            <td>johndoe@gmail.com</td>
                            <td>+2344816273888</td>
                            <td>Nigeria</td>
                            <td>
                                <div id={Style.BankDetails_Div}>
                                    <div>
                                        <p>Bank</p>
                                        <p className={Style.BankDetails_BoldText}>Access Bank</p>
                                    </div>
                                    <div>
                                        <p>Account Number</p>
                                        <p className={Style.BankDetails_BoldText}>0123456789</p>
                                    </div><div>
                                        <p>Account Name</p>
                                        <p className={Style.BankDetails_BoldText}>John Doe</p>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div id={Style.statusText}>Online</div>
                            </td>

                            <td><button style={{ backgroundColor: "#075070", border: "none", color: "#FFFFFF", fontSize: "0.7rem", borderRadius: "8px", height: "1.37rem" }}>Suspend Action</button></td>
                        </tr>
                    </table>

                </div>
                <div>
                        <div id={Style.Staff_details_Daily_CallDiv}>
                            <div id={Style.Daily_Call_headerDiv}>
                                <p>Daily Call Log</p>
                                <p id={Style.dateText}>Week One October, 2024 <img src={arrow_down} alt="" /></p>
                            </div>
                            <div className={Style.Daily_Call_tableDiv}>
                                <p>Days</p>
                                <div>
                                    <p>Calls</p>
                                    <p>Mails</p>
                                </div>
                                <button>View Details</button>
                            </div>

                            <div className={Style.Daily_Call_tableDiv}>
                                <p>Monday</p>
                                <div>
                                    <p>46</p>
                                    <p>5</p>
                                </div>
                                <button>View Details</button>
                            </div>

                            <div className={Style.Daily_Call_tableDiv}>
                                <p>Tuesday</p>
                                <div>
                                    <p>10</p>
                                    <p>44</p>
                                </div>
                                <button>View Details</button>
                            </div>

                            <div className={Style.Daily_Call_tableDiv}>
                                <p>Wednesday</p>
                                <div>
                                    <p>2</p>
                                    <p>12</p>
                                </div>
                                <button>View Details</button>
                            </div>

                            <div className={Style.Daily_Call_tableDiv}>
                                <p>Thursday</p>
                                <div>
                                    <p>47</p>
                                    <p>30</p>
                                </div>
                                <button>View Details</button>
                            </div>

                            <div className={Style.Daily_Call_tableDiv}>
                                <p>Friday</p>
                                <div>
                                    <p>24</p>
                                    <p>7</p>
                                </div>
                                <button>View Details</button>
                            </div>

                            <div className={Style.Daily_Call_tableDiv}>
                                <p>Saturday</p>
                                <div>
                                    <p>5</p>
                                    <p>8</p>
                                </div>
                                <button>View Details</button>
                            </div>

                            <div className={Style.Daily_Call_tableDiv}>
                                <p>Sunday</p>
                                <div>
                                    <p>16</p>
                                    <p>10</p>
                                </div>
                                <button>View Details</button>
                            </div>
                        </div>
                    </div>
            </div>



        </div>
    )
}

export default Staff_Details