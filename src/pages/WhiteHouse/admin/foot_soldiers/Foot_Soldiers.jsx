import React from 'react'
import Style from '../foot_soldiers/Foot_Soldiers.module.css'
import Total_Card from '../../../../components/total_Card/Total_Card'
import Activity from '../../../../assets/svg/Activity.svg'
import total_users from '../../../../assets/svg/total_users.svg'
import Header from '../../../../components/header/Header'
import smiley from '../../../../assets/svg/gray_smiley.svg'
import rise from '../../../../assets/svg/rise.svg'
import flag from '../../../../assets/svg/flag.svg'
import Stats_Card from '../../../../components/stats_card/Stats_Card'
import amount from '../../../../assets/svg/stats_capture.svg'
import clock from '../../../../assets/svg/stats_clock.svg'




const Foot_Soldiers = () => {

    const soldiers_card = [
        {
            image1: Activity,
            text: "All Soldiers",
            divText: "View all",
            price: "1,985",
            to: "/allFootSoldiers"
        },
        {
            image1: total_users,
            text: "Users From Soldiers",
            divText: "View All",
            price: "20K",
            to: ""
        },
        {
            image1: amount,
            text: "Amount Paid to Soldiers",
            divText: "View all",
            price: "345,000",
            to: "/amountPaid"
        },
        {
            image1: clock,
            text: "Pending Requests",
            divText: "View All",
            price: "23,000",
            to: "/pendingRequests"
        },
    ]


    const foot_soldiers_stats_card = [
        {
          img: rise,
          figure: "2k",
          text: "Transactions",
          to: "/AllTransaction"
    
        },
        {
          img: flag,
          figure: "14",
          text: "Reg Countries",
          to: "/placebet"
        }
    ]
    return (
        <div id={Style.Foot_Soldiers_mainDiv}>
            <Header
                headerText={"Foot Soldiers"}
                headerInfo={"Here’s an information on all Foot Soldiers"} />


            <div id={Style.Foot_Soldiers_wrapperDiv}>

                <p id={Style.Foot_Soldiers_headerText}>Foot Soldier's Summary</p>

                <div id={Style.Foot_Soldiers_cardDiv}>
                    {
                        soldiers_card.map((obj) => {

                            return (
                                <Total_Card
                                    image1={obj.image1}
                                    text={obj.text}
                                    divText={obj.divText}
                                    price={obj.price}
                                    to={obj.to} />
                            )
                        })
                    }
                </div>
                <div id={Style.Foot_Soldiers_table_revenueDiv}>
                    <div id={Style.onboarded_users_wrapperDiv}>
                        <div id={Style.onboarded_users_headerDiv}>
                            <p>Recently Onboarded Users</p>
                            <p>See All</p>
                        </div>

                        <table>
                            <tr id={Style.headerTable}>
                                <th>S/N</th>
                                <th>Date</th>
                                <th>User ID</th>
                                <th>FootSoldiers</th>
                                <th>Status</th>
                            </tr>

                            <tbody>
                                <tr>
                                    <td style={{ color: "#000000" }}>1</td>
                                    <td>23 Aug,2024</td>
                                    <td>UA 123476689</td>
                                    <td>John Doe</td>
                                    <td><button style={{ Width: "5.5rem", height: "1.62rem", backgroundColor: "#31c36433", color: "#31C364", display: "flex", alignItems: "center", justifyContent: "center", border: "none", fontSize: "0.8rem", borderRadius: "0.3rem" }}>Onboarding</button></td>
                                </tr>

                                <tr>
                                    <td style={{ color: "#000000" }}>2</td>
                                    <td>23 Aug 2024</td>
                                    <td>UA 123476689</td>
                                    <td>John Doe</td>
                                    <td><button style={{ Width: "5.5rem", height: "1.62rem", backgroundColor: "#31c36433", color: "#31C364", display: "flex", alignItems: "center", justifyContent: "center", border: "none", fontSize: "0.8rem", borderRadius: "0.3rem" }}>Onboarding</button></td>
                                </tr>

                                <tr>
                                    <td style={{ color: "#000000" }}>3</td>
                                    <td>23 Aug 2024</td>
                                    <td>UA 123476689</td>
                                    <td>John Doe</td>
                                    <td><button style={{ Width: "5.5rem", height: "1.62rem", backgroundColor: "#31c36433", color: "#31C364", display: "flex", alignItems: "center", justifyContent: "center", border: "none", fontSize: "0.8rem", borderRadius: "0.3rem" }}>Onboarding</button></td>
                                </tr>

                                <tr>
                                    <td style={{ color: "#000000" }}>4</td>
                                    <td>23 Aug 2024</td>
                                    <td>UA 123476689</td>
                                    <td>John Doe</td>
                                    <td><button style={{ Width: "5.5rem", height: "1.62rem", backgroundColor: "#31c36433", color: "#31C364", display: "flex", alignItems: "center", justifyContent: "center", border: "none", fontSize: "0.8rem", borderRadius: "0.3rem" }}>Onboarding</button></td>
                                </tr>

                                <tr>
                                    <td style={{ color: "#000000" }}>5</td>
                                    <td>23 Aug 2024</td>
                                    <td>UA 123476689</td>
                                    <td>John Doe</td>
                                    <td><button style={{ Width: "5.5rem", height: "1.62rem", backgroundColor: "#31c36433", color: "#31C364", display: "flex", alignItems: "center", justifyContent: "center", border: "none", fontSize: "0.8rem", borderRadius: "0.3rem" }}>Onboarding</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div id={Style.Revenue_StatsDiv}>
                        <div id={Style.Revenue_wrapperDiv}>
                            <div className={Style.Revenue_earningDiv}>

                                <div id={Style.Revenue_headerDiv}>
                                    <div>
                                        <p className={Style.earningText}>Daily Revenue</p>
                                        <p className={Style.priceText}>$3,000</p>
                                    </div>
                                    <div id={Style.View_AllDiv}>View All</div>
                                </div>

                                <div id={Style.Revenue_progressDiv}>
                                    <div className={Style.Revenue_progressBar}></div>
                                    <div id={Style.SmileyImg_Div}>
                                        <img id={Style.Revenue_smileyImg} src={smiley} alt="" />
                                    </div>
                                </div>
                                <p className={Style.Revenue_infoText}>70% more earning than last month, keep
                                    watching to find out more</p>
                            </div>

                            <div className={Style.Revenue_earningDiv}>

                            <div id={Style.Revenue_headerDiv}>
                                    <div>
                                        <p className={Style.earningText}>Daily Revenue</p>
                                        <p className={Style.priceText}>$3,000</p>
                                    </div>
                                    <div id={Style.View_AllDiv}>View All</div>
                                </div>

                                <div id={Style.Revenue_progressDiv}>
                                    <div className={Style.Revenue_progressBar}></div>
                                    <p id={Style.Revenue_percentText}>45%</p>
                                </div>
                                <p className={Style.Revenue_infoText}>70% more earning than last month, keep
                                    watching to find out more</p>
                            </div>
                        </div>
                        <div id={Style.foot_soldiers_stats_cardDiv}>
                            {
                                foot_soldiers_stats_card.map ((obj)=>{

                                    return(
                                        <Stats_Card
                                        figure ={obj.figure}
                                        img = {obj.img}
                                        to = {obj.to}
                                        text ={obj.text}/>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Foot_Soldiers