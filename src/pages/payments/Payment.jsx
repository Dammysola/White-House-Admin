import React from 'react'
import Style from '../payments/Payment.module.css'



const Payment = () => {
    return (
        <div id={Style.ProductsMainDiv}>

            <div id={Style.ProductsTextDiv}>
                <div>
                    <div id={Style.homeText}>Home {'>'} Payments <span>{'>'} Move to Bank </span></div>
                    <p>Move to Bank</p>
                    <div id={Style.list_of_AccountText}>View products, transactions and move money to your account</div>
                </div>
            </div>

            <div id={Style.Products_mainDiv}>
                <div id={Style.Products_wrapperDiv}>
                    <div id={Style.ProductsDiv}>
                        <div id={Style.ProductsText}>All Products</div>

                    </div>

                    <table>
                        <tr id={Style.headerTable}>
                            <th>S/N</th>
                            <th>Product Name</th>
                            <th>Volume</th>
                            <th>Value</th>
                            <th>Account</th>
                            <th>Action</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Product 1</td>
                            <td>10</td>
                            <td>250,000</td>
                            <td>8756485390</td>
                            <td>
                                <div id={Style.action_field}>
                                    <button className={Style.Acc_Transaction_btn1}>View Balance</button>
                                    <button className={Style.Acc_Transaction_btn2} >View Transaction</button>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>2</td>
                            <td>Product 2</td>
                            <td>10</td>
                            <td>250,000</td>
                            <td>8756485390</td>
                            <td>
                                <div id={Style.action_field}>
                                    <button className={Style.Acc_Transaction_btn1}>View Balance</button>
                                    <button className={Style.Acc_Transaction_btn2} >View Transaction</button>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>3</td>
                            <td>Product 3</td>
                            <td>10</td>
                            <td>250,000</td>
                            <td>8756485390</td>
                            <td>
                                <div id={Style.action_field}>
                                    <button className={Style.Acc_Transaction_btn1}>View Balance</button>
                                    <button className={Style.Acc_Transaction_btn2} >View Transaction</button>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>4</td>
                            <td>Product 4</td>
                            <td>10</td>
                            <td>250,000</td>
                            <td>8756485390</td>
                            <td>
                                <div id={Style.action_field}>
                                    <button className={Style.Acc_Transaction_btn1}>View Balance</button>
                                    <button className={Style.Acc_Transaction_btn2} >View Transaction</button>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>5</td>
                            <td>Product 5</td>
                            <td>10</td>
                            <td>250,000</td>
                            <td>8756485390</td>
                            <td>
                                <div id={Style.action_field}>
                                    <button className={Style.Acc_Transaction_btn1}>View Balance</button>
                                    <button className={Style.Acc_Transaction_btn2} >View Transaction</button>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>6</td>
                            <td>Product 6</td>
                            <td>10</td>
                            <td>250,000</td>
                            <td>8756485390</td>
                            <td>
                                <div id={Style.action_field}>
                                    <button className={Style.Acc_Transaction_btn1}>View Balance</button>
                                    <button className={Style.Acc_Transaction_btn2} >View Transaction</button>
                                </div>
                            </td>
                        </tr>

                        <tr id={Style.last_Table_Line}>
                            <td>7</td>
                            <td>Product 7</td>
                            <td>10</td>
                            <td>250,000</td>
                            <td>8756485390</td>
                            <td>
                                <div id={Style.action_field}>
                                    <button className={Style.Acc_Transaction_btn1}>View Balance</button>
                                    <button className={Style.Acc_Transaction_btn2} >View Transaction</button>
                                </div>
                            </td>
                        </tr>

                        {/* <tr>
                            <td>8</td>
                            <td>Product 8</td>
                            <td>10</td>
                            <td>250,000</td>
                            <td>8756485390</td>
                            <td>
                                <div id={Style.action_field}>
                                    <button className={Style.Acc_Transaction_btn1}>View Balance</button>
                                    <button className={Style.Acc_Transaction_btn2} >View Transaction</button>
                                </div>
                            </td>
                        </tr> */}
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Payment