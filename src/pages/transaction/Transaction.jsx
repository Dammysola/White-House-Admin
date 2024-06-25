import React from 'react'
import Style from '../transaction/Transaction.module.css'
import filter_img from '../../assets/svg/Complete_filter_img.svg'
import calendar from '../../assets/svg/Calendar.svg'
import download from '../../assets/svg/download_img.svg'
import green_eye from '../../assets/svg/green_eyes.svg'
import Total_Card from '../../components/total_Card/Total_Card'


const Transaction = () => {

    const total_Card2 = [
        {
            image1: './src/assets/svg/Activity.svg',
            image2: './src/assets/svg/arrow_down-dark.svg',
            text: 'Total Value',
            divText: 'USD',
            price: '$25,052,985'
        },
        {
            image1: './src/assets/svg/Activity.svg',
            image2: './src/assets/svg/arrow_down-dark.svg',
            text: 'Total Volume',
            divText: 'USD',
            price: '8,789,086'
        },
        {
            image1: './src/assets/svg/Activity.svg',
            image2: './src/assets/svg/arrow_down-dark.svg',
            text: 'Total Products',
            divText: 'USD',
            price: '3'
        },
    ]

    return (
        <div>

            <div id={Style.Transaction_WrapperDiv}>
                <div id={Style.Transaction_welcomeText_Div}>
                    <div>
                        <div id={Style.homeText}>Home <span>{'>'} Transactions</span> </div>
                        <div id={Style.Transaction_header}>Transactions</div>
                        <p>View all the transactions summary and for each product </p>
                    </div>
                </div>

                <div id={Style.Transaction_listCalendar_Div}>
                    <div id={Style.Transaction_listDiv}>
                        <p>All Channels</p>
                        <p>Xcel</p>
                        <p>Xcel POS</p>
                        <p>Web</p>
                        <p>USSD</p>
                    </div>
                    <div id={Style.Transaction_CalendarDiv}>
                        <img src={calendar} alt="" />
                        <div>Filter by date range</div>
                    </div>
                </div>
            </div>

            <div id={Style.CardDiv}>
                {
                    total_Card2.map((object) => {

                        return (
                            <Total_Card
                                image1={object.image1}
                                image2={object.image2}
                                text={object.text}
                                divText={object.divText}
                                price={object.price} />

                        )
                    })
                }
            </div>


            <div id={Style.Transaction_mainDiv}>
                <div id={Style.Transaction_wrapperDiv}>
                    <div id={Style.TransactionDiv}>
                        <div id={Style.TransactionText}>All Products</div>
                        <div id={Style.input_FilterDiv}>
                            <input type="text" />
                            <img src={filter_img} alt="" />
                            <img src={download} alt="" />
                        </div>

                    </div>

                    <table>
                        <tr id={Style.headerTable}>
                            <th>S/N</th>
                            <th>Date</th>
                            <th>Sender</th>
                            <th>Source Acc</th>
                            <th>Channel</th>
                            <th>Product</th>
                            <th>Unique ID</th>
                            <th>Amount</th>
                            <th>Reference No</th>
                            <th>Action</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>2/10/2023  9:30am</td>
                            <td>Sarah Adejumo</td>
                            <td>789756442423</td>
                            <td>POS Payment</td>
                            <td>Product 1</td>
                            <td>ID002356</td>
                            <td>250,000</td>
                            <td>RN006879689729</td>
                            <td>
                                <div id={Style.action_field}>
                                    <img src={green_eye} alt="" />
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>2</td>
                            <td>2/10/2023  9:30am</td>
                            <td>Sarah Adejumo</td>
                            <td>789756442423</td>
                            <td>POS Payment</td>
                            <td>Product 1</td>
                            <td>ID002356</td>
                            <td>250,000</td>
                            <td>RN006879689729</td>
                            <td>
                                <div id={Style.action_field}>
                                    <img src={green_eye} alt="" />
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>3</td>
                            <td>2/10/2023  9:30am</td>
                            <td>Sarah Adejumo</td>
                            <td>789756442423</td>
                            <td>POS Payment</td>
                            <td>Product 1</td>
                            <td>ID002356</td>
                            <td>250,000</td>
                            <td>RN006879689729</td>
                            <td>
                                <div id={Style.action_field}>
                                    <img src={green_eye} alt="" />
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>4</td>
                            <td>2/10/2023  9:30am</td>
                            <td>Sarah Adejumo</td>
                            <td>789756442423</td>
                            <td>POS Payment</td>
                            <td>Product 1</td>
                            <td>ID002356</td>
                            <td>250,000</td>
                            <td>RN006879689729</td>
                            <td>
                                <div id={Style.action_field}>
                                    <img src={green_eye} alt="" />
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>5</td>
                            <td>2/10/2023  9:30am</td>
                            <td>Sarah Adejumo</td>
                            <td>789756442423</td>
                            <td>POS Payment</td>
                            <td>Product 1</td>
                            <td>ID002356</td>
                            <td>250,000</td>
                            <td>RN006879689729</td>
                            <td>
                                <div id={Style.action_field}>
                                    <img src={green_eye} alt="" />
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>6</td>
                            <td>2/10/2023  9:30am</td>
                            <td>Sarah Adejumo</td>
                            <td>789756442423</td>
                            <td>POS Payment</td>
                            <td>Product 1</td>
                            <td>ID002356</td>
                            <td>250,000</td>
                            <td>RN006879689729</td>
                            <td>
                                <div id={Style.action_field}>
                                    <img src={green_eye} alt="" />
                                </div>
                            </td>
                        </tr>

                        <tr id={Style.line}>
                            <td>7</td>
                            <td>2/10/2023  9:30am</td>
                            <td>Sarah Adejumo</td>
                            <td>789756442423</td>
                            <td>POS Payment</td>
                            <td>Product 1</td>
                            <td>ID002356</td>
                            <td>250,000</td>
                            <td>RN006879689729</td>
                            <td>
                                <div id={Style.action_field}>
                                    <img src={green_eye} alt="" />
                                </div>
                            </td>
                        </tr>

                    </table>

                </div>
            </div>
        </div>
    )
}

export default Transaction