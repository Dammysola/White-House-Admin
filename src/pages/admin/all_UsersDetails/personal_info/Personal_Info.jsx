import React, { useState } from 'react'
import Style from './Personal_Info.module.css'
import { BarChart, YAxis, XAxis, Bar, Tooltip, ResponsiveContainer } from 'recharts'
import Header from '../../../../components/header/Header'
import chat from '../../../../assets/svg/chat.svg'
import clock from '../../../../assets/svg/clock.svg'
import users from '../../../../assets/svg/users.svg'
import rise from '../../../../assets/svg/rise.svg'
import arrow_down from '../../../../assets/svg/arrow_down-dark.svg'
import Button from '../../../../components/button/Button'
import no_complaint from '../../../../assets/svg/no_complaint.svg'
import { Link } from 'react-router-dom'
import Stats_Card from '../../../../components/stats_card/Stats_Card'
import search from '../../../../assets/svg/Search.svg'
import InputField from '../../../../components/input/InputField'
import download from '../../../../assets/svg/download_img.svg'
import coin from '../../../../assets/svg/coin.svg'
import game_pad from '../../../../assets/svg/game_pad.svg'
import Date_Picker from '../../../../components/date_picker/Date_Picker'


const Personal_Info = () => {


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



    const arr = [""]

    const line_data = [
        {
            name: 'jan',
            uv: 4000,
            pv: 20,
            amt: 2400,
        },
        {
            name: 'Feb',
            uv: 3000,
            pv: 50,
            amt: 2210,
        },
        {
            name: 'Mar',
            uv: 2000,
            pv: 30,
            amt: 2290,
        },
        {
            name: 'Apr',
            uv: 2780,
            pv: 40,
            amt: 2000,
        },
        {
            name: 'May',
            uv: 1890,
            pv: 70,
            amt: 2181,
        },
        {
            name: 'Jun',
            uv: 2390,
            pv: 60,
            amt: 2500,
        },
        {
            name: 'Jul',
            uv: 3490,
            pv: 50,
            amt: 2100,
        },
        {
            name: 'Aug',
            uv: 3490,
            pv: 30,
            amt: 2100,
        },
        {
            name: 'Sep',
            uv: 3490,
            pv: 60,
            amt: 2100,
        },
        {
            name: 'Oct',
            uv: 3490,
            pv: 80,
            amt: 2100,
        },
        {
            name: 'Nov',
            uv: 3490,
            pv: 50,
            amt: 2100,
        },
        {
            name: 'Dec',
            uv: 3490,
            pv: 70,
            amt: 2100,
        },
    ];


    const users_stats_card = [
        {
            img: clock,
            figure: "3k",
            text: "Logged Sessions",
            to: "/loggedsession"

        },
        {
            img: users,
            figure: "34",
            text: "Friends",
            to: "/userFriends"
        },
        {
            img: chat,
            figure: "14",
            text: "Conversations",
            to: "/conversations"
        },
        {
            img: rise,
            figure: "2k",
            text: "Placed Bets",
            to: "/userplacedbet"

        },
    ]

    const transaction = [

        {

            refNumber: "UA 123476689",
            time: "13:45",
            country: "Nigeria",
            amountPaid: "20000",
            coinReceived: "500",
            subType: "Gold",
            paymentType: {
                bank: "Access Bank",
                accNo: "0123456789",
                accName: "John Doe"
            },
            status: "Purchased"
        },

        {

            refNumber: "UA 123476689",
            time: "13:45",
            country: "Nigeria",
            amountPaid: "20000",
            coinReceived: "500",
            subType: "Black",
            paymentType: {
                bank: "Access Bank",
                accNo: "0123456789",
                accName: "John Doe"
            },
            status: "Purchased"
        },

        {

            refNumber: "UA 123476689",
            time: "13:45",
            country: "Nigeria",
            amountPaid: "20000",
            coinReceived: "500",
            subType: "Blue",
            paymentType: {
                bank: "Access Bank",
                accNo: "0123456789",
                accName: "John Doe"
            },
            status: "Purchased"
        }
    ]


    return (
        <div id={Style.Personal_Info_mainDiv}>
            <Header
                headerText={"Personal Information"}
                headerInfo={"Here’s an information on this User"} />

            <div id={Style.Personal_Info_wrapperDiv}>
                <p id={Style.Onboarded_Text}>Onboarded By: <span>John Doe</span></p>

                <div id={Style.balance_buttonDiv}>

                    <div id={Style.balance_game_HistoryDiv}>
                        <div id={Style.Coin_BalanceDiv}>
                            <div id={Style.coinDiv}>
                                <img src={coin} alt="" />
                            </div>
                            <div>
                                <p>3K</p>
                                <p>Coin Balance</p>
                            </div>
                        </div>

                        <div id={Style.dropDiv}>

                            <div id={Style.dropdown} >Click to See game history</div>
                            <Link to={"/gameHistory"}>


                                <div id={Style.Game_historyDiv}>
                                    <div id={Style.padDiv}>
                                        <img src={game_pad} alt="" />
                                    </div>
                                    <div>
                                        <p>3K</p>
                                        <p>Game History</p>
                                    </div>
                                </div>
                            </Link>

                        </div>
                    </div>

                    <div id={Style.Personal_Info_buttonDiv}>
                        <button>Freeze Account</button>
                        <button>Suspend Account</button>
                        <button>Fund Account</button>
                    </div>
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
                                <th>Subscription</th>

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
                                <td>
                                    <div id={Style.Subscription}>Gold</div>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>

                <p className={Style.Personal_Info_headerText}>Game Information</p>
                <div id={Style.Personal_Info_Card_wrapper}>

                    {
                        users_stats_card.map((obj) => {

                            return (
                                <Stats_Card
                                    figure={obj.figure}
                                    img={obj.img}
                                    text={obj.text}
                                    to={obj.to} />
                            )
                        })
                    }
                </div>

                <div id={Style.Personal_Info_graphReport_Div}>

                    <div id={Style.Dashboard_lineChart_Two}>
                        <p id={Style.Dashboard_RevenueText}>Revenue</p>
                        <ResponsiveContainer width="100%" height="70%">
                            <BarChart width={150} height={40} data={line_data} margin={{
                                top: 5,
                                right: 30,
                                left: -20,
                                bottom: 10,
                            }}>


                                <XAxis dataKey="name"
                                    axisLine={false} tickLine={false} fontSize={"0.8rem"}
                                />
                                <YAxis
                                    axisLine={false} tickLine={false} fontSize={"0.7rem"}
                                />
                                {/* <Legend/> */}
                                <Tooltip />
                                <Bar dataKey="pv" fill="#113353" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                    <div id={Style.Personal_Info_Report_mainDiv}>
                        <div id={Style.Personal_Info_ReportTextDiv}>
                            <p id={Style.ReportHeader}>Complaints</p>
                            <p id={Style.dateText}>3rd of October, 2024 <img src={arrow_down} alt="" /></p>
                        </div>

                        {
                            arr.length == 0 ?
                                <div id={Style.no_complaintDiv}>
                                    <img src={no_complaint} alt="" />
                                    <p>No Recent Complaint</p>
                                </div> :

                                <div id={Style.Personal_Info_ReportWrapper}>
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
                        }
                    </div>
                </div>

                <div>

                    <p className={Style.Personal_Info_headerText}>Coin Purchase History</p>

                    <div className={Style.date_inputDiv}>

                        <span>{selectedDate.toDateString()} <img src={arrow_down} onClick={toggleCalendar} alt="" /></span>

                        {
                            isCalendarOpen && (

                                <div id={Style.calendar_popup}>
                                    <Date_Picker onDateChange={handleDateChange} />
                                </div>
                            )
                        }


                        <div className={Style.searchDiv}>
                            <img src={search} alt="" />
                            <InputField />
                        </div>
                        <img className={Style.download_img} src={download} alt="" />
                    </div>
                    <div id={Style.Personal_Info_tableDiv}>

                        <table>

                            <thead>

                                <tr id={Style.headerTable}>
                                    <th>S/N</th>
                                    <th>Ref Number</th>
                                    <th>Time</th>
                                    <th>Country</th>
                                    <th>Amount Paid</th>
                                    <th>Coin Received</th>
                                    <th>Payment Type</th>
                                    <th>Status</th>
                                </tr>
                            </thead>

                            <tbody>

                                {
                                    transaction.map((obj, index) => {

                                        return (

                                            <tr>
                                                <td>{index + 1}</td>
                                                <td>{obj.refNumber}</td>
                                                <td>{obj.time}</td>
                                                <td>{obj.country}</td>
                                                <td>{obj.amountPaid}</td>
                                                <td>{obj.coinReceived}</td>
                                                <td>
                                                    <div id={Style.BankDetails_Div}>
                                                        <div>
                                                            <p>Bank</p>
                                                            <p className={Style.BankDetails_BoldText}>{obj.paymentType.bank}</p>
                                                        </div>
                                                        <div>
                                                            <p>Account Number</p>
                                                            <p className={Style.BankDetails_BoldText}>{obj.paymentType.accNo}</p>
                                                        </div><div>
                                                            <p>Account Name</p>
                                                            <p className={Style.BankDetails_BoldText}>{obj.paymentType.accName}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div id={Style.statusText}>{obj.status}</div>
                                                </td>

                                            </tr>
                                        )
                                    })
                                }


                                
                            </tbody>
                        </table>
                    </div>

                    <p className={Style.Personal_Info_headerText}>Withdrawal History</p>

                    <div className={Style.date_inputDiv}>

                        <span>{selectedDate.toDateString()} <img src={arrow_down} onClick={toggleCalendar} alt="" /></span>

                        {
                            isCalendarOpen && (

                                <div id={Style.calendar_popup}>
                                    <Date_Picker onDateChange={handleDateChange} />
                                </div>
                            )
                        }

                        <div className={Style.searchDiv}>
                            <img src={search} alt="" />
                            <InputField />
                        </div>
                        <img className={Style.download_img} src={download} alt="" />
                    </div>

                    <div id={Style.Personal_Info_tableDiv}>
                        <table>
                            <tr id={Style.headerTable}>
                                <th>S/N</th>
                                <th>Ref Number</th>
                                <th>Time</th>
                                <th>Country</th>
                                <th>Coin Converted</th>
                                <th>Amount Received</th>
                                <th>Bank Details</th>
                                <th>Status</th>
                            </tr>

                            <tbody>
                            {
                                    transaction.map((obj, index) => {

                                        return (

                                            <tr>
                                                <td>{index + 1}</td>
                                                <td>{obj.refNumber}</td>
                                                <td>{obj.time}</td>
                                                <td>{obj.country}</td>
                                                <td>{obj.amountPaid}</td>
                                                <td>{obj.coinReceived}</td>
                                                <td>
                                                    <div id={Style.BankDetails_Div}>
                                                        <div>
                                                            <p>Bank</p>
                                                            <p className={Style.BankDetails_BoldText}>{obj.paymentType.bank}</p>
                                                        </div>
                                                        <div>
                                                            <p>Account Number</p>
                                                            <p className={Style.BankDetails_BoldText}>{obj.paymentType.accNo}</p>
                                                        </div><div>
                                                            <p>Account Name</p>
                                                            <p className={Style.BankDetails_BoldText}>{obj.paymentType.accName}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div id={Style.statusText}>{obj.status}</div>
                                                </td>

                                            </tr>
                                        )
                                    })
                                }

                               
                            </tbody>
                        </table>
                    </div>

                    <p className={Style.Personal_Info_headerText}>Subscription History</p>

                    <div className={Style.date_inputDiv}>
                        <p>3rd October, 2024 <img src={arrow_down} alt="" /></p>
                        <div className={Style.searchDiv}>
                            <img src={search} alt="" />
                            <InputField />
                        </div>
                        <img className={Style.download_img} src={download} alt="" />
                    </div>

                    <div id={Style.Personal_Info_tableDiv}>
                        <table>
                            <tr id={Style.headerTable}>
                                <th>S/N</th>
                                <th>Date</th>
                                <th>Ref Number</th>
                                <th>Subscription Type</th>
                                <th>Amount Paid</th>
                                <th>Payment Type</th>
                                <th>Status</th>
                            </tr>

                            <tbody>
                            {
                                    transaction.map((obj, index) => {

                                        return (

                                            <tr>
                                                <td>{index + 1}</td>
                                                <td>{obj.refNumber}</td>
                                                <td>{obj.time}</td>
                                                <td>{obj.subType}</td>
                                                <td>{obj.amountPaid}</td>

                                                <td>
                                                    <div id={Style.BankDetails_Div}>
                                                        <div>
                                                            <p>Bank</p>
                                                            <p className={Style.BankDetails_BoldText}>{obj.paymentType.bank}</p>
                                                        </div>
                                                        <div>
                                                            <p>Account Number</p>
                                                            <p className={Style.BankDetails_BoldText}>{obj.paymentType.accNo}</p>
                                                        </div><div>
                                                            <p>Account Name</p>
                                                            <p className={Style.BankDetails_BoldText}>{obj.paymentType.accName}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div id={Style.statusText}>{obj.status}</div>
                                                </td>

                                            </tr>
                                        )
                                    })
                                }

                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Personal_Info