import React from 'react'
import Style from '../staff/CustomerCare.module.css'
import Total_Card from '../../../components/total_Card/Total_Card'
import arrow_down from '../../../assets/svg/arrow_down-dark.svg'
import person_img from '../../../assets/images/person_img.png'
import Header from '../../../components/header/Header'


const CustomerCare = () => {
    const total_Card2 = [
        {
            image1: './src/assets/svg/Activity.svg',
            text: 'All Staff',
            divText: 'View all',
            to: '/allStaffs',
            price: '200'
        },
        {
            image1: './src/assets/svg/Activity.svg',
            text: 'Reports',
            divText: 'View all',
            price: '200'
        },
        {
            image1: './src/assets/svg/Work.svg',
            text: 'Call Sessions',
            divText: 'View all',
            price: '180'
        },
        {
            image1: './src/assets/svg/Activity.svg',
            text: 'offline',
            divText: 'View all',
            price: '200'
        },
    ]
    return (
        <div id={Style.CustomerCare_mainDiv}>

            <Header
                headerText={"Welcome, Admin"}
                headerInfo={"Here’s an overview of all Staff"} />

            <div id={Style.CustomerCare_Div}>
                <div>
                    <p id={Style.PlaceBet_summaryText}>Customer Care Summary</p>
                    <div id={Style.Total_Card_mapDiv}>
                        {
                            total_Card2.map((object) => {
                                return (
                                    <Total_Card
                                        image1={object.image1}
                                        text={object.text}
                                        divText={object.divText}
                                        price={object.price}
                                        to={object.to}
                                    />
                                )
                            })
                        }
                    </div>

                </div>
                <div id={Style.CustomerCare_Progress_mainDiv}>
                    <div id={Style.CustomerCare_Progress_Wrapper}>
                        <div id={Style.CustomerCare_textDiv}>
                            <p>Lorem ipsum solert</p>
                            <div id={Style.monthDiv}>Month <img src={arrow_down} alt="" /></div>
                        </div>
                        <div className={Style.Staff_progress}>
                            <div id={Style.Staff_details}>
                                <div id={Style.imgDiv}>
                                    <img src={person_img} alt="" />
                                    <p>John Doe</p></div>
                                <p>76.5%</p>
                            </div>
                            <div id={Style.progressDiv}></div>
                        </div>
                        <div className={Style.Staff_progress}>
                            <div id={Style.Staff_details}>
                                <div id={Style.imgDiv}>
                                    <img src={person_img} alt="" />
                                    <p>John Doe</p></div>
                                <p>76.5%</p>
                            </div>
                            <div id={Style.progressDiv}></div>
                        </div>
                        <div className={Style.Staff_progress}>
                            <div id={Style.Staff_details}>
                                <div id={Style.imgDiv}>
                                    <img src={person_img} alt="" />
                                    <p>John Doe</p>
                                </div>
                                <p>76.5%</p>
                            </div>
                            <div id={Style.progressDiv}></div>
                        </div>
                    </div>
                    <div id={Style.CustomerCare_SatisfactionDiv}>
                        <div id={Style.CustomerCare_Satisfaction_GradeDiv}>
                            <p>Customer Care</p>
                            <p>Satisfaction</p>
                        </div>
                        <div className={Style.CustomerCare_Satisfaction_GradeDiv}>
                            <div id={Style.imgDiv}>
                                <img src={person_img} alt="" />
                                <p>John Doe</p>
                            </div>
                            <p className={Style.percentage}>50%</p>
                        </div>
                        <div className={Style.CustomerCare_Satisfaction_GradeDiv}>
                            <div id={Style.imgDiv}>
                                <img src={person_img} alt="" />
                                <p>John Doe</p>
                            </div>
                            <p className={Style.percentage}>50%</p>
                        </div>
                        <div className={Style.CustomerCare_Satisfaction_GradeDiv}>
                            <div id={Style.imgDiv}>
                                <img src={person_img} alt="" />
                                <p>John Doe</p>
                            </div>
                            <p className={Style.percentage}>50%</p>
                        </div>
                        <div className={Style.CustomerCare_Satisfaction_GradeDiv}>
                            <div id={Style.imgDiv}>
                                <img src={person_img} alt="" />
                                <p>John Doe</p>
                            </div>
                            <p className={Style.percentage}>50%</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerCare