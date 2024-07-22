import React, { useEffect, useState } from 'react'
import Style from '../placeBet/PlaceBet.module.css'
import Total_Card from '../../../components/total_Card/Total_Card'
import {Bar, BarChart, XAxis, YAxis, Tooltip, ResponsiveContainer} from 'recharts';
import Header from '../../../components/header/Header'




const PlaceBet = () => {
    const [data, setData] = useState()

    useEffect(() => {

        const FetchData = async () => {
            const response = await fetch("https://api.coincap.io/v2/assets/?limit=10")
            const data = await response.json()
            console.log(data);
            setData(data.data)
        }
        FetchData()
    }, [])

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

    const total_Card1 = [
        {
            image1: './src/assets/svg/Activity.svg',
            text: 'Total Bet Placed',
            divText: 'View all',
            price: '$25,052,985',
            to: '/totalBetPlaced'
        },
        {
            image1: './src/assets/svg/Activity.svg',
            text: 'Total Players',
            divText: 'View all',
            price: '2m',
            to: "/totalPlayers"
        },
        {
            image1: './src/assets/svg/Work.svg',
            text: 'Winners',
            divText: 'View all',
            price: '345,000',
            to: '/winners'
        },
        {
            image1: './src/assets/svg/Activity.svg',
            text: 'Loosers',
            divText: 'View all',
            price: '23,000',
            to: "/staffDetails"
        },
    ]

    return (
        <div id={Style.PlaceBet_mainDiv}>

            <Header
                headerText={"Bet Placed"}
                headerInfo={"Here’s an information on all placed bets"} />

            <div id={Style.PlaceBet_wrapperDiv}>


                <div>
                    <p id={Style.PlaceBet_summaryText}>Today's Summary</p>
                    <div id={Style.Total_Card_mapDiv}>
                        {
                            total_Card1.map((object) => {
                                return (
                                    <Total_Card
                                        image1={object.image1}
                                        text={object.text}
                                        divText={object.divText}
                                        price={object.price}
                                        to = {object.to}
                                    />
                                )
                            })
                        }
                    </div>
                    <div id={Style.ChartDiv}>
                    <div id={Style.Chart_mainDiv}>
          <div id={Style.PayoutsText}>Bet Placed</div>
          <ResponsiveContainer
            width="100%"
            height= "100%">
            <BarChart
              width={300}
              height={100}
              data={line_data}
              margin={{
                top: 5,
                right: 30,
                left: -20,
                bottom: 10,
              }}
            >

              <XAxis dataKey="name" fontSize={"0.8rem"} tickLine={false} axisLine={false}></XAxis>
              <YAxis fontSize={"0.7rem"} tickLine={false} axisLine={false} ></YAxis>
              <Tooltip></Tooltip>
              <Bar dataKey="uv" stroke='none' stackId='a' fill='#0B9FE1'></Bar>
              <Bar dataKey="amt" stackId='a' fill='#003E79'></Bar>
            </BarChart>
          </ResponsiveContainer>

        </div>
                        <div id={Style.Dashboard_lineChart_Two}>
                        <p id={Style.Dashboard_RevenueText}>Revenue</p>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart width={300} height={100} data={line_data} margin={{
                                top: 5,
                                right: 30,
                                left: -30,
                                bottom: 10,
                            }} >
                                <XAxis dataKey="name" fontSize={"0.8rem"} tickLine={false} axisLine={false}></XAxis>
                                <YAxis dataKey="pv" fontSize={"0.7rem"} tickLine={false} axisLine={false}></YAxis>
                                <Bar dataKey="pv" fill="#075070" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default PlaceBet