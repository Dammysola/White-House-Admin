import React, { useState } from 'react'
import Style from '../customerCare_Dashboard/CustomerCare_Dashboard.module.css'
import Header from '../../../../components/header/Header'
import Progress_Bar from '../../../../components/progress_bar/Progress_Bar'
import InputField from '../../../../components/input/InputField'
import search from '../../../../assets/svg/Search.svg'
import avatar from '../../../../assets/images/avatar.png'
import arrow_down from '../../../../assets/svg/arrow_down-dark.svg'


const CustomerCare_Dashboard = () => {

    let [toggleIndex, setToggleIndex] = useState(0);

    const ticketToggle = (index) => {
        setToggleIndex(index)
    }

    const progressDiv = [

        {
            text: "Average First Contact Resolution Rate",
            percent: "70%",
            infoText: "70% more earning than last month, keep watching to find out more"
        },
        {
            text: "Average Customer Satisfaction Rate",
            percent: "70%",
            infoText: "70% more earning than last month, keep watching to find out more"
        },
        {
            text: "Average Resolution Time",
            percent: "70%",
            infoText: "70% more earning than last month, keep watching to find out more"
        },
        {
            text: "Average Response Time",
            percent: "70%",
            infoText: "70% more earning than last month, keep watching to find out more"
        }
    ]
    return (
        <div id={Style.CustomerCare_Dashboard_mainDiv}>
            <Header
                headerText={"Welcome John"}
                headerInfo={"Here’s an information on all Users"} />

            <div id={Style.CustomerCare_Dashboard_wrapperDiv}>
                <div id={Style.Dashboard_CardDiv}>
                    {
                        progressDiv.map((obj) => {
                            return (
                                <Progress_Bar
                                    text={obj.text}
                                    infoText={obj.infoText}
                                    percent={obj.percent} />
                            )
                        })
                    }
                </div>

                <div id={Style.Dashboard_Ticket_PerformanceDiv}>
                    <div id={Style.Ticket_entireDiv}>
                        <div id={Style.AssignedTicket_textDiv}>
                            <p>Incoming Queries</p>
                            <p>View All</p>
                        </div>

                        <div id={Style.Dashboard_TicketWrapperDiv}>
                            <div id={Style.Ticket_HeaderDiv}>
                                <div id={Style.ticketButtonDiv}>
                                    <button onClick={() => ticketToggle(0)} className={toggleIndex == 0 ? Style.toggle_buttonActive : Style.ticketButton}>All</button>
                                    {/* <button onClick={() => ticketToggle(1)} className={toggleIndex == 1 ? Style.toggle_buttonActive : Style.ticketButton}>Mail</button>
                                    <button onClick={() => ticketToggle(2)} className={toggleIndex == 2 ? Style.toggle_buttonActive : Style.ticketButton}>In-app messages</button> */}
                                </div>
                                <div id={Style.searchDiv}>
                                    <img src={search} alt="" />
                                    <InputField
                                        placeholder={"Search ticket no"} />
                                </div>
                            </div>

                            <div id={Style.ticketTable_wrapperDiv}>
                                <table>
                                    <tr id={Style.headerTable}>
                                        <th>User</th>
                                        <th>Ticket No</th>
                                        <th>Query Type</th>
                                        <th>Date/Time</th>
                                    </tr>

                                    <tbody>
                                        <tr>
                                            <td style={{ display: "flex", columnGap: "0.5rem", alignItems: "center" }}><img src={avatar} alt="" />
                                                <div><p className={Style.Ticket_tableData}>John Doe</p>
                                                    <p id={Style.disputeText}>User Dispute</p></div>
                                            </td>
                                            <td className={Style.Ticket_tableData}>GHNJ657RY</td>
                                            <td className={Style.Ticket_tableData}>Mail</td>
                                            <td><div>
                                                <p style={{ color: "#232323", fontSize: "1rem", fontWeight: "600" }}>28 Aug 2024</p>
                                                <p>13:23</p></div></td>
                                        </tr>

                                        <tr>
                                            <td style={{ display: "flex", columnGap: "0.5rem", alignItems: "center" }}><img src={avatar} alt="" />
                                                <div><p className={Style.Ticket_tableData}>John Doe</p>
                                                    <p id={Style.disputeText}>User Dispute</p></div>
                                            </td>
                                            <td className={Style.Ticket_tableData}>GHNJ657RY</td>
                                            <td className={Style.Ticket_tableData}>Mail</td>
                                            <td><div>
                                                <p style={{ color: "#232323", fontSize: "1rem", fontWeight: "500" }}>28 Aug, 2024</p>
                                                <p>13:23</p></div></td>
                                        </tr>

                                        <tr>
                                            <td style={{ display: "flex", columnGap: "0.5rem", alignItems: "center" }}><img src={avatar} alt="" />
                                                <div><p className={Style.Ticket_tableData}>John Doe</p>
                                                    <p id={Style.disputeText}>User Dispute</p></div>
                                            </td>
                                            <td className={Style.Ticket_tableData}>GHNJ657RY</td>
                                            <td className={Style.Ticket_tableData}>Mail</td>
                                            <td><div>
                                                <p style={{ color: "#232323", fontSize: "1rem", fontWeight: "500" }}>28 Aug, 2024</p>
                                                <p>13:23</p></div></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div id={Style.performanceDiv}>

                        <div id={Style.Daily_Call_headerDiv}>
                            <p>Performance</p>

                            <div id={Style.dateDiv}>
                                <p id={Style.dateText}>Week One October, 2024 <img src={arrow_down} alt="" /></p>
                                <button>See All</button>
                            </div>
                        </div>

                        <div id={Style.Staff_details_Daily_CallDiv}>
                            <table>

                                <tr>
                                    <td>Days</td>
                                    <td className={Style.Daily_CallText}>Calls</td>
                                    <td className={Style.Daily_CallText}>Mails</td>
                                    <td className={Style.Daily_CallText}>Msg</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Monday</td>
                                    <td className={Style.Daily_CallText}>46</td>
                                    <td className={Style.Daily_CallText}>5</td>
                                    <td className={Style.Daily_CallText}>5</td>
                                    <td><button style={{ backgroundColor: "transparent", border: "none", color: "#0E093C", fontSize: "0.75rem", borderRadius: "0.5rem", height: "1.87rem", width: "5.12rem" }}>View Details</button></td>
                                </tr>
                                <tr>
                                    <td>Tuesday</td>
                                    <td className={Style.Daily_CallText}>22</td>
                                    <td className={Style.Daily_CallText}>13</td>
                                    <td className={Style.Daily_CallText}>13</td>
                                    <td><button style={{ backgroundColor: "transparent", border: "none", color: "#0E093C", fontSize: "0.75rem", borderRadius: "0.5rem", height: "1.87rem", width: "5.12rem" }}>View Details</button></td>
                                </tr>
                                <tr>
                                    <td>Wednesday</td>
                                    <td className={Style.Daily_CallText}>45</td>
                                    <td className={Style.Daily_CallText}>8</td>
                                    <td className={Style.Daily_CallText}>8</td>
                                    <td><button style={{ backgroundColor: "transparent", border: "none", color: "#0E093C", fontSize: "0.75rem", borderRadius: "0.5rem", height: "1.87rem", width: "5.12rem" }}>View Details</button></td>
                                </tr>
                                <tr>
                                    <td>Thursday</td>
                                    <td className={Style.Daily_CallText}>34</td>
                                    <td className={Style.Daily_CallText}>5</td>
                                    <td className={Style.Daily_CallText}>77</td>
                                    <td><button style={{ backgroundColor: "transparent", border: "none", color: "#0E093C", fontSize: "0.75rem", borderRadius: "0.5rem", height: "1.87rem", width: "5.12rem" }}>View Details</button></td>
                                </tr>
                                <tr>
                                    <td>Friday</td>
                                    <td className={Style.Daily_CallText}>89</td>
                                    <td className={Style.Daily_CallText}>5</td>
                                    <td className={Style.Daily_CallText}>5</td>
                                    <td><button style={{ backgroundColor: "transparent", border: "none", color: "#0E093C", fontSize: "0.75rem", borderRadius: "0.5rem", height: "1.87rem", width: "5.12rem" }}>View Details</button></td>
                                </tr>
                                <tr>
                                    <td>Saturday</td>
                                    <td className={Style.Daily_CallText}>33</td>
                                    <td className={Style.Daily_CallText}>13</td>
                                    <td className={Style.Daily_CallText}>5</td>
                                    <td><button style={{ backgroundColor: "transparent", border: "none", color: "#0E093C", fontSize: "0.75rem", borderRadius: "0.5rem", height: "1.87rem", width: "5.12rem" }}>View Details</button></td>
                                </tr>
                                <tr>
                                    <td>Sunday</td>
                                    <td className={Style.Daily_CallText}>21</td>
                                    <td className={Style.Daily_CallText}>5</td>
                                    <td className={Style.Daily_CallText}>44</td>
                                    <td><button style={{ backgroundColor: "transparent", border: "none", color: "#0E093C", fontSize: "0.75rem", borderRadius: "0.5rem", height: "1.87rem", width: "5.12rem" }}>View Details</button></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerCare_Dashboard