import React, { useState } from 'react'
import Style from '../customerCare_Queries/CustomerCare_Queries.module.css'
import Header from '../../../../components/header/Header'
import users from '../../../../assets/svg/total_users.svg'
import issues from '../../../../assets/svg/Issues.svg'
import Total_Card from '../../../../components/total_Card/Total_Card'
import search from '../../../../assets/svg/Search.svg'
import InputField from '../../../../components/input/InputField'
import avatar from '../../../../assets/images/verified_avatar.png'
import arrow_down from '../../../../assets/svg/arrow_down.svg'
import amazing from '../../../../assets/svg/amazing.svg'
import good from '../../../../assets/svg/good.svg'
import sad from '../../../../assets/svg/sad.svg'
import neutral from '../../../../assets/svg/neutral.svg'
import microphone from '../../../../assets/svg/microphone.svg'
import recording from '../../../../assets/svg/recording.svg'
import capture from '../../../../assets/svg/capture.svg'
import filter from '../../../../assets/svg/Complete_filter_img.svg'
import Button from '../../../../components/button/Button'
import { Link } from 'react-router-dom'
import Query_Review from './query_review/Query_Review'




const CustomerCare_Queries = () => {


    let [toggleIndex, setToggleIndex] = useState(100);
    let [btnIndex, setBtnIndex] = useState(0);

    const ticketToggle = (index) => {
        setToggleIndex(index)
    }

    const reviewButton = (index) => {
        setBtnIndex(index)
    }


    const stats_card7 = [
        {
            image1: users,
            price: "23,000",
            text: "App Message Queries",
            to: "/placebet",
            divText: "View All"
        },
        {
            image1: issues,
            price: "20K",
            text: "Mail Queries",
            to: "/placebet",
            divText: "View All"
        },
        {
            image1: users,
            price: "345,000",
            text: "In- App Call Queries",
            to: "",
            divText: "View All"
        },
        {
            image1: issues,
            price: "23,000",
            text: "Toll Calls Queries",
            to: "/",
            divText: "View All"
        },
    ]



    return (
        <div id={Style.Queries_mainDiv}>
            <Header
                headerText={"Incoming Queries"}
                headerInfo={"let's get rolling"} />

            <div id={Style.Queries_wrapperDiv}>
                <p id={Style.Queries_headerText}>Queries</p>

                <div id={Style.Queries_mapDiv}>
                    {
                        stats_card7.map((obj, index) => {
                            let isBlack = index == toggleIndex ? true : false;

                            return (
                                <Total_Card
                                    Key={index}
                                    image1={obj.image1}
                                    price={obj.price}
                                    text={obj.text}
                                    to={obj.to}
                                    divText={obj.divText}
                                    isBlack={isBlack}
                                    onClick={() => ticketToggle(index)}
                                />

                            )
                        })
                    }
                </div>

                {
                    toggleIndex == 100 ?
                        <div id={Style.Query_satisfaction_wrapperDiv}>
                            <div className={Style.Ticket_entireDiv}>
                                <div id={Style.AssignedTicket_textDiv}>
                                    <p>Recent Assigned Tickets</p>
                                    <p>View All</p>
                                </div>

                                <div id={Style.Dashboard_TicketWrapperDiv}>
                                    <div id={Style.Ticket_HeaderDiv}>
                                        <div id={Style.ticketButtonDiv}>
                                            <button onClick={() => ticketToggle(0)} className={toggleIndex == 0 ? Style.toggle_buttonActive : Style.ticketButton}>All</button>
                                            {/* <button onClick={() => ticketToggle(1)} className={toggleIndex == 1 ? Style.toggle_buttonActive : Style.ticketButton}>Mail</button> */}
                                            {/* <button onClick={() => ticketToggle(2)} className={toggleIndex == 2 ? Style.toggle_buttonActive : Style.ticketButton}>In-app messages</button> */}
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
                                                <th>QueryType</th>
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
                                                    <td>
                                                        <div>
                                                            <p style={{ color: "#232323", fontSize: "1rem", fontWeight: "600" }}>28 Aug 2024</p>
                                                            <p>13:23</p>
                                                        </div>
                                                    </td>
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

                            <div className={Style.Ticket_entireDiv}>
                                <div id={Style.CustomerCare_textDiv}>
                                    <p>Average Customer Satisfaction Score</p>
                                    <div id={Style.monthDiv}>Month <img src={arrow_down} alt="" /></div>
                                </div>
                                <div id={Style.CustomerCare_Progress_Wrapper}>

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

                        </div> : ""}


                {
                    toggleIndex !== 100 ?

                        <div id={Style.Query_incomingTextDiv}>
                            <p>Incoming</p>

                            <div id={Style.search_filterDiv}>
                                <div id={Style.searchDiv}>
                                    <img src={search} alt="" />
                                    <InputField
                                        placeholder={"Search ticket no"} />
                                </div>
                                <img src={filter} alt="" />
                            </div>
                        </div> : ""
                }



                {

                    // In-App Message Queries

                    toggleIndex == 0 || toggleIndex == 1 ?

                        <div>


                            <div id={Style.Queries_tableWrapperDiv}>
                                <table>
                                    <tr id={Style.headerTable}>
                                        <th>S/N</th>
                                        <th>Date</th>
                                        <th>TicketID</th>
                                        <th>Category</th>
                                        <th>Username</th>
                                        <th>QueryType</th>
                                        <th>Query</th>
                                        <th>Attachments</th>
                                        <th>Action</th>
                                    </tr>

                                    <tbody>
                                        <tr id={Style.Personal_Info_tr}>
                                            <td>1</td>
                                            <td>8/7/2024</td>
                                            <td className={Style.tableText}>WH457IP</td>
                                            <td className={Style.tableText}>User Dispute</td>
                                            <td className={Style.tableText}>Lighty</td>
                                            <td className={Style.tableText}>In-app Message</td>
                                            <td>
                                                <div className={Style.ReportDiv}>
                                                    <p>Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate</p>
                                                    <p>Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputateLorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className={Style.AttachmentDiv}>
                                                    <div>
                                                        <p className={Style.Media_query}><img src={microphone} alt="" /> 4:23</p>
                                                        <p className={Style.Media_query_two}><img src={recording} alt="" />Play Recording</p>
                                                    </div>

                                                    <div>
                                                        <p className={Style.Media_query}><img src={capture} alt="" /> Photo</p>
                                                        <p className={Style.Media_query_two}><img src={recording} alt="" />View Photo</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><
                                                Link to={"/QueryReview"}><button style={{  backgroundColor: "#0E093C", border: "none", color: "#FFFFFF", fontSize: "0.7rem", width: "5.18rem", borderRadius: "8px", height: "1.37rem" }}>Review</button></Link></td>
                                        </tr>

                                        <tr id={Style.Personal_Info_tr}>
                                            <td>2</td>
                                            <td>8/7/2024</td>
                                            <td className={Style.tableText}>WH457IP</td>
                                            <td className={Style.tableText}>User Dispute</td>
                                            <td className={Style.tableText}>Lighty</td>
                                            <td className={Style.tableText}>In-app Message</td>
                                            <td>
                                                <div className={Style.ReportDiv}>
                                                    <p>Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate</p>
                                                    <p>Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputateLorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className={Style.AttachmentDiv}>
                                                    <div>
                                                        <p className={Style.Media_query}><img src={microphone} alt="" /> 4:23</p>
                                                        <p className={Style.Media_query_two}><img src={recording} alt="" />Play Recording</p>
                                                    </div>

                                                    <div>
                                                        <p className={Style.Media_query}><img src={capture} alt="" /> Photo</p>
                                                        <p className={Style.Media_query_two}><img src={recording} alt="" />View Photo</p>
                                                    </div>
                                                </div>
                                            </td>
                                        
                                            <td><button style={{ backgroundColor: "#0E093C", border: "none", color: "#FFFFFF", fontSize: "0.7rem", width: "5.18rem", borderRadius: "8px", height: "1.37rem" }}>Review</button></td>
                                        </tr>

                                        <tr id={Style.Personal_Info_tr}>
                                            <td>3</td>
                                            <td>8/7/2024</td>
                                            <td className={Style.tableText}>WH457IP</td>
                                            <td className={Style.tableText}>User Dispute</td>
                                            <td className={Style.tableText}>Lighty</td>
                                            <td className={Style.tableText}>In-app Message</td>
                                            <td>
                                                <div className={Style.ReportDiv}>
                                                    <p>Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate</p>
                                                    <p>Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputateLorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className={Style.AttachmentDiv}>
                                                    <div>
                                                        <p className={Style.Media_query}><img src={microphone} alt="" /> 4:23</p>
                                                        <p className={Style.Media_query_two}><img src={recording} alt="" />Play Recording</p>
                                                    </div>

                                                    <div>
                                                        <p className={Style.Media_query}><img src={capture} alt="" /> Photo</p>
                                                        <p className={Style.Media_query_two}><img src={recording} alt="" />View Photo</p>
                                                    </div>
                                                </div>
                                            </td>
                                           
                                            <td><button style={{ backgroundColor: "#0E093C", border: "none", color: "#FFFFFF", fontSize: "0.7rem", width: "5.18rem", borderRadius: "8px", height: "1.37rem" }}>Review</button></td>
                                        </tr>

                                        <tr id={Style.Personal_Info_tr}>
                                            <td>4</td>
                                            <td>8/7/2024</td>
                                            <td className={Style.tableText}>WH457IP</td>
                                            <td className={Style.tableText}>User Dispute</td>
                                            <td className={Style.tableText}>Lighty</td>
                                            <td className={Style.tableText}>In-app Message</td>
                                            <td>
                                                <div className={Style.ReportDiv}>
                                                    <p>Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate</p>
                                                    <p>Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputateLorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className={Style.AttachmentDiv}>
                                                    <div>
                                                        <p className={Style.Media_query}><img src={microphone} alt="" /> 4:23</p>
                                                        <p className={Style.Media_query_two}><img src={recording} alt="" />Play Recording</p>
                                                    </div>

                                                    <div>
                                                        <p className={Style.Media_query}><img src={capture} alt="" /> Photo</p>
                                                        <p className={Style.Media_query_two}><img src={recording} alt="" />View Photo</p>
                                                    </div>
                                                </div>
                                            </td>
                                           
                                            <td><button style={{ backgroundColor: "#0E093C", border: "none", color: "#FFFFFF", fontSize: "0.7rem", width: "5.18rem", borderRadius: "8px", height: "1.37rem" }}>Review</button></td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>

                        // In-App Call Queries

                        : toggleIndex == 2 || toggleIndex == 3 ?

                            <div id={Style.Dashboard_TicketWrapperDiv}>
                                <table>
                                    <tr id={Style.headerTable}>
                                        <th>S/N</th>
                                        <th>Date</th>
                                        <th>Ticket ID</th>
                                        <th>Username</th>
                                        <th>Query Type</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>

                                    <tbody>
                                        <tr id={Style.Personal_Info_tr}>
                                            <td>1</td>
                                            <td>8/7/2024</td>
                                            <td className={Style.tableText}>WH457IP</td>
                                            <td className={Style.tableText}>Lighty</td>
                                            <td className={Style.tableText}>In-app Message</td>
                                            <td>
                                                <div className={Style.statusText}>Waiting</div>
                                            </td>
                                            <td><Button text={"Accept"} /></td>
                                        </tr>

                                        <tr id={Style.Personal_Info_tr}>
                                            <td>2</td>
                                            <td>8/7/2024</td>
                                            <td className={Style.tableText}>WH457IP</td>
                                            <td className={Style.tableText}>Lighty</td>
                                            <td className={Style.tableText}>In-app Message</td>
                                            <td>
                                                <div className={Style.statusText}>Waiting</div>
                                            </td>
                                            <td><Button text={"Accept"} /></td>
                                        </tr>

                                        <tr id={Style.Personal_Info_tr}>
                                            <td>3</td>
                                            <td>8/7/2024</td>
                                            <td className={Style.tableText}>WH457IP</td>
                                            <td className={Style.tableText}>Lighty</td>
                                            <td className={Style.tableText}>In-app Message</td>
                                            <td>
                                                <div className={Style.statusText}>Waiting</div>
                                            </td>
                                            <td><Button text={"Accept"} /></td>
                                        </tr>

                                        <tr id={Style.Personal_Info_tr}>
                                            <td>4</td>
                                            <td>8/7/2024</td>
                                            <td className={Style.tableText}>WH457IP</td>
                                            <td className={Style.tableText}>Lighty</td>
                                            <td className={Style.tableText}>In-app Message</td>
                                            <td>
                                                <div className={Style.statusText}>Waiting</div>
                                            </td>
                                            <td><Button text={"Accept"} /></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div> : ""
                }


                {
                    // btnIndex == 0 ? <Query_Review/>: ""
                }
            </div>
        </div>
    )
}

export default CustomerCare_Queries