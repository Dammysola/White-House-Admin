import React, { useEffect, useState } from 'react'
import Style from './Transaction.module.css'
import filter_img from '../../../../assets/svg/Complete_filter_img.svg'
import download from '../../../../assets/svg/download_img.svg'
import InputField from '../../../../components/input/InputField'
import Header from '../../../../components/header/Header'
import betCoin from '../../../../assets/svg/betCoin.svg'
import total_users from '../../../../assets/svg/total_users.svg'
import winner from '../../../../assets/svg/winner.svg'
import Total_Card from '../../../../components/total_Card/Total_Card'
import winners_background from '../../../../assets/svg/winners_background.svg'
import arrow_down from '../../../../assets/svg/arrow_down-dark.svg'
import search from '../../../../assets/svg/Search.svg'
import green_eyes from '../../../../assets/svg/green_eyes.svg'
import warning from '../../../../assets/svg/yellow_warning.svg'
import delete_list from '../../../../assets/svg/product_delete.svg'
import person from '../../../../assets/images/person_img.png'
import avatar from '../../../../assets/images/avatar.png'
import Button from '../../../../components/button/Button'
import { Link } from 'react-router-dom'




const Transaction = () => {
    let [toggleIndex, setToggleIndex] = useState(0);
    let [cardToggleIndex, setCardToggleIndex] = useState(0);
    // let [filterData, setFilterData] = useState(arr);
    const [searchTerm, setSearchTerm] = useState('');
    let [dev, setDev] = useState([]);



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
            to: "",
            divText: "View All"
        },
        {
            image1: total_users,
            price: "20K",
            text: "Coin Purchase",
            to: "",
            divText: "View All",
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
            text: "Unsettled Bets",
            to: "",
            divText: "View All"
        },
    ]


    const arr = [
        {
            SN: "1",
            userID: "5466FH",
            BetID: "6458575RFG",
            game: "DiceRoom344",
            amount: "1000",
            players: person,
            status: "Won",
            win: "5000",
            action: {
                eye: green_eyes,
                warning: warning,
                delete: delete_list
            }

        },
        {
            SN: "2",
            userID: "5466FH",
            BetID: "6458575RFG",
            game: "DiceRoom344",
            amount: "1000",
            players: person,
            status: "Lost",
            win: "5000",
            action: {
                eye: green_eyes,
                warning: warning,
                delete: delete_list
            }

        },
        {
            SN: "2",
            userID: "5466FH",
            BetID: "6458575RFG",
            game: "DiceRoom344",
            amount: "1000",
            players: person,
            status: "Lost",
            win: "5000",
            action: {
                eye: green_eyes,
                warning: warning,
                delete: delete_list
            }

        },
        {
            SN: "2",
            userID: "35574TD",
            BetID: "6458575RFG",
            game: "FootballRoom 454",
            amount: "1000",
            players: person,
            status: "Lost",
            win: "5000",
            action: {
                eye: green_eyes,
                warning: warning,
                delete: delete_list
            }

        },
        {
            SN: "3",
            userID: "5466FH",
            BetID: "6458575RFG",
            game: "DiceRoom344",
            amount: "1000",
            players: person,
            status: "Won",
            win: "5000",
            action: {
                eye: green_eyes,
                warning: warning,
                delete: delete_list
            }

        },
        {
            SN: "4",
            userID: "5466FH",
            BetID: "6458575RFG",
            game: "tr",
            amount: "1000",
            players: person,
            status: "Lost",
            win: "5000",
            action: {
                eye: green_eyes,
                warning: warning,
                delete: delete_list
            }

        },
        {
            SN: "3",
            userID: "5466FH",
            BetID: "6458575RFG",
            game: "DiceRoom344",
            amount: "1000",
            players: person,
            status: "Won",
            win: "5000",
            action: {
                eye: green_eyes,
                warning: warning,
                delete: delete_list
            }
        },

        {
            SN: "3",
            userID: "5466FH",
            BetID: "6458575RFG",
            game: "DiceRoom344",
            amount: "1000",
            players: person,
            status: "Won",
            win: "5000",
            action: {
                eye: green_eyes,
                warning: warning,
                delete: delete_list
            }
        }
    ]


    useEffect(() => {
        let d = arr.filter((a) => a.status === "Won")
        console.log(d);

        setDev(d)
    }, [])






    const coin_arr = [

        {
            user: {
                id: "UA 123476689",
                img: person,
                name: "Lighty"
            },
            RefNo: "AU 123476689",
            time: "13:45",
            country: "Nigeria",
            amount: "20000",
            coinRd: "500",
            payType: {
                bank: "Access Bank",
                accNo: "0123456789",
                accName: "John Doe"
            },
            status: "Successful"

        },
        {
            user: {
                id: "UA 123476689",
                img: avatar,
                name: "Lighty"
            },
            RefNo: "UA 123476689",
            time: "13:45",
            country: "USA",
            amount: "20000",
            coinRd: "500",
            payType: {
                bank: "Access Bank",
                accNo: "0123456789",
                accName: "John Doe"
            },
            status: "Pending"

        },
        {
            user: {
                id: "UA 123476689",
                img: person,
                name: "Lighty"
            },
            RefNo: "UA 123476689",
            time: "13:45",
            country: "Nigeria",
            amount: "20000",
            coinRd: "500",
            payType: {
                bank: "Access Bank",
                accNo: "0123456789",
                accName: "John Doe"
            },
            status: "Successful"

        },
        {
            user: {
                id: "UA 123476689",
                img: avatar,
                name: "Lighty"
            },
            RefNo: "UA 123476689",
            time: "13:45",
            date: "Oct 4",
            game: "DiceRoom13",
            country: "Nigeria",
            amount: "20000",
            coinRd: "500",
            payType: {
                bank: "Access Bank",
                accNo: "0123456789",
                accName: "John Doe"
            },
            status: "Failed"

        },

    ]

    const unsettled = [
        {
            user: {
                id: "UA 123476689",
                img: avatar,
                name: "Lighty"
            },
            RefNo: "UA 123476689",
            time: "13:45",
            date: "Oct 4",
            game: "DiceRoom13",
            country: "Nigeria",
            amount: "20000",
            balance: "200",
            status: "Used",
            action: "View Details"
        },
        {
            user: {
                id: "UA 123476689",
                img: avatar,
                name: "Lighty"
            },
            RefNo: "UA 123476689",
            time: "13:45",
            date: "Oct 4",
            game: "DiceRoom13",
            country: "Nigeria",
            amount: "20000",
            balance: "200",
            status: "Pending",
            action: "View Details"
        },
    ]

    const filteredData_two = coin_arr.filter(item =>
        item.RefNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.amount.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.coinRd.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.status.toLowerCase().includes(searchTerm.toLowerCase())
    );



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
                {
                    cardToggleIndex !== 0 ?


                        <div id={Style.transaction_header_inputfield_Div}>
                            <div id={Style.TransactionText}>Transaction Lists <span>(1,355)</span></div>

                            <div id={Style.Amount_Paid_input_FilterDiv}>
                                <p>3rd October, 2024 <img src={arrow_down} alt="" /></p>

                                <div id={Style.searchDiv}>
                                    <img src={search} alt="" />
                                    <InputField type={"text"}
                                        value={searchTerm}
                                        OnChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                </div>
                                <div id={Style.imgDiv}>
                                    <img src={filter_img} alt="" />
                                    <img src={download} alt="" />
                                </div>
                            </div>
                        </div> : ""
                }
                <div id={Style.Transaction_tableWrapperDiv}>
                    {
                        cardToggleIndex == 0 ?

                            <>
                                <div id={Style.BetText}>Bet Lists <span>(1,355)</span></div>

                                <div id={Style.Transaction_listCalendar_Div}>

                                    <div id={Style.Transaction_listDiv}>

                                        <button onClick={() => transactionToggle(0)} className={toggleIndex == 0 ? Style.toggleDiv_buttonActive : Style.Transaction_listDiv_button}>All</button>
                                        <button onClick={() => transactionToggle(1)} className={toggleIndex == 1 ? Style.toggleDiv_buttonActive : Style.Transaction_listDiv_button}>Winning Bets</button>
                                        <button onClick={() => transactionToggle(2)} className={toggleIndex == 2 ? Style.toggleDiv_buttonActive : Style.Transaction_listDiv_button}>Losing Bets</button>

                                    </div>

                                    <div id={Style.Amount_Paid_input_FilterDiv}>
                                        <p>3rd October, 2024 <img src={arrow_down} alt="" /></p>

                                        <div id={Style.searchDiv}>
                                            <img src={search} alt="" />
                                            <InputField />
                                        </div>
                                        <div id={Style.imgDiv}>
                                            <img src={filter_img} alt="" />
                                            <img src={download} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </> : ""
                    }


                    {cardToggleIndex == 0 ?
                        <table>
                            <tr id={Style.headerTable}>
                                <th>S/N</th>
                                <th>User ID</th>
                                <th>Bet ID</th>
                                <th>Game</th>
                                <th>Amount Staked</th>
                                <th>Players</th>
                                <th>Status</th>
                                <th>Amount Won</th>
                                <th>Action</th>
                            </tr>


                            {
                                toggleIndex == 0 ?


                                    <tbody>
                                        {
                                            arr.map((user, index) => {
                                                let lost = user.status == "Lost" ? true : false
                                                return (
                                                    <tr >
                                                        <td>{index + 1}</td>
                                                        <td>{user.userID}</td>
                                                        <td>{user.BetID}</td>
                                                        <td>{user.game}</td>
                                                        <td>{user.amount}</td>
                                                        <td>
                                                            <div id={Style.players_imgDiv}>
                                                                <img src={user.players} alt="" />
                                                                <img src={user.players} alt="" />
                                                                <img src={user.players} alt="" />
                                                                <img src={user.players} alt="" />
                                                            </div>
                                                        </td>
                                                        <td><div id={Style.statusText_td} style={{ backgroundColor: lost ? "#11000033" : "#31c36433", color: lost ? "#110000" : "#31C364" }}>{user.status}</div></td>
                                                        <td>{user.win}</td>
                                                        <td>
                                                            <div id={Style.action_field}>
                                                                <img src={user.action.eye} alt="" />
                                                                <img src={user.action.warning} alt="" />
                                                                <img src={user.action.delete} alt="" />
                                                            </div>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }

                                    </tbody> :
                                    toggleIndex == 1 && cardToggleIndex == 0 ?



                                        //winner Bet

                                        <tbody>
                                            {
                                                dev.map((user, index) => {
                                                    // let lost = user.status == "Lost" ? true : false
                                                    return (
                                                        <tr>
                                                            <td>{index + 1}</td>
                                                            <td>{user.userID}</td>
                                                            <td>{user.BetID}</td>
                                                            <td>{user.game}</td>
                                                            <td>{user.amount}</td>
                                                            <td>
                                                                <div id={Style.players_imgDiv}>
                                                                    <img src={user.players} alt="" />
                                                                    <img src={user.players} alt="" />
                                                                    <img src={user.players} alt="" />
                                                                    <img src={user.players} alt="" />
                                                                </div>
                                                            </td>
                                                            <td><div id={Style.statusText_td}>{user.status}</div></td>
                                                            <td>{user.win}</td>
                                                            <td>
                                                                <div id={Style.action_field}>
                                                                    <img src={user.action.eye} alt="" />
                                                                    <img src={user.action.warning} alt="" />
                                                                    <img src={user.action.delete} alt="" />
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }

                                        </tbody> :

                                        toggleIndex == 2 ?
                                            //Dice_Bet_Placed Lost screen

                                            <tbody>
                                                {
                                                    arr.filter((p) => p.status === "Lost").map((user, index) => {
                                                        let lost = user.status == "Lost" ? true : false

                                                        return (
                                                            <tr >
                                                                <td>{index + 1}</td>
                                                                <td>{user.userID}</td>
                                                                <td>{user.BetID}</td>
                                                                <td>{user.game}</td>
                                                                <td>{user.amount}</td>
                                                                <td>
                                                                    <div id={Style.players_imgDiv}>
                                                                        <img src={user.players} alt="" />
                                                                        <img src={user.players} alt="" />
                                                                        <img src={user.players} alt="" />
                                                                        <img src={user.players} alt="" />
                                                                    </div>
                                                                </td>
                                                                <td><div id={Style.statusText_td} style={{ backgroundColor: lost ? "#11000033" : "#31c36433", color: lost ? "#110000" : "#31C364" }}>{user.status}</div></td>
                                                                <td>{user.win}</td>
                                                                <td>
                                                                    <div id={Style.action_field}>
                                                                        <img src={user.action.eye} alt="" />
                                                                        <img src={user.action.warning} alt="" />
                                                                        <img src={user.action.delete} alt="" />
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                            : ""

                            }

                        </table>
                        : ""}

                    {
                        cardToggleIndex == 1 ?

                            <div id={Style.Card_table_wrapperDiv}>
                                <table>
                                    <tr id={Style.headerTable_tr}>
                                        <th>S/N</th>
                                        <th>User</th>
                                        <th>Ref Number</th>
                                        <th>Time</th>
                                        <th>Country</th>
                                        <th>Amount Paid</th>
                                        <th>Coin Received </th>
                                        <th>Payment Type</th>
                                        <th>Status</th>
                                    </tr>

                                    <tbody>

                                        {filteredData_two.length > 0 ? (


                                            filteredData_two.map((user, index) => {
                                                let bGcolor = user.status == "Successful" ? "#00800033" : user.status == "Pending" ? "#fc9e2f33" : user.status == "Failed" ? "#ff000033" : ""
                                                let color = user.status == "Successful" ? "green" : user.status == "Pending" ? "#FC9E2F" : user.status == "Failed" ? "red" : ""

                                                // let lost = user.status == "Lost" ? true : false
                                                return (
                                                    <tr>
                                                        <td>{index + 1}</td>
                                                        <td>
                                                            <div>
                                                                <p>{user.user.id}</p>
                                                                <p className={Style.userDetail_Text}><img src={user.user.img} alt="" /> {user.user.name}</p>
                                                            </div>
                                                        </td>
                                                        <td>{user.RefNo}</td>
                                                        <td>{user.time}</td>
                                                        <td>{user.country}</td>
                                                        <td>{user.amount}</td>
                                                        <td>{user.coinRd}</td>
                                                        <td>
                                                            <div id={Style.BankDetails_Div}>
                                                                <div>
                                                                    <p>Bank</p>
                                                                    <p className={Style.BankDetails_BoldText}>{user.payType.bank}</p>
                                                                </div>
                                                                <div>
                                                                    <p>Account Number</p>
                                                                    <p className={Style.BankDetails_BoldText}>{user.payType.accNo}</p>
                                                                </div><div>
                                                                    <p>Account Name</p>
                                                                    <p className={Style.BankDetails_BoldText}>{user.payType.accName}</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div id={Style.statusText} style={{ backgroundColor: bGcolor, color: color }}>{user.status}</div>
                                                        </td>

                                                    </tr>
                                                )
                                            })
                                        ) : ""}

                                    </tbody>
                                </table>
                                {filteredData_two.length === 0 && <p>No matching records found</p>}
                            </div> : ""
                    }


                    {
                        cardToggleIndex == 2 ?

                            <div id={Style.Card_table_wrapperDiv}>
                                <table>
                                    <tr id={Style.headerTable_tr}>
                                        <th>S/N</th>
                                        <th>User</th>
                                        <th>Ref Number</th>
                                        <th>Time</th>
                                        <th>Country</th>
                                        <th>Coin Converted</th>
                                        <th>Amount Withdrawn </th>
                                        <th>Payment Type</th>
                                        <th>Status</th>
                                    </tr>

                                    <tbody>


                                           //Withdrawal


                                        {
                                            coin_arr.map((user, index) => {
                                                let bGcolor = user.status == "Successful" ? "#00800033" : user.status == "Pending" ? "#fc9e2f33" : user.status == "Failed" ? "#ff000033" : ""
                                                let color = user.status == "Successful" ? "green" : user.status == "Pending" ? "#FC9E2F" : user.status == "Failed" ? "red" : ""

                                                // let lost = user.status == "Lost" ? true : false
                                                return (
                                                    <tr>
                                                        <td>{index + 1}</td>
                                                        <td>
                                                            <div>
                                                                <p>{user.user.id}</p>
                                                                <p className={Style.userDetail_Text}><img src={user.user.img} alt="" /> {user.user.name}</p>
                                                            </div>
                                                        </td>
                                                        <td>{user.RefNo}</td>
                                                        <td>{user.time}</td>
                                                        <td>{user.country}</td>
                                                        <td>{user.amount}</td>
                                                        <td>{user.coinRd}</td>
                                                        <td>
                                                            <div id={Style.BankDetails_Div}>
                                                                <div>
                                                                    <p>Bank</p>
                                                                    <p className={Style.BankDetails_BoldText}>{user.payType.bank}</p>
                                                                </div>
                                                                <div>
                                                                    <p>Account Number</p>
                                                                    <p className={Style.BankDetails_BoldText}>{user.payType.accNo}</p>
                                                                </div><div>
                                                                    <p>Account Name</p>
                                                                    <p className={Style.BankDetails_BoldText}>{user.payType.accName}</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div id={Style.statusText} style={{ backgroundColor: bGcolor, color: color }}>{user.status}</div>
                                                        </td>

                                                    </tr>
                                                )
                                            })

                                        }

                                    </tbody>
                                </table>
                            </div> : ""
                    }


                    {
                        cardToggleIndex == 3 ?

                            <div id={Style.Card_table_wrapperDiv}>

                                <table>
                                    <tr id={Style.headerTable_tr}>
                                        <th>S/N</th>
                                        <th>User</th>
                                        <th>Ref Number</th>
                                        <th>Date</th>
                                        <th>Time</th>
                                        <th>Game</th>
                                        <th>Amount</th>
                                        <th>Status</th>
                                        <th>Balance</th>
                                        <th>Action</th>
                                    </tr>

                                    <tbody>
                                        {         //Unsettled



                                            unsettled.map((user, index) => {
                                                let bGcolor = user.status == "Used" ? "#00800033" : user.status == "Pending" ? "#eb575733" : ""
                                                let color = user.status == "Used" ? "green" : user.status == "Pending" ? "#EB5757" : ""

                                                // let lost = user.status == "Lost" ? true : false
                                                return (
                                                    <tr>
                                                        <td>{index + 1}</td>
                                                        <td>
                                                            <div>
                                                                <p>{user.user.id}</p>
                                                                <p className={Style.userDetail_Text}><img src={user.user.img} alt="" /> {user.user.name}</p>
                                                            </div>
                                                        </td>
                                                        <td>{user.RefNo}</td>
                                                        <td>{user.date}</td>
                                                        <td>{user.time}</td>
                                                        <td>{user.game}</td>
                                                        <td>{user.amount}</td>
                                                        <td>
                                                            <div id={Style.statusText} style={{ backgroundColor: bGcolor, color: color }}>{user.status}</div>
                                                        </td>
                                                        <td>{user.balance}</td>
                                                        <td id={Style.btn}> <Link to={"/unsettledBet"}><Button text={user.action}/></Link></td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div> : ""
                    }

                </div>



            </div>
        </div>
    )
}

export default Transaction