import React from 'react'
import Style from '../countries/Countries.module.css'
import filter_img from '../../../../../assets/svg/Complete_filter_img.svg'
import download from '../../../../../assets/svg/download_img.svg'
import search from '../../../../../assets/svg/Search.svg'
import arrow_down from '../../../../../assets/svg/arrow_down-dark.svg'
import InputField from '../../../../../components/input/InputField'
import Button from '../../../../../components/button/Button'
import country_flag2 from '../../../../../assets/svg/country_flag2.svg'
import country_flag from '../../../../../assets/svg/country_flag.svg'
import nig_flag from '../../../../../assets/svg/nig_flag.svg'
import back from '../../../../../assets/svg/back.svg'
import Header from '../../../../../components/header/Header'
import { useNavigate } from 'react-router-dom'


const Countries = () => {

    
    return (
        <div id={Style.Winner_loser_mainDiv}>
            <Header
                headerText={"Total Countries"}
                headerInfo={"Here’s an information on all Countries"}/>
                
            <div id={Style.Winner_loser_wrapperDiv}>

                <div id={Style.input_FilterDiv}>
                    <p>3rd July, 2024 <img src={arrow_down} alt="" /></p>
                    <div id={Style.searchDiv}>
                        <img src={search} alt="" />
                        <InputField
                            placeholder={"Search Countries"} />
                    </div>

                    <div id={Style.InputField_images}>
                        <img src={filter_img} alt="" />
                        <img src={download} alt="" />
                    </div>
                </div>

                <div id={Style.Winner_loser_wrapper}>
                    <div id={Style.Winner_loser_tableDiv}>
                        <table>
                            <tr id={Style.headerTable}>
                                <th>S/N</th>
                                <th>Countries</th>
                                <th>Users</th>
                                <th id={Style.amount_TableText}>Flag</th>
                                <th>Action</th>
                            </tr>
                            <tr id={Style}>
                                <td className={Style.number}>1</td>
                                <td>SA 123476689</td>
                                <td>20,000</td>
                                <td><img src={nig_flag} alt="" /></td>
                                <td>
                                    <Button
                                        text={"View Users"} />
                                </td>
                            </tr>

                            <tr>
                                <td className={Style.number}>2</td>
                                <td>SA 123476689</td>
                                <td>20,000</td>
                                <td><img src={country_flag2} alt="" /></td>
                                <td>
                                    <Button
                                        text={"View Users"} />
                                </td>
                            </tr>

                            <tr>
                                <td className={Style.number}>3</td>
                                <td>SA 123476689</td>
                                <td>20,000</td>
                                <td><img src={country_flag2} alt="" /></td>
                                <td>
                                    <Button
                                        text={"View Users"} />
                                </td>
                            </tr>
                            <tr>
                                <td className={Style.number}>4</td>
                                <td>SA 123476689</td>
                                <td>20,000</td>
                                <td><img src={nig_flag} alt="" /></td>
                                <td>
                                    <Button
                                        text={"View Users"} />
                                </td>
                            </tr>
                            <tr>
                                <td className={Style.number}>5</td>
                                <td>SA 123476689</td>
                                <td>20,000</td>
                                <td><img src={country_flag} alt="" /></td>
                                <td>
                                    <Button
                                        text={"View Users"} />
                                </td>
                            </tr>
                            <tr>
                                <td className={Style.number}>6</td>
                                <td>SA 123476689</td>
                                <td>20,000</td>
                                <td><img src={country_flag2} alt="" /></td>
                                <td>
                                    <Button
                                        text={"View Users"} />
                                </td>
                            </tr>
                            <tr>
                                <td className={Style.number}>7</td>
                                <td>SA 123476689</td>
                                <td>20,000</td>
                                <td><img src={nig_flag} alt="" /></td>
                                <td>
                                    <Button
                                        text={"View Users"} />
                                </td>
                            </tr>
                            <tr id={Style.lastline}>
                                <td className={Style.number}>8</td>
                                <td>SA 123476689</td>
                                <td>20,000</td>
                                <td><img src={country_flag} alt="" /></td>
                                <td>
                                    <Button
                                        text={"View Users"} />
                                </td>
                            </tr>

                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Countries