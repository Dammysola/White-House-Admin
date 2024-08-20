import React, { useState } from 'react'
import Style from '../all_transactions/All_Transaction.module.css'
import arrow_down from '../../../../../assets/svg/arrow_down-dark.svg'
import search from '../../../../../assets/svg/Search.svg'
import InputField from '../../../../../components/input/InputField'
import filter from '../../../../../assets/svg/Complete_filter_img.svg'
import download from '../../../../../assets/svg/download_img.svg'
import Header from '../../../../../components/header/Header'




const All_Transaction = () => {

    const [toggleIndex, setToggleIndex] = useState(0)

    const toggle = (index) => {
        setToggleIndex(index)
    }


    return (
        <div id={Style.All_Transaction_mainDiv} >
            <Header
                headerText={"Transactions"}
                headerInfo={"Here’s an information on all Foot Soliders transaction"} />
            <div id={Style.All_Transaction_WrapperDiv}>
                <div id={Style.All_Transaction_headerDiv}>
                    <div id={Style.btnDiv}>
                        <button onClick={() => toggle(0)} className={toggleIndex == 0 ? Style.toggleDiv_buttonActive : Style.All_Transaction_button}>All</button>
                        <button onClick={() => toggle(1)} className={toggleIndex == 1 ? Style.toggleDiv_buttonActive : Style.All_Transaction_button}>WHAgent</button>
                        <button onClick={() => toggle(2)} className={toggleIndex == 2 ? Style.toggleDiv_buttonActive : Style.All_Transaction_button}>Onboarding</button>
                    </div>

                    <div id={Style.Amount_Paid_input_FilterDiv}>
                        <p>3rd October, 2024 <img src={arrow_down} alt="" /></p>

                        <div id={Style.searchDiv}>
                            <img src={search} alt="" />
                            <InputField />
                        </div>
                        <div id={Style.imgDiv}>
                            <img src={filter} alt="" />
                            <img src={download} alt="" />
                        </div>
                    </div>
                </div>

                <div id={Style.All_Transaction_table_WrapperDiv}>
                    <table>
                        <tr id={Style.headerTable}>
                            <th>S/N</th>
                            <th>Ref Number</th>
                            <th>Time Stamp</th>
                            <th>Payment Type</th>
                            <th>Amount Paid</th>
                            <th>Receipt</th>
                            <th>Account</th>
                            <th>Status</th>
                        </tr>

                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>UA 123476689</td>
                                <td><div>
                                    <p>24 Aug, 2024</p>
                                    <p>13:53</p>
                                    </div>
                                </td>
                                <td>WHAgent</td>
                                <td>WHC 500</td>
                                <td>John Doe</td>
                                <td>WHAgent Account</td>
                                <td><div id={Style.status_td}>Successful</div></td>
                            </tr>

                            <tr>
                                <td>2</td>
                                <td>UA 123476689</td>
                                <td><div>
                                    <p>24 Aug, 2024</p>
                                    <p>13:53</p>
                                    </div>
                                </td>
                                <td>WHAgent</td>
                                <td>WHC 500</td>
                                <td>John Doe</td>
                                <td>WHAgent Account</td>
                                <td><div id={Style.status_td}>Successful</div></td>
                            </tr>

                            <tr>
                                <td>3</td>
                                <td>UA 123476689</td>
                                <td><div>
                                    <p>24 Aug, 2024</p>
                                    <p>13:53</p>
                                    </div>
                                </td>
                                <td>WHAgent</td>
                                <td>WHC 500</td>
                                <td>John Doe</td>
                                <td>WHAgent Account</td>
                                <td><div id={Style.status_td}>Successful</div></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default All_Transaction