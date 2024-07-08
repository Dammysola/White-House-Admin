import React from 'react'
import Style from '../revenue/Revenue.module.css'
import Header from '../../../components/header/Header'
import Total_Card from '../../../components/total_Card/Total_Card'
import graph from '../../../assets/images/graph.jpg'



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

            <div>
                <div>
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
                <div>
                    <div>
                        <p>Daily Revenue</p>
                        <p>$3,000</p>
                        <div></div>
                        <img src="" alt="" />
                        <p>70% more earning than last month, keep
                        watching t find out more</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Revenue