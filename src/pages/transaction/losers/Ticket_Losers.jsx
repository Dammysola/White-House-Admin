import React from 'react'
import Style from '../losers/Ticket_Losers.module.css'
import status_img from '../../../assets/svg/status_img.svg'
import green_eyes from '../../../assets/svg/green_eyes.svg'
import warning from '../../../assets/svg/yellow_warning.svg'
import delete_list from '../../../assets/svg/product_delete.svg'
const Ticket_Losers = () => {
    return (
        <div>
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
                    <th>Action</th>
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
                        <div id={Style.statusText_lost}>lost</div>
                    </td>
                    <td>
                        <div id={Style.action_field}>
                            <img src={green_eyes} alt="" />
                            <img src={warning} alt="" />
                            <img src={delete_list} alt="" />
                        </div>
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
                    <td>
                        <div id={Style.action_field}>
                            <img src={green_eyes} alt="" />
                            <img src={warning} alt="" />
                            <img src={delete_list} alt="" />
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
                            <div id={Style.statusText_lost}>lost</div>
                        </div>
                    </td>
                    <td>
                        <div id={Style.action_field}>
                            <img src={green_eyes} alt="" />
                            <img src={warning} alt="" />
                            <img src={delete_list} alt="" />
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
                    <td>
                        <div id={Style.action_field}>
                            <img src={green_eyes} alt="" />
                            <img src={warning} alt="" />
                            <img src={delete_list} alt="" />
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
                            <div id={Style.statusText_lost}>lost</div>
                        </div>
                    </td>
                    <td>
                        <div id={Style.action_field}>
                            <img src={green_eyes} alt="" />
                            <img src={warning} alt="" />
                            <img src={delete_list} alt="" />
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
                            <div id={Style.statusText_lost}>lost</div>
                        </div>
                    </td>
                    <td>
                        <div id={Style.action_field}>
                            <img src={green_eyes} alt="" />
                            <img src={warning} alt="" />
                            <img src={delete_list} alt="" />
                        </div>
                    </td>
                </tr>

                {/* <tr id={Style.line}>
                            <td>7</td>
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
                        </tr> */}

            </table>
        </div>
    )
}

export default Ticket_Losers