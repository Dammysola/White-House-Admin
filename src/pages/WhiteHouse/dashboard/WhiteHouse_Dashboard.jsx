import React, { useEffect, useState } from 'react'
import Style from '../dashboard/WhiteHouse_Dashboard.module.css'
import rise from '../../../assets/svg/rise.svg'
import flag from '../../../assets/svg/flag.svg'
import person from '../../../assets/svg/person.svg'
import arrow_side from '../../../assets/svg/arrow_side.svg'
import line_graph from '../../../assets/images/line_Graph.png'
import Chart from '../../../components/chart/Chart'

const WhiteHouse_Dashboard = () => {
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
    return (
        <div id={Style.Dashboard_MainDiv}>
            <div id={Style.Dashboard_HeaderDiv}>

                <div id={Style.Dashboard_header}>Welcome, Admin</div>
                <p>Here’s an overview of White House</p>
            </div>

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
                            <p className={Style.Card_figure}>200k</p>
                            <p className={Style.Card_text}>Bet Placed</p>
                        </div>
                        <img src={arrow_side} alt="" />
                    </div>
                    <div className={Style.Dashboard_CardDiv}>
                        <img src={flag} alt="" />
                        <div>
                            <p className={Style.Card_figure}>200k</p>
                            <p className={Style.Card_text}>Bet Placed</p>
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
                <img id={Style.img} src={line_graph} alt="" />
                <div id={Style.BarChart_Div}>
                    <img className={Style.img} src={line_graph} alt="" />

                    <Chart data={data}></Chart>
                </div>
            </div>
            

        </div>
    )
}

export default WhiteHouse_Dashboard