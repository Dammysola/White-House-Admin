import React, { useEffect, useState } from 'react'
import Style from '../placeBet/PlaceBet.module.css'
import arrow_side from '../../../assets/svg/arrow_side.svg'
import Total_Card from '../../../components/total_Card/Total_Card'
import line_graph from '../../../assets/images/line_Graph.png'
import Chart from '../../../components/chart/Chart'
import search from '../../../assets/svg/Search.svg'
import InputField from '../../../components/input/InputField'
import filter_img from '../../../assets/svg/Complete_filter_img.svg'
import download from '../../../assets/svg/download_img.svg'

const PlaceBet = () => {
    const [data, setData] = useState()

    useEffect(() => {

        const FetchData = async () => {
            const response = await fetch("https://api.coincap.io/v2/assets/?limit=10")
            const data = await response.json()
            console.log(data);
            setData(data.data)
        }
        FetchData()
    }, [])

    const total_Card1 = [
        {
            image1: './src/assets/svg/Activity.svg',
            text: 'Total Bet Placed',
            divText: 'View all',
            price: '$25,052,985'
        },
        {
            image1: './src/assets/svg/Activity.svg',
            text: 'Total Players',
            divText: 'View all',
            price: '2m'
        },
        {
            image1: './src/assets/svg/Work.svg',
            text: 'Winners',
            divText: 'View all',
            price: '345,000'
        },
        {
            image1: './src/assets/svg/Activity.svg',
            text: 'Loosers',
            divText: 'View all',
            price: '23,000'
        },
    ]

    const texts = [
        "",
        "Total Bets Placed",
        "Total Players",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? texts.length - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === texts.length - 1 ? 0 : prevIndex + 1));
    };

    let [toggleIndex, setToggleIndex] = useState(0);

    const placeBetToggle = (index) => {

        setToggleIndex(index)

    }

    return (
        <div id={Style.PlaceBet_mainDiv}>
            <div id={Style.PlaceBet_HeaderDiv}>

                <div id={Style.PlaceBet_header}>Bet Placed</div>
                <p>Here’s an information on all placed bets</p>
            </div>

            <div id={Style.PlaceBet_wrapperDiv}>
                <div id={Style.toggleDiv}>

                    <button onClick={() => placeBetToggle(0)} className={toggleIndex == 0 ? Style.toggleDiv_buttonActive : Style.toggleDiv_Button}>Dashboard </button><img src={arrow_side} alt="" />

                    <button onClick={() => placeBetToggle(1)} className={toggleIndex == 1 ? Style.toggleDiv_buttonActive : Style.toggleDiv_Button}>Bets Placed</button>
                    
                    {
                        currentIndex == 0 ? <img onClick={handleNextClick} src={arrow_side} alt="" /> : <img onClick={handlePrevClick} src={arrow_side} alt="" />
                    }

                    <button onClick={() => placeBetToggle(2)[currentIndex]} className={toggleIndex == 2 ? Style.toggleDiv_buttonActive : Style.toggleDiv_Button}>{texts[currentIndex]}</button>

                    {
                        currentIndex !== 0 ? <img onClick={handleNextClick} src={arrow_side} alt="" /> : ""
                    }

                </div>

                {
                    toggleIndex == 1 ?
                        <div>
                            <p id={Style.PlaceBet_summaryText}>Today's Summary</p>
                            <div id={Style.Total_Card_mapDiv}>
                                {
                                    total_Card1.map((object) => {
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
                            <div id={Style.ChartDiv}>
                                <Chart data={data}></Chart>
                                <img src={line_graph} alt="" />
                            </div>
                        </div> : ""
                }

            </div>

            {
                toggleIndex == 2 ?
                    <div id={Style.TotalBet_mainDiv}>
                        <div id={Style.input_FilterDiv}>
                            <p>3rd July, 2024</p>
                            <div id={Style.searchDiv}>
                                <img src={search} alt="" />
                                <InputField
                                    placeholder={"Search tickets"} />
                            </div>

                            <img src={filter_img} alt="" />
                            <img src={download} alt="" />
                        </div>

                        <div id={Style.TotalBet_wrapper}>
                            <div id={Style.PlaceBet_tableDiv}>
                                <table>
                                    <tr id={Style.headerTable}>
                                        <th>S/N</th>
                                        <th>User ID</th>
                                        <th>Ticket ID</th>
                                        <th>Amount Staked</th>
                                        <th>Status</th>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>SA 123476689</td>
                                        <td>8012345678</td>
                                        <td>₦100.00</td>
                                        <td>
                                            <div id={Style.statusText}>Won</div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>2</td>
                                        <td>SA 123476689</td>
                                        <td>8012345678</td>
                                        <td>₦100.00</td>
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
                                        <td>
                                            <div id={Style.action_field}>
                                                <div id={Style.statusText}>Won</div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>SA 123476689</td>
                                        <td>8012345678</td>
                                        <td>₦100.00</td>
                                        <td>
                                            <div id={Style.action_field}>
                                                <div id={Style.statusText}>Won</div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td>SA 123476689</td>
                                        <td>8012345678</td>
                                        <td>₦100.00</td>
                                        <td>
                                            <div id={Style.action_field}>
                                                <div id={Style.statusText}>Won</div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr id={Style.lastline}>
                                        <td>8</td>
                                        <td>SA 123476689</td>
                                        <td>8012345678</td>
                                        <td>₦100.00</td>
                                        <td>
                                            <div id={Style.action_field}>
                                                <div id={Style.statusText}>Won</div>
                                            </div>
                                        </td>
                                    </tr>

                                </table>
                            </div>
                        </div>
                    </div> : ""}

            <div id={Style.Total_Player_mainDiv}>
                <div id={Style.TotalPlayer_input_FilterDiv}>
                    <div id={Style.searchDiv}>
                        <img src={search} alt="" />
                        <InputField />
                    </div>

                    <img src={filter_img} alt="" />
                </div>
                <div id={Style.Total_Player_tableDiv}>
                                <table>
                                    <tr id={Style.headerTable}>
                                        <th>S/N</th>
                                        <th>User ID</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Country</th>
                                        <th>Bank Detail</th>
                                        <th>Status</th>
                                        <th>Action</th>

                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>SA 123476689</td>
                                        <td>johndoe@gmail.com</td>
                                        <td>+2344816273888</td>
                                        <td>Nigeria</td>
                                        <td>
                                            <div id={Style.BankDetails_Div}>
                                                <div>
                                                    <p>Bank</p>
                                                    <p className={Style.BankDetails_BoldText}>Access Bank</p>
                                                </div>
                                                <div>
                                                    <p>Account Number</p>
                                                    <p className={Style.BankDetails_BoldText}>0123456789</p>
                                                </div><div>
                                                    <p>Account Name</p>
                                                    <p className={Style.BankDetails_BoldText}>John Doe</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div id={Style.statusText}>Online</div>
                                        </td>
                                        <td><button style={{backgroundColor:"#075070", border: "none", color: "#FFFFFF",fontSize: "0.7rem",borderRadius:"8px"}}>Suspend Action</button></td>
                                    </tr>

                                    <tr>
                                        <td>2</td>
                                        <td>SA 123476689</td>
                                        <td>johndoe@gmail.com</td>
                                        <td>+2344816273888</td>
                                        <td>Nigeria</td>
                                        <td></td>
                                        <td>
                                            <div id={Style.action_field}>
                                                <div id={Style.statusText}>Online</div>
                                            </div>
                                        </td>
                                        <td><button style={{backgroundColor:"#075070", border: "none", color: "#FFFFFF",fontSize: "0.7rem",borderRadius:"8px"}}>Suspend Action</button></td>
                                    </tr>

                                </table>
                            </div>
            </div>

        </div>
    )
}

export default PlaceBet