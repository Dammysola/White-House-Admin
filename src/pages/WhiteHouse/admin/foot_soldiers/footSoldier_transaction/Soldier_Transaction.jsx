import React, { useState } from 'react'
import Style from '../footSoldier_transaction/Soldier_Transaction.module.css'
import Header from '../../../../../components/header/Header'
import arrow_down from '../../../../../assets/svg/arrow_down-dark.svg'
import InputField from '../../../../../components/input/InputField'
import search from '../../../../../assets/svg/Search.svg'

const Soldier_Transaction = () => {

    const [toggleIndex, setToggleIndex] = useState(0)

    const toggle = (index) => {
        setToggleIndex(index)
    }

    return (
        <div id={Style.Soldier_Transaction_mainDiv}>
            <Header
                headerText={"John Doe’s Transactions"}
                headerInfo={"Here’s an information on user transaction"} />

            <div id={Style.Soldier_Transaction_wrapperDiv}>

                <p id={Style.Soldier_Transaction_headerText}>John Doe's Transactions</p>
                <div id={Style.toggle_buttonDiv}>
                    <button onClick={() => toggle(0)} className={toggleIndex == 0 ? Style.toggleDiv_buttonActive : Style.toggle_button}>Payments</button>
                    <button onClick={() => toggle(1)} className={toggleIndex == 1 ? Style.toggleDiv_buttonActive : Style.toggle_button}>Withdrawals</button>
                </div>

                <div id={Style.InputField_Div}>
                    <p>3rd October, 2024 <img src={arrow_down} alt="" /></p>
                    <div id={Style.searchDiv}>
                        <img src={search} alt="" />
                        <InputField />
                    </div>
                </div>

                <div id={Style.Soldier_Transaction_Table_WrapperDiv}>
                    <table>
                        {
                            toggleIndex == 0 ?
                                <>
                                    <tr id={Style.headerTable}>
                                        <th>S/N</th>
                                        <th>Ref Number</th>
                                        <th>Date</th>
                                        <th>Time</th>
                                        <th>Amount Paid</th>
                                        <th>Payment Type</th>
                                        <th>User Onboarded</th>
                                        <th>Status</th>
                                    </tr>

                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>UA 123476689</td>
                                            <td>24 Aug, 2024</td>
                                            <td>13:24</td>
                                            <td>20000</td>
                                            <td>WH Agent Account</td>
                                            <td>John Doe</td>
                                            <td><div className={Style.Status_data}>Successful </div></td>
                                        </tr>

                                        <tr>
                                            <td>2</td>
                                            <td>UA 123476689</td>
                                            <td>24 Aug, 2024</td>
                                            <td>13:24</td>
                                            <td>20000</td>
                                            <td>WH Agent Account</td>
                                            <td>John Doe</td>
                                            <td><div className={Style.Status_data}>Successful </div></td>
                                        </tr>

                                        <tr>
                                            <td>3</td>
                                            <td>UA 123476689</td>
                                            <td>24 Aug, 2024</td>
                                            <td>13:24</td>
                                            <td>20000</td>
                                            <td>WH Agent Account</td>
                                            <td>John Doe</td>
                                            <td><div className={Style.Status_data}>Successful </div></td>
                                        </tr>
                                    </tbody>
                                </> : toggleIndex == 1 ?

                                    <>
                                        <tr id={Style.headerTable}>
                                            <th>S/N</th>
                                            <th>Ref Number</th>
                                            <th>Time</th>
                                            <th>Country</th>
                                            <th>Coin Converted</th>
                                            <th>Amount Received</th>
                                            <th>Bank Details</th>
                                            <th>Status</th>
                                        </tr>

                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>SA 123476689</td>
                                                <td>13:55</td>
                                                <td>Nigeria</td>
                                                <td>430</td>
                                                <td>200</td>
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
                                                <td><div className={Style.Status_data}>Purchased</div></td>
                                            </tr>

                                            <tr>
                                                <td>2</td>
                                                <td>SA 123476689</td>
                                                <td>13:55</td>
                                                <td>Nigeria</td>
                                                <td>430</td>
                                                <td>200</td>
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
                                                <td><div className={Style.Status_data}>Purchased</div></td>
                                            </tr>

                                            <tr>
                                                <td>3</td>
                                                <td>SA 123476689</td>
                                                <td>13:55</td>
                                                <td>Nigeria</td>
                                                <td>430</td>
                                                <td>200</td>
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
                                                <td><div className={Style.Status_data}>Purchased</div></td>
                                            </tr>
                                        </tbody>
                                    </> : ""
                        }
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Soldier_Transaction