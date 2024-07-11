import React, { useEffect, useState } from 'react'
import Style from '../placeBet/PlaceBet.module.css'
import Total_Card from '../../../components/total_Card/Total_Card'
import line_graph from '../../../assets/images/line_Graph.png'
import Chart from '../../../components/chart/Chart'
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
                        <Chart data={data}></Chart>
                        <img src={line_graph} alt="" />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default PlaceBet