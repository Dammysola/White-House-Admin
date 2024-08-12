import React from 'react'
import Style from '../customerCare_Dashboard/CustomerCare_Dashboard.module.css'
import Header from '../../../../components/header/Header'
import Progress_Bar from '../../../../components/progress_bar/Progress_Bar'



const CustomerCare_Dashboard = () => {

    const progressDiv = [

        {
            text: "Average First Contact Resolution Rate",
            percent: "70%",
            infoText: "70% more earning than last month, keep watching to find out more"
        },
        {
            text: "Average Customer Satisfaction Rate",
            percent: "70%",
            infoText: "70% more earning than last month, keep watching to find out more"
        },
        {
            text: "Average Resolution Time",
            percent: "70%",
            infoText: "70% more earning than last month, keep watching to find out more"
        },
        {
            text: "Average Response Time",
            percent: "70%",
            infoText: "70% more earning than last month, keep watching to find out more"
        }
    ]
    return (
        <div id={Style.CustomerCare_Dashboard_mainDiv}>
            <Header
                headerText={"Welcome John"}
                headerInfo={"Here’s an information on all Users"} />

            <div id={Style.CustomerCare_Dashboard_wrapperDiv}>
                <div id={Style.Dashboard_CardDiv}>
                    {
                        progressDiv.map((obj) => {
                            return (
                                <Progress_Bar
                                    text={obj.text}
                                    infoText={obj.infoText}
                                    percent={obj.percent} />
                            )
                        })
                    }
                </div>
                <div>
                    <div>
                        <p>Recent Assigned Tickets</p>
                        <p>View All</p>
                    </div>

                    <div>
                        <button>All</button>
                        <button>Mail</button>
                        <button>In-app messages</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerCare_Dashboard