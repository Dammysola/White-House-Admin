import React from 'react'
import Style from '../customer_Support/Customer_Support.module.css'
import Header from '../../../../../components/header/Header'
import Total_Card from '../../../../../components/total_Card/Total_Card'
import Activity from '../../../../../assets/svg/Activity.svg'
import online from '../../../../../assets/svg/online.svg'
import offline from '../../../../../assets/svg/offline.svg'
import three_users from '../../../../../assets/svg/three_users.svg'
import smiley from '../../../../../assets/svg/gray_smiley.svg'
import call from '../../../../../assets/svg/call.svg'
import arrow_down from '../../../../../assets/svg/arrow_down-dark.svg'


const Customer_Support = () => {

    const stats_card5 = [
        {
            image1: three_users,
            price: "400",
            text: "All Agents",
            to: "/placebet",
            divText: "View Details"
        },
        {
            image1: Activity,
            price: "200",
            text: "Total Ticket Received",
            to: "/placebet",
            divText: "View Details"
        },
        {
            image1: call,
            price: "200",
            text: "Call Sessions",
            to: "/placebet",
            divText: "View Details"
        },
        {
            image1: online,
            price: "280",
            text: "Online",
            to: "/placebet",
            divText: "View All"
        },
        {
            image1: offline,
            price: "120",
            text: "Offline",
            to: "/placebet",
            divText: "View All"
        },
    ]
    return (
        <div id={Style.Customer_Support_mainDiv}>
            <Header
                headerText={"Welcome, Admin"}
                headerInfo={"Here’s an overview of White House"} />

            <div id={Style.Customer_Support_wrapperDiv}>
                <p id={Style.Customer_SupportText}>Customer Support Summary</p>
                <div id={Style.Customer_Support_mapDiv}>
                    {
                        stats_card5.map((obj) => {
                            return (
                                <Total_Card
                                    text={obj.text}
                                    image1={obj.image1}
                                    divText={obj.divText}
                                    price={obj.price} />
                            )
                        })
                    }
                </div>
                <div id={Style.Customer_Support_rating_wrapperDiv}>
                    <div className={Style.Customer_Support_ratingDiv}>
                        <p className={Style.RatingText}>First Contact Resolution Rate</p>
                        <p className={Style.percentText}>70%</p>

                        <div id={Style.Customer_Support_progressDiv}>
                            <div id={Style.Customer_Support_progressBar}></div>
                            <img src={smiley} alt="" />
                        </div>
                        <p className={Style.Customer_Support_infoText}>70% more earning than last month, keep
                            watching to find out more</p>
                    </div>

                    <div className={Style.Customer_Support_ratingDiv}>
                        <p className={Style.RatingText}>Customer Satisfaction Rate</p>
                        <p className={Style.percentText}>70%</p>

                        <div id={Style.Customer_Support_progressDiv}>
                            <div id={Style.Customer_Support_progressBar}></div>
                            <img src={smiley} alt="" />
                        </div>
                        <p className={Style.Customer_Support_infoText}>70% more earning than last month, keep
                            watching to find out more</p>
                    </div>

                    <div className={Style.Customer_Support_ratingDiv}>
                        <p className={Style.RatingText}>Average Resolution Time</p>
                        <p className={Style.percentText}>70%</p>

                        <div id={Style.Customer_Support_progressDiv}>
                            <div id={Style.Customer_Support_progressBar}></div>
                            <img src={smiley} alt="" />
                        </div>
                        <p className={Style.Customer_Support_infoText}>70% more earning than last month, keep
                            watching to find out more</p>
                    </div>

                    <div className={Style.Customer_Support_ratingDiv}>
                        <p className={Style.RatingText}>Average Response Time</p>
                        <p className={Style.percentText}>70%</p>

                        <div id={Style.Customer_Support_progressDiv}>
                            <div id={Style.Customer_Support_progressBar}></div>
                            <img src={smiley} alt="" />
                        </div>
                        <p className={Style.Customer_Support_infoText}>70% more earning than last month, keep
                            watching to find out more</p>
                    </div>
                </div>

                <div id={Style.Customer_Support_performance_satisfactionDiv}>
                    <div id={Style.Customer_Support_performanceDiv}>

                        <div id={Style.performance_headerDiv}>
                            <p>Top Performing Agents</p>
                            <p id={Style.dateText}>Week One October, 2024 <img src={arrow_down} alt="" /></p>
                        </div>

                        <table>
                            {/* <tr>
            <th>ue8hyf</th>
            <th>wkfnuj</th>
            <th>omji</th>
            <th>omji</th>
        </tr> */}

                            <tr>
                                <td>Days</td>
                                <td className={Style.performing_agentText}>Calls</td>
                                <td className={Style.performing_agentText}>Mails</td>
                                <td><button style={{ backgroundColor: "#075070", border: "none", color: "#FFFFFF", fontSize: "0.75rem", borderRadius: "0.5rem", height: "1.87rem", width: "5.12rem" }}>View Details</button></td>
                            </tr>
                            <tr>
                                <td>John Doe</td>
                                <td className={Style.performing_agentText}>46</td>
                                <td className={Style.performing_agentText}>5</td>
                                <td><button style={{ backgroundColor: "#075070", border: "none", color: "#FFFFFF", fontSize: "0.75rem", borderRadius: "0.5rem", height: "1.87rem", width: "5.12rem" }}>View Details</button></td>
                            </tr>
                            <tr>
                                <td>John Doe</td>
                                <td className={Style.performing_agentText}>22</td>
                                <td className={Style.performing_agentText}>13</td>
                                <td><button style={{ backgroundColor: "#075070", border: "none", color: "#FFFFFF", fontSize: "0.75rem", borderRadius: "0.5rem", height: "1.87rem", width: "5.12rem" }}>View Details</button></td>
                            </tr>
                            <tr>
                                <td>John Doe</td>
                                <td className={Style.performing_agentText}>45</td>
                                <td className={Style.performing_agentText}>8</td>
                                <td><button style={{ backgroundColor: "#075070", border: "none", color: "#FFFFFF", fontSize: "0.75rem", borderRadius: "0.5rem", height: "1.87rem", width: "5.12rem" }}>View Details</button></td>
                            </tr>
                            <tr>
                                <td>John Doe</td>
                                <td className={Style.performing_agentText}>34</td>
                                <td className={Style.performing_agentText}>77</td>
                                <td><button style={{ backgroundColor: "#075070", border: "none", color: "#FFFFFF", fontSize: "0.75rem", borderRadius: "0.5rem", height: "1.87rem", width: "5.12rem" }}>View Details</button></td>
                            </tr>
                            <tr>
                                <td>John Doe</td>
                                <td className={Style.performing_agentText}>89</td>
                                <td className={Style.performing_agentText}>5</td>
                                <td><button style={{ backgroundColor: "#075070", border: "none", color: "#FFFFFF", fontSize: "0.75rem", borderRadius: "0.5rem", height: "1.87rem", width: "5.12rem" }}>View Details</button></td>
                            </tr>
                            <tr>
                                <td>John Doe</td>
                                <td className={Style.performing_agentText}>33</td>
                                <td className={Style.performing_agentText}>566</td>
                                <td><button style={{ backgroundColor: "#075070", border: "none", color: "#FFFFFF", fontSize: "0.75rem", borderRadius: "0.5rem", height: "1.87rem", width: "5.12rem" }}>View Details</button></td>
                            </tr>
                            <tr>
                                <td>John Doe</td>
                                <td className={Style.performing_agentText}>21</td>
                                <td className={Style.performing_agentText}>44</td>
                                <td><button style={{ backgroundColor: "#075070", border: "none", color: "#FFFFFF", fontSize: "0.75rem", borderRadius: "0.5rem", height: "1.87rem", width: "5.12rem" }}>View Details</button></td>
                            </tr>
                        </table>
                    </div>

                    <div id={Style.CustomerCare_SatisfactionDiv}>
                        <div id={Style.CustomerCare_Satisfaction_GradeDiv}>
                            <p>Customer Care</p>
                            <p>Satisfaction</p>
                        </div>
                        <div className={Style.CustomerCare_Satisfaction_GradeDiv}>
                            <div id={Style.imgDiv}>
                                {/* <img src={person_img} alt="" /> */}
                                <p>John Doe</p>
                            </div>
                            <p className={Style.percentage}>50%</p>
                        </div>
                        <div className={Style.CustomerCare_Satisfaction_GradeDiv}>
                            <div id={Style.imgDiv}>
                                {/* <img src={person_img} alt="" /> */}
                                <p>John Doe</p>
                            </div>
                            <p className={Style.percentage}>50%</p>
                        </div>
                        <div className={Style.CustomerCare_Satisfaction_GradeDiv}>
                            <div id={Style.imgDiv}>
                                {/* <img src={person_img} alt="" /> */}
                                <p>John Doe</p>
                            </div>
                            <p className={Style.percentage}>50%</p>
                        </div>
                        <div className={Style.CustomerCare_Satisfaction_GradeDiv}>
                            <div id={Style.imgDiv}>
                                {/* <img src={person_img} alt="" /> */}
                                <p>John Doe</p>
                            </div>
                            <p className={Style.percentage}>50%</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Customer_Support
