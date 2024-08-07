import React from 'react'
// import Style from '../total_Top_Agents/Total_Top_Agents.module.css'
import Header from '../../../../../components/header/Header'
import person_img from '../../../../../assets/images/person_img.png'
import Style from '../Top_Agents.module.css'
import InputField from '../../../../../components/input/InputField'


const Total_Top_Agents = () => {
    return (
        <div id={Style.Top_Agents_mainDiv}>
            <Header
                headerText={"Top Performing Agents"}
                headerInfo={"Here’s an overview of top performing agents"} />

            <div id={Style.Top_Agents_wrapperDiv}>

                <div id={Style.Top_Agents_header_inputDiv}>
                    <div id={Style.Top_Agents_headerText}>Top Performing Agents</div>
                    {/* <InputField/> */}
                </div>
                <div id={Style.Top_Agents_TableWrapperDiv}>
                    <table>
                        <tr id={Style.headerTable}>
                            <th>S/N</th>
                            <th>Agent Name</th>
                            <th>In-app calls</th>
                            <th>In-app messages</th>
                            <th>Mails</th>
                            <th>Toll calls</th>
                            <th>Action</th>
                        </tr>

                        <tbody>
                            <tr>
                                <td>1</td>
                                <td><p><img src={person_img} alt="" /> John Doe</p></td>
                                <td className={Style.tableData}>200</td>
                                <td className={Style.tableData}>400</td>
                                <td className={Style.tableData}>345</td>
                                <td className={Style.tableData}>200</td>
                                <td><button style={{ backgroundColor: "#0E093C", border: "none", color: "#FFFFFF", fontSize: "0.7rem", width: "5.18rem", borderRadius: "8px", height: "1.37rem" }}>Review</button></td>
                            </tr>

                            <tr>
                                <td>2</td>
                                <td><p><img src={person_img} alt="" /> John Doe</p></td>
                                <td className={Style.tableData}>200</td>
                                <td className={Style.tableData}>400</td>
                                <td className={Style.tableData}>345</td>
                                <td className={Style.tableData}>200</td>
                                <td><button style={{ backgroundColor: "#0E093C", border: "none", color: "#FFFFFF", fontSize: "0.7rem", width: "5.18rem", borderRadius: "8px", height: "1.37rem" }}>Review</button></td>
                            </tr>

                            <tr>
                                <td>3</td>
                                <td><p><img src={person_img} alt="" /> John Doe</p></td>
                                <td className={Style.tableData}>200</td>
                                <td className={Style.tableData}>400</td>
                                <td className={Style.tableData}>345</td>
                                <td className={Style.tableData}>200</td>
                                <td><button style={{ backgroundColor: "#0E093C", border: "none", color: "#FFFFFF", fontSize: "0.7rem", width: "5.18rem", borderRadius: "8px", height: "1.37rem" }}>Review</button></td>
                            </tr>

                            <tr>
                                <td>4</td>
                                <td><p><img src={person_img} alt="" /> John Doe</p></td>
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

export default Total_Top_Agents