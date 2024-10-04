import React from 'react'
import Style from '../countries/Countries.module.css'
import search from '../../../../../assets/svg/Search.svg'
import arrow_down from '../../../../../assets/svg/arrow_down-dark.svg'
import InputField from '../../../../../components/input/InputField'
import Button from '../../../../../components/button/Button'
import country_flag2 from '../../../../../assets/svg/country_flag2.svg'
import country_flag from '../../../../../assets/svg/country_flag.svg'
import nig_flag from '../../../../../assets/svg/nig_flag.svg'
import Header from '../../../../../components/header/Header'
import { Link } from 'react-router-dom'



const Countries = () => {

    const countries_arr = [

        {
            countries: "Nigeria",
            users: "20,000",
            flag: nig_flag,
            action: "View Users"
        },

        {

            countries: "USA",
            users: "20,000",
            flag: country_flag,
            action: "View Users"
        },
        {

            users: "20,000",
            countries: "Nigeria",
            flag: nig_flag,
            action: "View Users"
        },
        {

            countries: "Nigeria",
            users: "20,000",
            flag: country_flag2,
            action: "View Users"
        },
        {

            countries: "Nigeria",
            users: "20,000",
            flag: nig_flag,
            action: "View Users"
        },
        {

            countries: "Nigeria",
            users: "20,000",
            flag: country_flag,
            action: "View Users"
        },
        {

            countries: "Nigeria",
            users: "20,000",
            flag: country_flag2,
            action: "View Users"
        },
        {

            countries: "Nigeria",
            users: "20,000",
            flag: country_flag2,
            action: "View Users"
        }
    ]



    return (
        <div id={Style.Winner_loser_mainDiv}>
            <Header
                headerText={"Total Countries"}
                headerInfo={"Here’s an information on all Countries"} />

            <div id={Style.Winner_loser_wrapperDiv}>
 
               {/* <div id={Style.input_FilterDiv}>
                    <p>3rd July, 2024 <img src={arrow_down} alt="" /></p> */}

                    <div id={Style.searchDiv}>
                        <img src={search} alt="" />
                        <InputField
                            placeholder={"Search Countries"} />
                    </div>
                {/* </div> */}

                <div id={Style.Winner_loser_wrapper}>
                    <div id={Style.Winner_loser_tableDiv}>
                        <table>
                            <thead>
                                <tr id={Style.headerTable}>
                                    <th>S/N</th>
                                    <th>Countries</th>
                                    <th>Users</th>
                                    <th>Flag</th>
                                    <th>Action</th>
                                </tr>
                            </thead>

                            <tbody>

                                {
                                    countries_arr.map((obj, index) => {

                                        return (

                                            <tr>
                                                <td className={Style.number}>{index + 1}</td>
                                                <td>{obj.countries}</td>
                                                <td>{obj.users}</td>
                                                <td><img src={obj.flag} alt="" /></td>
                                                <td>
                                                    <Link to={"/countryUsers"}>
                                                        <Button
                                                            text={obj.action} />
                                                    </Link>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Countries