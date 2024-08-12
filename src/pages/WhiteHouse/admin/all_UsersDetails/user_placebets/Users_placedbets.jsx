import React from 'react'
import Style from '../user_placebets/Users_placedbets.module.css'
import Header from '../../../../../components/header/Header'
import search from '../../../../../assets/svg/Search.svg'
import InputField from '../../../../../components/input/InputField'
import filter_img from '../../../../../assets/svg/Complete_filter_img.svg'
import download from '../../../../../assets/svg/download_img.svg'

const Users_placedbets = () => {
    return (
        <div id={Style.Users_placedbets_mainDiv}>
            <Header
                headerText={"Placed Bet"}
                headerInfo={"Here’s an information on all bets placed by John Doe"} />

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
                                <td>200</td>
                                <td>
                                    <div id={Style.statusText}>Won</div>
                                </td>
                            </tr>

                            <tr>
                                <td>2</td>
                                <td>SA 123476689</td>
                                <td>8012345678</td>
                                <td>200</td>
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
                                <td>200</td>
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
                                <td>200</td>
                                <td>
                                    <div id={Style.action_field}>
                                        <div id={Style.statusText_loss}>Loss</div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>SA 123476689</td>
                                <td>8012345678</td>
                                <td>200</td>
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
                                <td>200</td>
                                <td>
                                    <div id={Style.action_field}>
                                        <div id={Style.statusText_loss}>Loss</div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>SA 123476689</td>
                                <td>8012345678</td>
                                <td>200</td>
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
                                <td>200</td>
                                <td>
                                    <div id={Style.action_field}>
                                        <div id={Style.statusText_loss}>Loss</div>
                                    </div>
                                </td>
                            </tr>

                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Users_placedbets