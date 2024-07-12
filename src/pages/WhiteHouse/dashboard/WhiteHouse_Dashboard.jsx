import React, { useEffect, useState } from 'react'
import Style from '../dashboard/WhiteHouse_Dashboard.module.css'
import { BarChart, LineChart, Line, YAxis, XAxis, Bar, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
// import { } from 'recharts';
import rise from '../../../assets/svg/rise.svg'
import flag from '../../../assets/svg/flag.svg'
import person from '../../../assets/svg/person.svg'
import arrow_side from '../../../assets/svg/arrow_side.svg'
import line_graph from '../../../assets/images/line_Graph.png'
import Chart from '../../../components/chart/Chart'
import NavBar from '../../../components/navBar/NavBar'
import Header from '../../../components/header/Header'

const WhiteHouse_Dashboard = () => {
    // const [data, setData] = useState()

    // useEffect(() => {

    //     const FetchData = async () => {
    //         const response = await fetch("https://api.coincap.io/v2/assets/?limit=10")
    //         const data = await response.json()
    //         console.log(data);
    //         setData(data.data)
    //     }
    //     FetchData()
    // }, [])

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

    return (
        <div id={Style.Dashboard_MainDiv}>
            <Header
                headerText={"Welcome, Admin"}
                headerInfo={"Here’s an overview of White House"} />

            <div id={Style.Dashboard_CardGraph_Wrapper}>
                <div id={Style.Dashboard_Card_wrapper}>
                    <div className={Style.Dashboard_CardDiv}>
                        <img src={rise} alt="" />
                        <div>
                            <p className={Style.Card_figure}>200k</p>
                            <p className={Style.Card_text}>Bet Placed</p>
                        </div>
                        <img src={arrow_side} alt="" />
                    </div>
                    <div className={Style.Dashboard_CardDiv}>
                        <img src={person} alt="" />
                        <div>
                            <p className={Style.Card_figure}>2m</p>
                            <p className={Style.Card_text}>All Users</p>
                        </div>
                        <img src={arrow_side} alt="" />
                    </div>
                    <div className={Style.Dashboard_CardDiv}>
                        <img src={flag} alt="" />
                        <div>
                            <p className={Style.Card_figure}>14</p>
                            <p className={Style.Card_text}>Reg Countries</p>
                        </div>
                        <img src={arrow_side} alt="" />
                    </div>
                    <div className={Style.Dashboard_CardDiv}>
                        <img src={rise} alt="" />
                        <div>
                            <p className={Style.Card_figure}>200k</p>
                            <p className={Style.Card_text}>Bet Placed</p>
                        </div>
                        <img src={arrow_side} alt="" />
                    </div>
                </div>
                {/* <img id={Style.img} src={line_graph} alt="" /> */}
                <div id={Style.Dashboard_lineChart}>
                    <p id={Style.Dashboard_RevenueText}>Revenue</p>
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart width={300} height={100} data={line_data} margin={{
                            top: 5,
                            right: 30,
                            left: -30,
                            bottom: 10,
                        }} >
                            <CartesianGrid strokeDasharray="3 4 " vertical={false}></CartesianGrid>
                            <Line type="monotone" dot={false} dataKey="pv" stroke="#113353" backgr strokeWidth={4} />
                            <XAxis dataKey="name" fontSize={"0.8rem"}></XAxis>
                            {/* <legend ></legend> */}
                            <YAxis dataKey="pv" fontSize={"0.7rem"}></YAxis>
                        </LineChart>
                    </ResponsiveContainer>
                </div>


                <div>
                    {/* <Chart data={line_data}></Chart> */}
                </div>
                <div id={Style.BarChart_Div}>
                    <div id={Style.Dashboard_lineChart_Two}>
                        <p id={Style.Dashboard_RevenueText}>Revenue</p>
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart width={300} height={100} data={line_data} margin={{
                                top: 5,
                                right: 30,
                                left: -30,
                                bottom: 10,
                            }} >
                                <CartesianGrid strokeDasharray="3 4 " vertical={false}></CartesianGrid>
                                <Line type="monotone" dot={false} dataKey="pv" stroke="#113353" backgr strokeWidth={4} />
                                <XAxis dataKey="name" fontSize={"0.8rem"}></XAxis>
                                {/* <legend ></legend> */}
                                <YAxis dataKey="pv" fontSize={"0.7rem"}></YAxis>
                            </LineChart>
                        </ResponsiveContainer>
                    </div>

                    {/* <Chart data={line_data}></Chart> */}
                    <div id={Style.Chart_mainDiv}>
                        <div id={Style.PayoutsText}>Bet Placed</div>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart width={150} height={40} data={line_data} margin={{
                                top: 5,
                                right: 30,
                                left: -20,
                                bottom: 10,
                            }}>
                                <Bar dataKey="uv" fill="#075070" barSize="30" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} fontSize={"0.8rem"}></XAxis>
                                <YAxis dataKey="uv" axisLine={false} tickLine={false} fontSize={"0.7rem"}></YAxis>
                            </BarChart>
                        </ResponsiveContainer>

                    </div>
                </div>


            </div>


        </div>
    )
}

export default WhiteHouse_Dashboard