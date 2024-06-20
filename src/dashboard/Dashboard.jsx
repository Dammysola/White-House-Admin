import React, { useEffect, useState } from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import Style from '../dashboard/Dashboard.module.css'
import calendar from '../assets/svg/Calendar.svg'
import emoji from '../assets/svg/Smiling_Face_with_Halo.svg'
import Total_Card from '../components/total_Card/Total_Card'
import gamePad from '../assets/svg/gamePad.svg'
import NavBar from '../components/navBar/NavBar'
import arrow_down from '../assets/svg/arrow_down.svg'
import axios from 'axios';
import Chart from '../components/chart/Chart';

const dashboard = () => {
    const [data, setData]= useState()

    useEffect(()=>{
        
        const FetchData = async ()=>{
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
            image2: './src/assets/svg/arrow_down-dark.svg',
            text: 'Total Revenue',
            divText: 'USD',
            price: '$25,052,985'
        },
        {
            image1: './src/assets/svg/Activity.svg',
            text: 'Total Users',
            price: '8,789,086'
        },
        {
            image1: './src/assets/svg/Work.svg',
            text: 'Total Bet Placed',
            divText: 'View all',
            price: '178,597,059'
        },
        {
            image1: './src/assets/svg/Swap.svg',
            text: 'Active Users',
            price: '13,569,123'
        },
        {
            image1: './src/assets/svg/Activity.svg',
            text: 'Total Staff',
            divText: 'View all',
            price: '46'
        },
    ]
    return (
        <div id={Style.Dashboard_mainDiv}>
            <NavBar/>
            <div id={Style.Dashboard_WrapperDiv}>
                <div id={Style.Dashboard_welcomeText_Div}>
                    <div>
                        <div id={Style.Dashboard_welcomeText}>Welcome, Admin <img src={emoji} alt="" /></div>
                    <p>Here’s a summary of your transactions </p>
                    <div id={Style.Dashboard_gameText}>Games <img src={arrow_down} alt="" /></div>
                    </div>
                    <div>
                    
                        <img src={gamePad} alt="" />
                    </div>

                </div>
                <div id={Style.Dashboard_listCalendar_Div}>
                    <div id={Style.Dashboard_listDiv}>
                        <button>All</button>
                        <p>Last 24 hour</p>
                        <p>Last Week</p>
                        <p>Last Month</p>
                        <p>Last Year</p>
                    </div>
                    <div id={Style.Dashboard_CalendarDiv}>
                        <img src={calendar} alt="" />
                        <div>Filter by date range</div>
                    </div>
                </div>
            </div>
            
            <div id={Style.Total_Card_mapDiv}>
                {
                    total_Card1.map((object)=>{
                        return(
                            <Total_Card
                            image1 = {object.image1}
                            image2 = {object.image2}
                            text = {object.text}
                            divText = {object.divText}
                            price = {object.price}
                            />
                        )
                    })
                }
            </div>
            <div id={Style.BarChart_Div}>
                <Chart data= {data}></Chart>
            </div>
            
        </div>
    )
}

export default dashboard