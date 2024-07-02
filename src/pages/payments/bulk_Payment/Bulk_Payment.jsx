import React, { useState } from 'react'
import Style from '../bulk_Payment/Bulk_Payment.module.css'
import No_Documents from '../../../assets/svg/NoDocuments_img.svg'
import plus_blue from '../../../assets/svg/Plus_blue.svg'


const Bulk_Payment = () => {

    let [toggleIndex, setToggleIndex] = useState(0);

    const bulkPayToggle = (index) => {

        setToggleIndex(index)

    }

    let arr = []
    return (
        <div id={Style.AllAccount_WholeTextDiv}>
            <div id={Style.All_Accounts_AccountTextDiv}>
                <div>
                    <div id={Style.homeText}><span>Home {'>'} Payment</span> {'>'} Bulk Pay</div>
                    <p>Bulk Pay</p>
                    <div id={Style.list_of_AccountText}>Here’s a list of all your accounts on AlphaBet</div>
                </div>
                <div id={Style.BulkPay_flexDiv}>
                    <div id={Style.gridDiv}>
                        <button onClick={() => bulkPayToggle(0)} style={{ backgroundColor: toggleIndex == 0 ? "#FFFFFF" : "transparent" }}>
                            <div>Receipts</div>
                        </button>
                        <button onClick={() => bulkPayToggle(1)} style={{ backgroundColor: toggleIndex == 1 ? "#003E79" : "transparent" }}>
                            <div>Categories</div>
                        </button>
                    </div>
                    <div id={Style.Add_AccountDiv}>
                        <button><img src={plus_blue} alt="" />
                            Create Receipt</button>
                    </div>
                </div>

            </div>

            <div id={Style.All_Account_mainDiv}>
                <div id={Style.All_Account_wrapperDiv}>

                    <div id={Style.All_AccountDiv}>
                        <div id={Style.accountText}>Recipients</div>

                    </div>
                    <div>
                        {/* {toggleIndex == 0 ?
                            <div>
                                <tr id={Style.headerTable}>
                                    <th><input type="checkbox" name="" id="" /></th>
                                    <th>S/N</th>
                                    <th>Account Number</th>
                                    <th>Account Type</th>
                                    <th id={Style.descriptionText}>Description</th>
                                    <th id={Style.actionDiv}>Action</th>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" name="" id="" /></td>
                                    <td>1</td>
                                    <td>789756442423</td>
                                    <td>Current</td>
                                    <td>789756442423</td>
                                    <td>
                                        <div id={Style.action_field}>
                                            <button className={Style.Acc_Transaction_btn1}>View Balance</button>
                                            <button className={Style.Acc_Transaction_btn2} >View Transaction</button>
                                        </div>
                                    </td>
                                </tr>
                            </div>
                            : <Acc_Transaction />

                        } */}

                        {
                            arr.length == 0 ?
                                <div id={Style.No_ReceiptDiv}>
                                    <img src={No_Documents} alt="" />
                                    <p>No User Found!</p>
                                    <div>You currently do not have any registered user. Click on the ‘Add Current Account’ button to get started</div>
                                </div> :
                                <>It's Plenty</>
                        }
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Bulk_Payment