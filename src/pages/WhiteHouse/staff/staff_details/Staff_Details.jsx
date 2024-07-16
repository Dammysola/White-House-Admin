import React from 'react'
import Style from '../staff_details/Staff_Details.module.css'
import { BarChart, Bar, ResponsiveContainer, YAxis, XAxis } from 'recharts';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import Header from '../../../../components/header/Header'
import person from '../../../../assets/images/Person1.png'
import arrow_down from '../../../../assets/svg/arrow_down-dark.svg'
import Barchart2 from '../../../../assets/images/Barchart2.png'
import rise from '../../../../assets/svg/rise.svg'
import arrow_side from '../../../../assets/svg/arrow_side.svg'
import users from '../../../../assets/svg/users.svg'



const Staff_Details = () => {

    const data = [
        {
            name: 'Monday',
            uv: 60,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Tuesday',
            uv: 60,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Wednesday',
            uv: 80,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Thursday',
            uv: 45,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Friday',
            uv: 85,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Saturday',
            uv: 100,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Sunday',
            uv: 60,
            pv: 4300,
            amt: 2100,
        },
    ];

    function getDate() {
        const today = new Date();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const date = today.getDate();
        return `${month}/${date}/${year}`;
      }

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
                <div id={Style.Staff_Details_hoursDaily_logDiv}>
                    <div>
                        <div id={Style.Staff_Details_BarChart}>
                            <p>Working Hours</p>
                            <CalendarHeatmap
                                startDate={new Date('2024-01-01')}
                                endDate={new Date('2024-12-01')}

                                values={[
                                    { date: '2024-04-01', count: 1 },
                                    { date: '2024-01-03', count: 2 },
                                    { date: '2024-01-06', count: 3 },
                                    { date: '2024-01-09', count: 4 },
                                    { date: '2024-01-09', count: 2 },
                                    { date: '2024-01-09', count: 4 },
                                    { date: '2024-07-15', count: 3 },
                                    { date: '2024-01-09', count: 4 }, 
                                ]}
                                // classForValue={(value) => {
                                //     if (!value) {
                                //         return 'color-empty';
                                //     }
                                //     return `color-scale-${value.count}`;
                                // }}
                            />
                        </div>

                        <div id={Style.Staff_Details_Card_wrapper}>
                            <div className={Style.Staff_Details_CardDiv}>
                                <img src={rise} alt="" />
                                <div>
                                    <p className={Style.Card_figure}>200k</p>
                                    <p className={Style.Card_text}>All Staff</p>
                                </div>
                                <img src={arrow_side} alt="" />
                            </div>
                            <div className={Style.Staff_Details_CardDiv}>
                                <img src={users} alt="" />
                                <div>
                                    <p className={Style.Card_figure}>14</p>
                                    <p className={Style.Card_text}>Departments</p>
                                </div>
                                <img src={arrow_side} alt="" />
                            </div>
                        </div>
                    </div>

                    <div id={Style.Staff_details_Daily_CallDiv}>

                        <div id={Style.Daily_Call_headerDiv}>
                            <p>Daily Call Log</p>
                            <p id={Style.dateText}>Week One October, 2024 <img src={arrow_down} alt="" /></p>
                        </div>

                        <table>

                            <tr>
                                <td>Days</td>
                                <td className={Style.Daily_CallText}>Calls</td>
                                <td className={Style.Daily_CallText}>Mails</td>
                                <td><button style={{ backgroundColor: "#075070", border: "none", color: "#FFFFFF", fontSize: "0.75rem", borderRadius: "0.5rem", height: "1.87rem", width: "5.12rem" }}>View Details</button></td>
                            </tr>
                            <tr>
                                <td>Monday</td>
                                <td className={Style.Daily_CallText}>46</td>
                                <td className={Style.Daily_CallText}>5</td>
                                <td><button style={{ backgroundColor: "#075070", border: "none", color: "#FFFFFF", fontSize: "0.75rem", borderRadius: "0.5rem", height: "1.87rem", width: "5.12rem" }}>View Details</button></td>
                            </tr>
                            <tr>
                                <td>Tuesday</td>
                                <td className={Style.Daily_CallText}>22</td>
                                <td className={Style.Daily_CallText}>13</td>
                                <td><button style={{ backgroundColor: "#075070", border: "none", color: "#FFFFFF", fontSize: "0.75rem", borderRadius: "0.5rem", height: "1.87rem", width: "5.12rem" }}>View Details</button></td>
                            </tr>
                            <tr>
                                <td>Wednesday</td>
                                <td className={Style.Daily_CallText}>45</td>
                                <td className={Style.Daily_CallText}>8</td>
                                <td><button style={{ backgroundColor: "#075070", border: "none", color: "#FFFFFF", fontSize: "0.75rem", borderRadius: "0.5rem", height: "1.87rem", width: "5.12rem" }}>View Details</button></td>
                            </tr>
                            <tr>
                                <td>Thursday</td>
                                <td className={Style.Daily_CallText}>34</td>
                                <td className={Style.Daily_CallText}>77</td>
                                <td><button style={{ backgroundColor: "#075070", border: "none", color: "#FFFFFF", fontSize: "0.75rem", borderRadius: "0.5rem", height: "1.87rem", width: "5.12rem" }}>View Details</button></td>
                            </tr>
                            <tr>
                                <td>Friday</td>
                                <td className={Style.Daily_CallText}>89</td>
                                <td className={Style.Daily_CallText}>5</td>
                                <td><button style={{ backgroundColor: "#075070", border: "none", color: "#FFFFFF", fontSize: "0.75rem", borderRadius: "0.5rem", height: "1.87rem", width: "5.12rem" }}>View Details</button></td>
                            </tr>
                            <tr>
                                <td>Saturday</td>
                                <td className={Style.Daily_CallText}>33</td>
                                <td className={Style.Daily_CallText}>566</td>
                                <td><button style={{ backgroundColor: "#075070", border: "none", color: "#FFFFFF", fontSize: "0.75rem", borderRadius: "0.5rem", height: "1.87rem", width: "5.12rem" }}>View Details</button></td>
                            </tr>
                            <tr>
                                <td>Sunday</td>
                                <td className={Style.Daily_CallText}>21</td>
                                <td className={Style.Daily_CallText}>44</td>
                                <td><button style={{ backgroundColor: "#075070", border: "none", color: "#FFFFFF", fontSize: "0.75rem", borderRadius: "0.5rem", height: "1.87rem", width: "5.12rem" }}>View Details</button></td>
                            </tr>
                        </table>

                        {/* <div id={Style.Daily_Call_headerDiv}>
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
                            <div className={Style.Daily_Call}>
                                <p >46</p>
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
                        </div> */}
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Staff_Details