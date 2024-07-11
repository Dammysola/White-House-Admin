import React from 'react'
import Style from '../revenue/Revenue.module.css'
import Header from '../../../components/header/Header'
import Total_Card from '../../../components/total_Card/Total_Card'
import graph from '../../../assets/images/graph.jpg'
import smiley from '../../../assets/svg/blue_smiley.svg'
import line_Graph from '../../../assets/images/line_Graph.png'

const Revenue = () => {

    const total_Card2 = [
        {
            image1: './src/assets/svg/Activity.svg',
            text: 'Total Players',
            divText: 'View all',
            price: '$25,052,985'
        },
        {
            image1: './src/assets/svg/Activity.svg',
            text: 'Total Bet Placed',
            divText: 'View all',
            price: '2m'
        }
    ]

    return (
        <div id={Style.Revenue_mainDiv}>

            <Header
                headerText={"Revenue"}
                headerInfo={"Here’s an information on all Revenue"}
            />

            <div id={Style.Revenue_wrapperDiv}>
                <div id={Style.Revenue_weeklyReport_Div}>
                    <div id={Style.Total_Card_mapDiv}>
                        {
                            total_Card2.map((object) => {
                                return (
                                    <Total_Card
                                        image1={object.image1}
                                        text={object.text}
                                        divText={object.divText}
                                        price={object.price}
                                    />
                                )
                            })
                        }
                    </div>
                    <img src={graph} alt="" />
                </div>

                <div id={Style.Revenue_earning_wrapperDiv}>
                    <div id={Style.Revenue_total_EarningDiv}>
                        <div className={Style.Revenue_earningDiv}>

                            <p className={Style.earningText}>Daily Revenue</p>
                            <p className={Style.priceText}>$3,000</p>

                            <div id={Style.Revenue_progressDiv}>
                                <div id={Style.Revenue_progressBar}></div>
                                <img src={smiley} alt="" />
                            </div>
                            <p className={Style.Revenue_infoText}>70% more earning than last month, keep
                                watching t find out more</p>
                        </div>

                        <div className={Style.Revenue_earningDiv}>

                            <p className={Style.earningText}>Earnings this month</p>
                            <p className={Style.priceText}>$23,000</p>

                            <div id={Style.Revenue_progressDiv}>
                                <div id={Style.Revenue_progressBar_two}></div>
                                <p id={Style.Revenue_percentText}>45%</p>
                            </div>
                            <p className={Style.Revenue_infoText}>70% more earning than last month, keep
                                watching t find out more</p>
                        </div>

                    </div>
                    <img id={Style.Revenue_graph} src={line_Graph} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Revenue