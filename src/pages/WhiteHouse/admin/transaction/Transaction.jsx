import React, { useState } from 'react'
import Style from './Transaction.module.css'
import filter_img from '../../../../assets/svg/Complete_filter_img.svg'
import download from '../../../../assets/svg/download_img.svg'
import status_img from '../../../../assets/svg/status_img.svg'
import InputField from '../../../../components/input/InputField'
import Ticket_Losers from './losers/Ticket_Losers'
import Ticket_Winners from './winners/Ticket_Winners'
import Search from '../../../../assets/svg/Search.svg'
import Header from '../../../../components/header/Header'
import betCoin from '../../../../assets/svg/betCoin.svg'
import total_users from '../../../../assets/svg/total_users.svg'
import winner from '../../../../assets/svg/winner.svg'
import Total_Card from '../../../../components/total_Card/Total_Card'
import winners_background from '../../../../assets/svg/winners_background.svg'


const Transaction = () => {
    let [toggleIndex, setToggleIndex] = useState(0);
    let [cardToggleIndex, setCardToggleIndex] = useState(0);

    const transactionToggle = (index) => {

        setToggleIndex(index)

    }

    const toggle = (index) => {

        setCardToggleIndex(index)

    }


    const stats_card6 = [
        {
            image1: betCoin,
            price: "23,000",
            text: "Bet transactions",
            to: "/placebet",
            divText: "View All"
        },
        {
            image1: total_users,
            price: "20K",
            text: "Coin Purchase",
            to: "/placebet",
            divText: "View All"
        },
        {
            image1: winner,
            price: "345,000",
            text: "Withdrawals",
            to: "",
            divText: "View All"
        },
        {
            image1: betCoin,
            price: "23,000",
            text: "Lorem Iposum",
            to: "/",
            divText: "View All"
        },
    ]


    return (
        <div id={Style.Transaction_mainDiv}>
            <Header
                headerText={"Transactions"}
                headerInfo={"Here is a list of all transactions"} />
            <div id={Style.Transaction_wrapperDiv}>

                <div id={Style.Transaction_mapDiv}>
                    {
                        stats_card6.map((obj, index) => {
                            let isBlack = index == cardToggleIndex ? true : false;
                            return (
                                <Total_Card
                                    key={index}
                                    text={obj.text}
                                    image1={obj.image1}
                                    divText={obj.divText}
                                    price={obj.price}
                                    isBlack={isBlack}
                                    onClick={() => toggle(index)}
                                />
                            )
                        })
                    }
                </div>
                <div>
                    {
                        toggleIndex == 1 && cardToggleIndex == 0 ?
                            <img id={Style.winners_background} src={winners_background} alt="" />
                        : " "
                    }
                </div>
                <div id={Style.Transaction_tableWrapperDiv}>
                    <div id={Style.TransactionText}>Transaction Lists <span>(1,355)</span></div>

                    {
                        cardToggleIndex === 0 ?
                            <div id={Style.Transaction_listCalendar_Div}>

                                <div id={Style.Transaction_listDiv}>
                                    <button onClick={() => transactionToggle(0)} className={toggleIndex == 0 ? Style.toggleDiv_buttonActive : Style.Transaction_listDiv_button}>All</button>
                                    <button onClick={() => transactionToggle(1)} className={toggleIndex == 1 ? Style.toggleDiv_buttonActive : Style.Transaction_listDiv_button}>Winning transaction</button>
                                    <button onClick={() => transactionToggle(2)} className={toggleIndex == 2 ? Style.toggleDiv_buttonActive : Style.Transaction_listDiv_button}>Losing transaction</button>

                                </div>
                                <div id={Style.input_FilterDiv}>
                                    <p>3rd July, 2024</p>
                                    <div id={Style.searchDiv}>
                                        <img src={Search} alt="" />
                                        <InputField
                                            placeholder={"Search tickets"} />
                                    </div>

                                    <img src={filter_img} alt="" />
                                    <img src={download} alt="" />
                                </div>
                            </div> :

                            <div id={Style.input_FilterDiv}>
                                <p>3rd July, 2024</p>
                                <div id={Style.searchDiv}>
                                    <img src={Search} alt="" />
                                    <InputField
                                        placeholder={"Search tickets"} />
                                </div>

                                <img src={filter_img} alt="" />
                                <img src={download} alt="" />
                            </div>
                    }



                    {toggleIndex == 0 ?
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
                                        <div id={Style.statusText_lost}>lost</div>
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
                                        <div id={Style.statusText_lost}>lost</div>
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
                                        <div id={Style.statusText}>Jackpot</div>
                                    </div>
                                </td>
                            </tr>

                        </table> : ""}

                    <div>
                        {toggleIndex == 2 ?
                            <Ticket_Losers /> : ""
                        }

                        {
                            toggleIndex == 1 ?
                                <Ticket_Winners /> : ""
                        }


                    </div>
                </div>



            </div>
        </div>
    )
}

export default Transaction