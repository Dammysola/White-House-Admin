import React from 'react'
import Style from '../pending_requests/Pending_Request.module.css'
import Header from '../../../../../components/header/Header'
import gray_delete from '../../../../../assets/svg/gray_delete.svg'
import red_delete from '../../../../../assets/svg/red_delete.svg'
import { Link } from 'react-router-dom'

const Pending_Request = () => {
    return (
        <div id={Style.Pending_Request_mainDiv}>
            <Header
                headerText={"Pending Requests"}
                headerInfo={"Here’s an information on all Pending Requests"} />

            <div id={Style.Pending_Request_wrapperDiv}>
                <div id={Style.Pending_Request_headerDiv}>
                    <p id={Style.Pending_Request_HeaderText}>Pending Requests lists <span>(2000)</span></p>
                    <Link to={"/trash"}><p id={Style.trashText}><img src={gray_delete} alt="" /> Trash</p></Link>
                </div>

                <div id={Style.Pending_Request_table_wrapperDiv}>
                    <table>
                        <tr id={Style.headerTable}>
                            <th>S/N</th>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Country</th>
                            <th>Bank Details</th>
                            <th>Region of Operation</th>
                            <th>Action</th>
                        </tr>

                        <tbody>
                        <tr>
                                <td>1</td>
                                <td>John Doe</td>
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
                                <td>Ikeja</td>
                                <td><div className={Style.ActionDiv}><button className={Style.Action_button}>Approve</button> <img src={red_delete} alt="" /></div></td>
                            </tr>

                            <tr>
                                <td>2</td>
                                <td>John Doe</td>
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
                                <td>Ikeja</td>
                                <td><div className={Style.ActionDiv}><button className={Style.Action_button}>Approve</button> <img src={red_delete} alt="" /></div></td>
                            </tr>

                            <tr>
                                <td>3</td>
                                <td>John Doe</td>
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
                                <td>Ikeja</td>
                                <td><div className={Style.ActionDiv}><button className={Style.Action_button}>Approve</button> <img src={red_delete} alt="" /></div></td>
                            </tr>
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    )
}

export default Pending_Request