import React, { useState } from 'react'
import Style from '../winners/Ticket_Winners.module.css'
import winners_background from '../../../assets/svg/winners_background.svg'
import filter_img from '../../../assets/svg/Complete_filter_img.svg'
import download from '../../../assets/svg/download_img.svg'
import InputField from '../../../components/input/InputField'
import Ticket_Losers from '../losers/Ticket_Losers'
import status_img from '../../../assets/svg/status_img.svg'
import winner_lady from '../../../assets/svg/winner_lady.svg'
import Transaction from '../Transaction'
import Account_Nav from '../../../components/all_Account_Nav/Account_Nav'

const Ticket_Winners = () => {

    let [toggleIndex, setToggleIndex] = useState(0);

    const transactionToggle = (index) => {

        setToggleIndex(index)

    }
    return (

        <div id={Style.Transaction_Div}>
            {/* <Account_Nav/> */}

            {toggleIndex == 0 ? <div>
                <div id={Style.Transaction_WrapperDiv}>
                    <div id={Style.Transaction_welcomeText_Div}>
                        <div>
                            <div id={Style.homeText}>Home <span>{'>'} Tickets</span> </div>
                            <div id={Style.Transaction_header}>Tickets</div>
                            <p>Here is a list of all winning tickets</p>
                        </div>
                    </div>
                </div>

                <div id={Style.Transaction_mainDiv}>
                    <div id={Style.bgImage_Div}>
                        <img id={Style.background} src={winners_background} alt="" />
                        <img id={Style.ladyImg} src={winner_lady} alt="" /></div>



                    <div id={Style.Transaction_tableWrapperDiv}>
                        <div id={Style.TransactionText}>Staff Lists <span>(1,355)</span></div>

                        <div id={Style.Transaction_listCalendar_Div}>
                            <div id={Style.Transaction_listDiv}>
                                <button onClick={() => transactionToggle(0)} style={{ backgroundColor: toggleIndex == 0 ? "#003E79" : "transparent" }}>Winning transaction</button>
                                <button onClick={() => transactionToggle(1)} style={{ backgroundColor: toggleIndex == 1 ? "#003E79" : "transparent" }}>Losing transaction</button>
                                <button onClick={() => transactionToggle(3)} style={{ backgroundColor: toggleIndex == 3 ? "#003E79" : "transparent" }}>All</button>

                            </div>

                            <div id={Style.input_FilterDiv}>
                                <div>
                                    <p>3rd July, 2024</p>
                                    <InputField
                                        placeholder={"Search tickets"} />
                                </div>

                                <img src={filter_img} alt="" />
                                <img src={download} alt="" />
                            </div>
                        </div>


                        <table>
                            <tr id={Style.headerTable}>
                                <th>S/N</th>
                                <th>User ID</th>
                                <th>Ticket ID</th>
                                <th>Amount Staked</th>
                                <th>Amount Won</th>
                                <th>Booking Code</th>
                                <th>Country </th>
                                <th>Status <img src={status_img} alt="" /></th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>SA 123476689</td>
                                <td>8012345678</td>
                                <td>₦100.00</td>
                                <td>₦10,000.00</td>
                                <td>ID12535408</td>
                                <td>Nigeria</td>
                                <td>
                                    <div id={Style.statusText}>Won</div>
                                </td>
                            </tr>

                            <tr>
                                <td>2</td>
                                <td>SA 123476689</td>
                                <td>8012345678</td>
                                <td>₦100.00</td>
                                <td>₦10,000.00</td>
                                <td>ID12535408</td>
                                <td>Nigeria</td>
                                <td>
                                    <div id={Style.action_field}>
                                        <div id={Style.statusText}>Won</div>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>3</td>
                                <td>SA 123476689</td>
                                <td>8012345678</td>
                                <td>₦100.00</td>
                                <td>₦10,000.00</td>
                                <td>ID12535408</td>
                                <td>Nigeria</td>
                                <td>
                                    <div id={Style.action_field}>
                                        <div id={Style.statusText}>Won</div>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>4</td>
                                <td>SA 123476689</td>
                                <td>8012345678</td>
                                <td>₦100.00</td>
                                <td>₦10,000.00</td>
                                <td>ID12535408</td>
                                <td>Nigeria</td>
                                <td>
                                    <div id={Style.action_field}>
                                    <div id={Style.statusText}>Won</div>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>5</td>
                                <td>SA 123476689</td>
                                <td>8012345678</td>
                                <td>₦100.00</td>
                                <td>₦10,000.00</td>
                                <td>ID12535408</td>
                                <td>Nigeria</td>
                                <td>
                                    <div id={Style.action_field}>
                                        <div id={Style.statusText}>Won</div>
                                    </div>
                                </td>
                            </tr>

                            <tr id={Style.line}>
                                <td>6</td>
                                <td>SA 123476689</td>
                                <td>8012345678</td>
                                <td>₦100.00</td>
                                <td>₦10,000.00</td>
                                <td>ID12535408</td>
                                <td>Nigeria</td>
                                <td>
                                    <div id={Style.action_field}>
                                    <div id={Style.statusText}>Won</div>
                                    </div>
                                </td>
                            </tr>

                            {/* <tr id={Style.line}>
                            <td>7</td>
                            <td>SA 123476689</td>
                            <td>8012345678</td>
                            <td>₦100.00</td>
                            <td>₦10,000.00</td>
                            <td>ID12535408</td>
                            <td>Nigeria</td>
                            <td>
                                <div id={Style.action_field}>
                                    <div id={Style.statusText}>Won</div>
                                </div>
                            </td>
                        </tr> */}

                        </table>



                    </div>



                </div>
            </div> : ""}
            <div>
                {toggleIndex == 1 ?
                    <Ticket_Losers /> : ""
                }
                {toggleIndex == 3 ? <Transaction /> : ""

                }

            </div>
        </div>
    )
}

export default Ticket_Winners