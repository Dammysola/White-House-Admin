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
import Stats_Card from '../../../components/stats_card/Stats_Card'

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
    const stats_card1 = [
        {
            img: rise,
            figure: "200k",
            text: "Bet Placed",
            to: "/placebet"

        },
        {
            img: person,
            figure: "2m",
            text: "All Users",
            to: "/placebet"
        },
        {
            img: flag,
            figure: "14",
            text: "Reg Countries",
            to: "/placebet"
        },
        {
            img: rise,
            figure: "200k",
            text: "Bet Placed",
            to: "/placebet"

        },
    ]

    return (
        <div id={Style.Dashboard_MainDiv}>
            <Header
                headerText={"Welcome, Admin"}
                headerInfo={"Here’s an overview of White House"} />

            <div id={Style.Dashboard_WrapperDiv}>
                <div id={Style.Dashboard_CardGraph_Wrapper}>
                    <div id={Style.Dashboard_Card_wrapper}>
                        
                            {
                                stats_card1.map((obj)=>{
                                    return(
                                        <Stats_Card
                                        img ={obj.img}
                                        figure = {obj.figure}
                                        text = {obj.text} 
                                        to = {obj.to}/>
                                    )
                                })
                            }
                    
                    </div>
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
                                <YAxis dataKey="pv" fontSize={"0.7rem"}></YAxis>
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>


                <div id={Style.BarChart_Div}>
                    <div id={Style.Dashboard_lineChart_Two}>
                        <p id={Style.Dashboard_RevenueText}>Revenue</p>
                        <ResponsiveContainer width="100%" height="100%">
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
                                <Tooltip />
                                <Bar dataKey="pv" fill="#113353" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                    <div id={Style.Chart_mainDiv}>
                        <div id={Style.PayoutsText}>Bet Placed</div>
                        <ResponsiveContainer width="100%" height="100%">
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
                                <Tooltip />
                                <Bar dataKey="uv" fill="#075070" />
                                <Bar dataKey="amt" fill="#26EEC8" />
                            </BarChart>
                        </ResponsiveContainer>

                    </div>

                </div>


            </div>


        </div>
    )
}

export default WhiteHouse_Dashboard