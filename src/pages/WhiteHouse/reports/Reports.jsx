import React from 'react'
import Style from '../reports/Reports.module.css'
import three_users from '../../../assets/svg/three_users.svg'
import issues from '../../../assets/svg/Issues.svg'
import resolve from '../../../assets/svg/resolved.svg'
import Header from '../../../components/header/Header'
import Total_Card from '../../../components/total_Card/Total_Card'
import rise from '../../../assets/svg/rise.svg'
import Stats_Card from '../../../components/stats_card/Stats_Card'
import recording from '../../../assets/svg/recording.svg'
import microphone from '../../../assets/svg/microphone.svg'

const Reports = () => {
    const stats_card4 = [
        {
            image1: three_users,
            price: "200",
            text: "User Report",
            to: "/placebet",
            divText: "View Details"
        },
        {
            image1: issues,
            price: "200",
            text: "Issue Report",
            to: "/placebet",
            divText: "View All"
        },
        {
            image1: resolve,
            price: "180",
            text: "Resolved Reports",
            to: "/placebet",
            divText: "View All"
        },
        {
            image1: resolve,
            price: "20",
            text: "Pending Reports",
            to: "/placebet",
            divText: "View All"
        },
    ]

    const stats_card3 = [
        {
            img: rise,
            figure: "200k",
            text: "Bet Placed",
            to: "/placebet"

        },
        {
            img: rise,
            figure: "2m",
            text: "All Users",
            to: "/placebet"
        }
    ]
    return (
        <div id={Style.Reports_mainDiv}>
            <Header
                headerText={"Welcome, Admin"}
                headerInfo={"Here’s an overview of White House"} />

            <div id={Style.Reports_WrapperDiv}>
                <p className={Style.ReportsText}>Report Summary</p>
                <div id={Style.Total_Stats_CardWrapper}>
                    <div id={Style.Reports_mapDiv}>
                        {
                            stats_card4.map((obj) => {
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

                    <div id={Style.Query_Stats_MapCard}>
                        {
                            stats_card3.map((obj) => {
                                return (
                                    <Stats_Card
                                        img={obj.img}
                                        figure={obj.figure}
                                        text={obj.text}
                                        to={obj.to} />
                                )
                            })
                        }

                    </div>
                </div>


                <p className={Style.ReportsText}>All Reports</p>
                <div id={Style.Reports_Table_WrapperDiv}>
                    <table>
                        <tr id={Style.headerTable}>
                            <th>S/N</th>
                            <th>Date</th>
                            <th>QueryType</th>
                            <th>Category</th>
                            <th>Username</th>
                            <th>Headline</th>
                            <th>Query</th>
                            <th>Status</th>
                            <th>Action</th>

                        </tr>
                        <tr id={Style.Personal_Info_tr}>
                            <td>1</td>
                            <td>8/7/2024</td>
                            <td>Billing</td>
                            <td className={Style.tableText}>In-app Message</td>
                            <td className={Style.tableText}>Lighty</td>
                            <td className={Style.tableText}>Lorem ipsum dolo</td>
                            <td>
                                <div className={Style.ReportDiv}>
                                    <p>Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate</p>
                                    <p>Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputateLorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate</p>
                                </div>
                            </td>
                            <td>
                                <div className={Style.statusText}>Pending</div>
                            </td>
                            <td><button style={{ backgroundColor: "#0E093C", border: "none", color: "#FFFFFF", fontSize: "0.7rem", width: "5.18rem", borderRadius: "8px", height: "1.37rem" }}>Review</button></td>
                        </tr>
                        <tr id={Style.Personal_Info_tr}>
                            <td>2</td>
                            <td>8/7/2024</td>
                            <td className={Style.tableText}>Mail</td>
                            <td className={Style.ReportDiv}>Account</td>
                            <td className={Style.tableText}>Lighty</td>
                            <td className={Style.tableText}>Lorem ipsum dolo</td>
                            <td>
                                <div className={Style.ReportDiv}>
                                    <p>Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate</p>
                                    <p>Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputateLorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate</p>
                                </div>
                            </td>
                            <td>
                                <div id={Style.statusText2}>Resolved</div>
                            </td>
                            <td><button style={{ backgroundColor: "#0E093C", border: "none", color: "#FFFFFF", fontSize: "0.7rem", width: "5.18rem", borderRadius: "8px", height: "1.37rem" }}>Review</button></td>
                        </tr>

                        <tr id={Style.Personal_Info_tr}>
                            <td>2</td>
                            <td>8/7/2024</td>
                            <td className={Style.tableText}>In-app Call</td>
                            <td className={Style.ReportDiv}>Payment</td>
                            <td className={Style.tableText}>Lighty</td>
                            <td className={Style.tableText}>Lorem ipsum dolo</td>
                            <td>
                                <div className={Style.ReportDiv}>
                                    <p className={Style.Media_query}><img src={microphone} alt="" /> 4:23</p>
                                    <p className={Style.Media_query}><img src={recording} alt="" />Play Recording</p>
                                </div>
                            </td>
                            <td>
                                <div id={Style.statusText2}>Resolved</div>
                            </td>
                            <td><button style={{ backgroundColor: "#0E093C", border: "none", color: "#FFFFFF", fontSize: "0.7rem", width: "5.18rem", borderRadius: "8px", height: "1.37rem" }}>Review</button></td>
                        </tr>

                        <tr id={Style.Personal_Info_tr}>
                            <td>2</td>
                            <td>8/7/2024</td>
                            <td className={Style.tableText}>Toll Call</td>
                            <td className={Style.ReportDiv}>Payment</td>
                            <td className={Style.tableText}>Lighty</td>
                            <td className={Style.tableText}>Lorem ipsum dolo</td>
                            <td>
                                <div className={Style.ReportDiv}>
                                <p className={Style.Media_query}><img src={microphone} alt="" /> 4:23</p>
                                <p className={Style.Media_query}><img src={recording} alt="" />Play Recording</p>
                                </div>
                            </td>
                            <td>
                                <div id={Style.statusText2}>Resolved</div>
                            </td>
                            <td><button style={{ backgroundColor: "#0E093C", border: "none", color: "#FFFFFF", fontSize: "0.7rem", width: "5.18rem", borderRadius: "8px", height: "1.37rem" }}>Review</button></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Reports