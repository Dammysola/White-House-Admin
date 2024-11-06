import React, { useEffect, useState } from 'react'
import Style from './Transaction.module.css'
import filter_img from '../../../assets/svg/Complete_filter_img.svg'
import download from '../../../assets/svg/download_img.svg'
import InputField from '../../../components/input/InputField'
import Header from '../../../components/header/Header'
import betCoin from '../../../assets/svg/betCoin.svg'
import total_users from '../../../assets/svg/total_users.svg'
import winner from '../../../assets/svg/winner.svg'
import Total_Card from '../../../components/total_Card/Total_Card'
import arrow_down from '../../../assets/svg/arrow_down-dark.svg'
import search from '../../../assets/svg/Search.svg'
import green_eyes from '../../../assets/svg/green_eyes.svg'
import warning from '../../../assets/svg/yellow_warning.svg'
import delete_list from '../../../assets/svg/product_delete.svg'
import person from '../../../assets/images/person_img.png'
import avatar from '../../../assets/images/avatar.png'
import Button from '../../../components/button/Button'
import { Link } from 'react-router-dom'
import BetPlaced_com from '../../../components/bet_placedCom/BetPlaced_com'
import Date_Picker from '../../../components/date_picker/Date_Picker'
import { transactionSummaryProvider } from '../api_detaills/provider/auth_provider'
import { PopupContextHook } from '../../../WhiteHouse_PopupContext'




const Transaction = () => {

    const { updateErrorText, updateErrorPopup } = PopupContextHook()

    let [toggleIndex, setToggleIndex] = useState(0);
    let [cardToggleIndex, setCardToggleIndex] = useState(0);
    // let [filterData, setFilterData] = useState(arr);
    const [searchTerm, setSearchTerm] = useState('');
    let [dev, setDev] = useState([]);

    const [transactions, setTransactions] = useState({})


    useEffect(() => {

        transactionSummaryProvider({

            updateTransaction: (data) => {

                setTransactions(data)
            },
            updateErrorPopup,
            updateErrorText
        })
    }, [])


    const {totalCoinPurchase, totalCoinWithdrawal} = transactions

    const toggle = (index) => {

        setCardToggleIndex(index)
    }


    const [selectedDate, setSelectedDate] = useState(new Date());  // Initialize with current date
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);  // Initialize with current date



    const handleDateChange = (newDate) => {

        setSelectedDate(newDate);  // Update selectedDate when newDate is received

        console.log("New selected date:", newDate);  // This should log the new date when clicked

        setIsCalendarOpen(false)
    };

    const toggleCalendar = () => {
        setIsCalendarOpen(true)
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
            price: totalCoinPurchase,
            text: "Coin Purchase",
            to: "",
            divText: "View All",
        },
        {
            image1: winner,
            price: totalCoinWithdrawal,
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


                {
                    cardToggleIndex !== 0 ?


                        <div id={Style.transaction_header_inputfield_Div}>
                            <div id={Style.TransactionText}>Transaction Lists <span>(1,355)</span></div>

                            <div id={Style.Amount_Paid_input_FilterDiv}>

                                <span>{selectedDate.toDateString()} <img onClick={toggleCalendar} src={arrow_down} alt="" /></span>

                                {
                                    isCalendarOpen && (
                                        <div id={Style.calendar_popup}>

                                            <Date_Picker onDateChange={handleDateChange} />
                                        </div>
                                    )
                                }

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
                        toggleIndex === 0 && cardToggleIndex === 0 ?

                            <BetPlaced_com arr={arr} initialIndex={0} /> : ""
                    }

                    {
                        cardToggleIndex == 1 ?

                            // <div id={Style.Card_table_wrapperDiv}>
                            <table>
                                <thead>
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
                                </thead>

                                <tbody>

                                    {filteredData_two.length > 0 ? (


                                        filteredData_two.map((user, index) => {
                                            let bGcolor = user.status == "Successful" ? "#00800033" : user.status == "Pending" ? "#fc9e2f33" : user.status == "Failed" ? "#ff000033" : ""
                                            let color = user.status == "Successful" ? "green" : user.status == "Pending" ? "#FC9E2F" : user.status == "Failed" ? "red" : ""

                                            // let lost = user.status == "Lost" ? true : false
                                            return (
                                                <tr key={index}>

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


                            // </div>
                            : ""
                    }


                    {
                        cardToggleIndex == 2 ?

                            // <div id={Style.Card_table_wrapperDiv}>
                            <table>
                                <thead>
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
                                </thead>

                                <tbody>


                                           //Withdrawal


                                    {
                                        coin_arr.map((user, index) => {
                                            let bGcolor = user.status == "Successful" ? "#00800033" : user.status == "Pending" ? "#fc9e2f33" : user.status == "Failed" ? "#ff000033" : ""
                                            let color = user.status == "Successful" ? "green" : user.status == "Pending" ? "#FC9E2F" : user.status == "Failed" ? "red" : ""

                                            // let lost = user.status == "Lost" ? true : false
                                            return (

                                                <tr key={index}>

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
                            // </div> 
                            : ""
                    }


                    {
                        cardToggleIndex == 3 ?

                            // <div id={Style.Card_table_wrapperDiv}>

                            <table>
                                <thead>
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
                                </thead>

                                <tbody>
                                    {         //Unsettled



                                        unsettled.map((user, index) => {
                                            let bGcolor = user.status == "Used" ? "#00800033" : user.status == "Pending" ? "#eb575733" : ""
                                            let color = user.status == "Used" ? "green" : user.status == "Pending" ? "#EB5757" : ""

                                            // let lost = user.status == "Lost" ? true : false
                                            return (
                                                <tr key={index}>
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
                                                    <td id={Style.btn}> <Link to={"/unsettledBet"}><Button text={user.action} /></Link></td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                            // </div> 
                            : ""
                    }

                </div>



            </div>
        </div>
    )
}

export default Transaction