import React from 'react'
import Style from '../customer_Support/Customer_Support.module.css'
import { BarChart, YAxis, XAxis, Bar, Tooltip, ResponsiveContainer } from 'recharts'
import Header from '../../../../components/header/Header'
import Total_Card from '../../../../components/total_Card/Total_Card'
import online from '../../../../assets/svg/online.svg'
import offline from '../../../../assets/svg/offline.svg'
import three_users from '../../../../assets/svg/three_users.svg'
import smiley from '../../../../assets/svg/gray_smiley.svg'
import call from '../../../../assets/svg/call.svg'
import arrow_down from '../../../../assets/svg/arrow_down-dark.svg'
import amazing from '../../../../assets/svg/amazing.svg'
import good from '../../../../assets/svg/good.svg'
import neutral from '../../../../assets/svg/neutral.svg'
import sad from '../../../../assets/svg/sad.svg'
import issues from '../../../../assets/svg/Issues.svg'
import { Link } from 'react-router-dom'





const Customer_Support = () => {

    const stats_card5 = [
        {
            image1: three_users,
            price: "400",
            text: "All Agents",
            to: "/allStaffs",
            divText: "View Details"
        },
        {
            image1: issues,
            price: "5k",
            text: "Queries",
            to: "/queries",
            divText: "View All"
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

    const data = [
        {
            time: "2am",
            day: "Mon",
            Pv: "7"
        },
        {
            time: "4am",
            day: "Tue",
            Pv: "12"

        },
        {
            time: "6am",
            day: "Wed",
            Pv: "6"

        },
        {
            time: "10am",
            day: "Thur",
            Pv: "10"

        },
        {
            time: "12pm",
            day: "Fri",
            Pv: "12"

        },
        {
            time: "2pm",
            day: "Sat",
            Pv: "2"

        },
        {
            time: "4pm",
            day: "Sun",
            Pv: "9"

        }

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
                                    price={obj.price}
                                    to={obj.to} />
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
                            <div id={Style.date_viewDiv}>
                                <p id={Style.dateText}>Week One October, 2024 <img src={arrow_down} alt="" /></p>
                                <Link to={'/TotalTopAgents'}>
                                    <button> View All</button>
                                </Link>
                            </div>
                        </div>

                        <table>
                            <tr>
                                <td>Days</td>
                                <td className={Style.performing_agentText}>Calls</td>
                                <td className={Style.performing_agentText}>Mails</td>
                                <td className={Style.performing_agentText}>Msg</td>
                            </tr>
                            <tr>
                                <td>John Doe</td>
                                <td className={Style.performing_agentText}>46</td>
                                <td className={Style.performing_agentText}>5</td>
                                <td className={Style.performing_agentText}>5</td>
                                <td><Link to={'/topAgent'}><button style={{ backgroundColor: "#0E093C", border: "none", color: "#FFFFFF", fontSize: "0.69rem", borderRadius: "0.5rem", height: "1.87rem", width: "5.12rem" }}>View Details</button></Link></td>
                            </tr>
                            <tr>
                                <td>John Doe</td>
                                <td className={Style.performing_agentText}>22</td>
                                <td className={Style.performing_agentText}>13</td>
                                <td className={Style.performing_agentText}>5</td>
                                <td><button style={{ backgroundColor: "#0E093C", border: "none", color: "#FFFFFF", fontSize: "0.69rem", borderRadius: "0.5rem", height: "1.87rem", width: "5.12rem" }}>View Details</button></td>
                            </tr>
                            <tr>
                                <td>John Doe</td>
                                <td className={Style.performing_agentText}>45</td>
                                <td className={Style.performing_agentText}>8</td>
                                <td className={Style.performing_agentText}>5</td>
                                <td><button style={{ backgroundColor: "#0E093C", border: "none", color: "#FFFFFF", fontSize: "0.69rem", borderRadius: "0.5rem", height: "1.87rem", width: "5.12rem" }}>View Details</button></td>
                            </tr>
                            <tr>
                                <td>John Doe</td>
                                <td className={Style.performing_agentText}>34</td>
                                <td className={Style.performing_agentText}>77</td>
                                <td className={Style.performing_agentText}>5</td>
                                <td><button style={{ backgroundColor: "#0E093C", border: "none", color: "#FFFFFF", fontSize: "0.69rem", borderRadius: "0.5rem", height: "1.87rem", width: "5.12rem" }}>View Details</button></td>
                            </tr>
                            <tr>
                                <td>John Doe</td>
                                <td className={Style.performing_agentText}>89</td>
                                <td className={Style.performing_agentText}>5</td>
                                <td className={Style.performing_agentText}>5</td>
                                <td><button style={{ backgroundColor: "#0E093C", border: "none", color: "#FFFFFF", fontSize: "0.69rem", borderRadius: "0.5rem", height: "1.87rem", width: "5.12rem" }}>View Details</button></td>
                            </tr>
                            <tr>
                                <td>John Doe</td>
                                <td className={Style.performing_agentText}>33</td>
                                <td className={Style.performing_agentText}>566</td>
                                <td className={Style.performing_agentText}>5</td>
                                <td><button style={{ backgroundColor: "#0E093C", border: "none", color: "#FFFFFF", fontSize: "0.69rem", borderRadius: "0.5rem", height: "1.87rem", width: "5.12rem" }}>View Details</button></td>
                            </tr>
                            <tr>
                                <td>John Doe</td>
                                <td className={Style.performing_agentText}>21</td>
                                <td className={Style.performing_agentText}>44</td>
                                <td className={Style.performing_agentText}>5</td>
                                <td><button style={{ backgroundColor: "#0E093C", border: "none", color: "#FFFFFF", fontSize: "0.69rem", borderRadius: "0.5rem", height: "1.87rem", width: "5.12rem" }}>View Details</button></td>
                            </tr>
                        </table>
                    </div>


                    <div id={Style.CustomerCare_Progress_Wrapper}>
                        <div id={Style.CustomerCare_textDiv}>
                            <p>Average Customer Satisfaction Score</p>
                            <div id={Style.monthDiv}>Month <img src={arrow_down} alt="" /></div>
                        </div>
                        <div>
                            <div className={Style.Staff_progress}>
                                <div id={Style.Staff_details}>
                                    <div id={Style.imgDiv}>
                                        <img src={amazing} alt="" />
                                        <p>Amazing</p></div>
                                    <p>76.5%</p>
                                </div>
                                <div id={Style.progressDiv}></div>
                            </div>
                            <div className={Style.Staff_progress}>
                                <div id={Style.Staff_details}>
                                    <div id={Style.imgDiv}>
                                        <img src={good} alt="" />
                                        <p>Good</p></div>
                                    <p>76.5%</p>
                                </div>
                                <div id={Style.progressDiv}></div>
                            </div>
                            <div className={Style.Staff_progress}>
                                <div id={Style.Staff_details}>
                                    <div id={Style.imgDiv}>
                                        <img src={neutral} alt="" />
                                        <p>Neutral</p>
                                    </div>
                                    <p>76.5%</p>
                                </div>
                                <div id={Style.progressDiv}></div>
                            </div>

                            <div className={Style.Staff_progress}>
                                <div id={Style.Staff_details}>
                                    <div id={Style.imgDiv}>
                                        <img src={sad} alt="" />
                                        <p>Bad</p>
                                    </div>
                                    <p>76.5%</p>
                                </div>
                                <div id={Style.progressDiv}></div>
                            </div>
                        </div>

                    </div>
                </div>

                <div id={Style.Report_GraphDiv}>
                    <div id={Style.Report_WrapperDiv}>
                        <div id={Style.CustomerCare_textDiv}>
                            <p>Common Reports</p>
                            <div id={Style.monthDiv}>Month <img src={arrow_down} alt="" /></div>
                        </div>
                        <div className={Style.ReportsDiv}>
                            <p className={Style.ReportText}>Reports</p>
                            <p className={Style.ReportText}>Amount</p>
                        </div>
                        <div className={Style.ReportsDiv}>
                            <p className={Style.Report_Details}>Lorem ipsum dolor sit amet cctetur. Orci sapien et.</p>
                            <p className={Style.Report_Amounts}>12</p>
                        </div>

                        <div className={Style.ReportsDiv}>
                            <p className={Style.Report_Details}>Lorem ipsum dolor sit amet cctetur. Orci sapien et.</p>
                            <p className={Style.Report_Amounts}>12</p>
                        </div>

                        <div className={Style.ReportsDiv}>
                            <p className={Style.Report_Details}>Lorem ipsum dolor sit amet cctetur. Orci sapien et.</p>
                            <p className={Style.Report_Amounts}>12</p>
                        </div>

                        <div className={Style.ReportsDiv}>
                            <p className={Style.Report_Details}>Lorem ipsum dolor sit amet cctetur. Orci sapien et.</p>
                            <p className={Style.Report_Amounts}>12</p>
                        </div>

                        <div className={Style.ReportsDiv}>
                            <p className={Style.Report_Details}>Lorem ipsum dolor sit amet cctetur. Orci sapien et.</p>
                            <p className={Style.Report_Amounts}>12</p>
                        </div>
                    </div>
                    <div id={Style.Customer_Support_BarChartDiv}>

                        <p id={Style.BarChart_headerText}>Peak Time</p>

                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart width={150} height={40} data={data} margin={{
                                top: 20,
                                right: 0,
                                left: -40,
                                bottom: 30,
                            }}>


                                <XAxis dataKey="day"
                                    axisLine={false} tickLine={false} fontSize={"0.8rem"}
                                />
                                <YAxis
                                    axisLine={false} tickLine={false} fontSize={"0.7rem"}
                                />
                                <Tooltip />
                                <Bar dataKey="Pv" fill="#332D5B" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Customer_Support
