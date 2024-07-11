import React from 'react'
import Style from '../personal_info/Personal_Info.module.css'
import Header from '../../../../components/header/Header'
import chat from '../../../../assets/svg/chat.svg'
import clock from '../../../../assets/svg/clock.svg'
import users from '../../../../assets/svg/users.svg'
import rise from '../../../../assets/svg/rise.svg'
import arrow_side from '../../../../assets/svg/arrow_side.svg'
import line_graph from '../../../../assets/images/line_Graph.png'
import arrow_down from '../../../../assets/svg/arrow_down-dark.svg'
import Button from '../../../../components/button/Button'
import { Link } from 'react-router-dom'

const Personal_Info = () => {

    return (
        <div id={Style.Personal_Info_mainDiv}>
            <Header
                headerText={"Personal Information"}
                headerInfo={"Here’s an information on this User"} />

            <div id={Style.Personal_Info_wrapperDiv}>
                <div id={Style.Personal_Info_buttonDiv}>
                    <button>Freeze Account</button>
                    <button>Suspend Account</button>
                    <button>Fund Account</button>
                </div>

                <div >
                    <p className={Style.Personal_Info_headerText}>Personal Information</p>
                    <div id={Style.Personal_Info_tableDiv}>

                        <table>
                            <tr id={Style.headerTable}>
                                <th>S/N</th>
                                <th>User ID</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Country</th>
                                <th>Bank Detail</th>
                                <th>Status</th>
                                <th>Action</th>

                            </tr>
                            <tr id={Style.Personal_Info_tr}>
                                <td>1</td>
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
                </div>

                <p className={Style.Personal_Info_headerText}>Game Information</p>
                <div id={Style.Personal_Info_Card_wrapper}>

                    <div className={Style.Personal_Info_CardDiv}>
                        <img src={clock} alt="" />
                        <div>
                            <p className={Style.Card_figure}>3k</p>
                            <p className={Style.Card_text}>Logged Session</p>
                        </div>
                        <img src={arrow_side} alt="" />
                    </div>

                    <div className={Style.Personal_Info_CardDiv}>
                        <img src={users} alt="" />
                        <div>
                            <p className={Style.Card_figure}>34</p>
                            <p className={Style.Card_text}>Friends</p>
                        </div>
                        <Link to={'/userFriends'}>
                        <img src={arrow_side} alt="" />
                        </Link>
                        
                    </div>

                    <div className={Style.Personal_Info_CardDiv}>
                        <img src={chat} alt="" />
                        <div>
                            <p className={Style.Card_figure}>1.5k</p>
                            <p className={Style.Card_text}>Conversation</p>
                        </div>
                        <img src={arrow_side} alt="" />
                    </div>

                    <div className={Style.Personal_Info_CardDiv}>
                        <img src={rise} alt="" />
                        <div>
                            <p className={Style.Card_figure}>2k</p>
                            <p className={Style.Card_text}>Placed Bets</p>
                        </div>
                       <Link to={'/userplacedbet'}>
                       <img src={arrow_side} alt="" />
                       </Link>
                    </div>
                </div>

                <div id={Style.Personal_Info_graphReport_Div}>
                    <img id={Style.graph} src={line_graph} alt="" />

                    <div id={Style.Personal_Info_Report_mainDiv}>
                        <div id={Style.Personal_Info_ReportTextDiv}>
                            <p id={Style.ReportHeader}>Complaints</p>
                            <p id={Style.dateText}>3rd of October, 2024 <img src={arrow_down} alt="" /></p>
                        </div>
                        <div className={Style.Personal_Info_ReportDiv}>
                            <p>1</p>
                            <p>1/3/2024</p>
                            <div id={Style.TextDiv}>
                                <p className={Style.Report_Header2}>Lorem ipsum dolo</p>
                                <p className={Style.ReportText}>Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate...</p>

                            </div>
                            <Button
                                text={"View Details"} />
                        </div>
                        <div className={Style.Personal_Info_ReportDiv}>
                            <p>1</p>
                            <p>1/3/2024</p>
                            <div id={Style.TextDiv}>
                                <p className={Style.Report_Header2}>Lorem ipsum dolo</p>
                                <p className={Style.ReportText}>Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate...</p>

                            </div>
                            <Button
                                text={"View Details"} />
                        </div>
                        <div className={Style.Personal_Info_ReportDiv}>
                            <p>1</p>
                            <p>1/3/2024</p>
                            <div id={Style.TextDiv}>
                                <p className={Style.Report_Header2}>Lorem ipsum dolo</p>
                                <p className={Style.ReportText}>Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate...</p>

                            </div>
                            <Link to={'/complainDetails'}>
                            <Button
                                text={"View Details"} />
                            </Link>
                        </div>
                
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Personal_Info