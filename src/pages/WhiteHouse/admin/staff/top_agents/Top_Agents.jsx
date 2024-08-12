import React from 'react'
import Style from '../top_agents/Top_Agents.module.css'
import Header from '../../../../../components/header/Header'
import smiley from '../../../../../assets/svg/gray_smiley.svg'


const Top_Agents = () => {
    return (
        <div id={Style.Top_Agents_mainDiv}>
            <Header
                headerText={"Top Performing Agents"}
                headerInfo={"Here’s an overview of top performing agents"} />

            <div id={Style.Top_Agents_wrapperDiv}>
                <p id={Style.Top_Agents_headerText}>John Doe’s Performance Overview</p>

                <div id={Style.Revenue_total_EarningDiv}>

                    <div className={Style.Revenue_earningDiv}>

                        <p id={Style.averageCall_Text}>Prompt Response</p>
                        <p></p>
                        <div className={Style.Revenue_progressDiv}>
                            <div className={Style.priceText}>3 minutes</div>
                            <img src={smiley} alt="" />
                        </div>
                        <p className={Style.Revenue_infoText}>70% more earning than last month, keep
                            watching to find out more</p>
                    </div>

                    <div className={Style.Revenue_earningDiv}>

                        <p className={Style.earningText}>Prompt Response</p>
                        <p className={Style.priceText}>70%</p>

                        <div className={Style.Revenue_progressDiv}>
                            <div className={Style.Revenue_progressBar}></div>
                            <img src={smiley} alt="" />
                        </div>
                        <p className={Style.Revenue_infoText}>70% more earning than last month, keep
                            watching to find out more</p>
                    </div>

                    <div className={Style.Revenue_earningDiv}>

                        <p className={Style.earningText}>Prompt Response</p>
                        <p className={Style.priceText}>70%</p>

                        <div className={Style.Revenue_progressDiv}>
                            <div className={Style.Revenue_progressBar}></div>
                            <img src={smiley} alt="" />
                        </div>
                        <p className={Style.Revenue_infoText}>70% more earning than last month, keep
                            watching to find out more</p>
                    </div>

                    <div className={Style.Revenue_earningDiv}>
                        <p className={Style.earningText}>Prompt Response</p>
                        <p className={Style.priceText}>70%</p>

                        <div className={Style.Revenue_progressDiv}>
                            <div className={Style.Revenue_progressBar}></div>
                            <img src={smiley} alt="" />
                        </div>
                        <p className={Style.Revenue_infoText}>70% more earning than last month, keep
                            watching to find out more</p>
                    </div>
                </div>
                <div id={Style.Top_Agents_TableWrapperDiv}>
                    <table>
                        <tr id={Style.headerTable}>
                            <th>S/N</th>
                            <th>Days</th>
                            <th>In-app calls</th>
                            <th>In-app messages</th>
                            <th>Mails</th>
                            <th>Total calls</th>
                            <th>Action</th>

                        </tr>

                       <tbody>
                       <tr>
                            <td>1</td>
                            <td>Monday</td>
                            <td className={Style.tableData}>200</td>
                            <td className={Style.tableData}>400</td>
                            <td className={Style.tableData}>345</td>
                            <td className={Style.tableData}>200</td>
                            <td><button style={{ backgroundColor: "#0E093C", border: "none", color: "#FFFFFF", fontSize: "0.7rem", width: "5.18rem", borderRadius: "8px", height: "1.37rem" }}>Review</button></td>
                        </tr>

                        <tr>
                            <td>2</td>
                            <td>Monday</td>
                            <td className={Style.tableData}>200</td>
                            <td className={Style.tableData}>400</td>
                            <td className={Style.tableData}>345</td>
                            <td className={Style.tableData}>200</td>
                            <td><button style={{ backgroundColor: "#0E093C", border: "none", color: "#FFFFFF", fontSize: "0.7rem", width: "5.18rem", borderRadius: "8px", height: "1.37rem" }}>Review</button></td>
                        </tr>

                        <tr>
                            <td>3</td>
                            <td>Monday</td>
                            <td className={Style.tableData}>200</td>
                            <td className={Style.tableData}>400</td>
                            <td className={Style.tableData}>345</td>
                            <td className={Style.tableData}>200</td>
                            <td><button style={{ backgroundColor: "#0E093C", border: "none", color: "#FFFFFF", fontSize: "0.7rem", width: "5.18rem", borderRadius: "8px", height: "1.37rem" }}>Review</button></td>
                        </tr>

                        <tr>
                            <td>4</td>
                            <td>Monday</td>
                            <td className={Style.tableData}>200</td>
                            <td className={Style.tableData}>400</td>
                            <td className={Style.tableData}>345</td>
                            <td className={Style.tableData}>200</td>
                            <td><button style={{ backgroundColor: "#0E093C", border: "none", color: "#FFFFFF", fontSize: "0.7rem", width: "5.18rem", borderRadius: "8px", height: "1.37rem" }}>Review</button></td>
                        </tr>

                        <tr>
                            <td>5</td>
                            <td>Monday</td>
                            <td className={Style.tableData}>200</td>
                            <td className={Style.tableData}>400</td>
                            <td className={Style.tableData}>345</td>
                            <td className={Style.tableData}>200</td>
                            <td><button style={{ backgroundColor: "#0E093C", border: "none", color: "#FFFFFF", fontSize: "0.7rem", width: "5.18rem", borderRadius: "8px", height: "1.37rem" }}>Review</button></td>
                        </tr>

                        <tr>
                            <td>6</td>
                            <td>Monday</td>
                            <td className={Style.tableData}>200</td>
                            <td className={Style.tableData}>400</td>
                            <td className={Style.tableData}>345</td>
                            <td className={Style.tableData}>200</td>
                            <td><button style={{ backgroundColor: "#0E093C", border: "none", color: "#FFFFFF", fontSize: "0.7rem", width: "5.18rem", borderRadius: "8px", height: "1.37rem" }}>Review</button></td>
                        </tr>

                        <tr>
                            <td>7</td>
                            <td>Monday</td>
                            <td className={Style.tableData}>200</td>
                            <td className={Style.tableData}>400</td>
                            <td className={Style.tableData}>345</td>
                            <td className={Style.tableData}>200</td>
                            <td><button style={{ backgroundColor: "#0E093C", border: "none", color: "#FFFFFF", fontSize: "0.7rem", width: "5.18rem", borderRadius: "8px", height: "1.37rem" }}>Review</button></td>
                        </tr>
                       </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Top_Agents