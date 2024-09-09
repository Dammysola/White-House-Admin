import React, { useState } from 'react'
import Style from '../all_footSoldiers/All_FootSoldiers.module.css'
import Header from '../../../../../components/header/Header'
import Staff_Card from '../../staff/all_staff/component/Staff_Card'
import person from '../../../../../assets/images/Person1.png'
import arrow_down from '../../../../../assets/svg/arrow_down-dark.svg'
import search from '../../../../../assets/svg/Search.svg'
import download from '../../../../../assets/svg/download_img.svg'
import InputField from '../../../../../components/input/InputField'
import nig_flag from '../../../../../assets/svg/nig_flag.svg'
import person_img from '../../../../../assets/images/person_img.png'
import country_flag from '../../../../../assets/svg/country_flag.svg'
import country_flag2 from '../../../../../assets/svg/country_flag2.svg'
import Category_Grid from '../../../../../assets/svg/Category_Grid.svg'
import list_view from '../../../../../assets/svg/list_view.svg'
import Button from '../../../../../components/button/Button'




const All_FootSoldiers = () => {
    const [isGridView, setIsGridView] = useState(true);

    const view = () => {
        setViewChange(!viewChange)
    }

    const all_soldiers_arr = [
        {
            img: person,
            name: "John Doe",
            position: "Nigeria",
            status: "Online",
            to: "/userDetails"
        },
        {
            img: person,
            name: "John Doe",
            position: "Nigeria",
            status: "Online"
        },
        {
            img: person,
            name: "John Doe",
            position: "Nigeria",
            status: "Online"
        },
        {
            img: person,
            name: "John Doe",
            position: "Nigeria",
            status: "Online"
        },
        {
            img: person,
            name: "John Doe",
            position: "Nigeria",
            status: "Online"
        },
        {
            img: person,
            name: "John Doe",
            position: "Nigeria",
            status: "Online"
        },
        {
            img: person,
            name: "John Doe",
            position: "Nigeria",
            status: "Online"
        },
        {
            img: person,
            name: "John Doe",
            position: "Nigeria",
            status: "Online"
        },
        {
            img: person,
            name: "John Doe",
            position: "Nigeria",
            status: "Online"
        },
        {
            img: person,
            name: "John Doe",
            position: "Nigeria",
            status: "Online"
        },
        {
            img: person,
            name: "John Doe",
            position: "Nigeria",
            status: "Online"
        },
        {
            img: person,
            name: "John Doe",
            position: "Nigeria",
            status: "Online"
        },

    ]

    const listView_arr = [

        {
            name: {
                img: person_img,
                name: "John Doe"
            },
            countries: "Nigeria",
            flag: nig_flag,
            action: "View Users"
        },

        {
            name: {
                img: person_img,
                name: "John Doe"
            },
            countries: "Nigeria",
            flag: country_flag,
            action: "View Users"
        },
        {
            name: {
                img: person_img,
                name: "John Doe"
            },
            countries: "Nigeria",
            flag: nig_flag,
            action: "View Users"
        },
        {
            name: {
                img: person_img,
                name: "John Doe"
            },
            countries: "Nigeria",
            flag: country_flag2,
            action: "View Users"
        },
        {
            name: {
                img: person_img,
                name: "John Doe"
            },
            countries: "Nigeria",
            flag: nig_flag,
            action: "View Users"
        },
        {
            name: {
                img: person_img,
                name: "John Doe"
            },
            countries: "Nigeria",
            flag: country_flag,
            action: "View Users"
        },
        {
            name: {
                img: person_img,
                name: "John Doe"
            },
            countries: "Nigeria",
            flag: country_flag2,
            action: "View Users"
        },
        {
            name: {
                img: person_img,
                name: "John Doe"
            },
            countries: "Nigeria",
            flag: country_flag2,
            action: "View Users"
        }
    ]
    return (
        <div id={Style.All_FootSoldiers_mainDiv}>
            <Header
                headerText={"All Foot Soldiers"}
                headerInfo={"Here’s an information of all Foot Soldiers"} />


            <div id={Style.All_FootSoldiers_wrapperDiv}>
                <div id={Style.All_Users_toggle_dateDiv}>
                    <p id={Style.All_FootSoldiers_headerText}>All Foot Soldiers</p>
                    <div id={Style.All_Users_input_FilterDiv}>

                        <button id={Style.viewchange_button} onClick={() => setIsGridView(!isGridView)}>
                            {isGridView ? <div className={Style.footsoldier_listGrid_view}><img src={list_view} alt="" /> List View</div> : <div className={Style.footsoldier_listGrid_view}><img src={Category_Grid} alt="" /> Grid View</div>}
                        </button>
                        <p>3rd July, 2024 <img src={arrow_down} alt="" /></p>
                        <div id={Style.searchDiv}>
                            <img src={search} alt="" />
                            <InputField
                                placeholder={"A-Z"} />
                        </div>

                    </div>
                </div>


                {
                    isGridView ?

                        <div id={Style.All_Users_Card}>
                            {
                                all_soldiers_arr.map((object) => {
                                    return (
                                        <Staff_Card
                                            img={object.img}
                                            status={object.status}
                                            name={object.name}
                                            position={object.position}
                                            to={object.to}
                                        />
                                    )
                                })
                            }

                        </div> : ""
                }


                {
                    !isGridView ?
                        <div id={Style.All_FootSoldiers_tableDiv}>
                            <table>
                                <thead>
                                    <tr id={Style.headerTable}>
                                        <th>S/N</th>
                                        <th>Name</th>
                                        <th>Countries</th>
                                        <th>Flag</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>


                                <tbody>
                                    {
                                        listView_arr.map((obj, index) => {
                                            return (

                                                <tr>
                                                    <td className={Style.number}>{index + 1}</td>
                                                    <td > <div className={Style.person_name_td}><img src={obj.name.img} alt="" /> {obj.name.name}</div></td>
                                                    <td>{obj.countries}</td>
                                                    <td><img src={obj.flag} alt="" /></td>
                                                    <td>
                                                        <Button
                                                            text={obj.action} />
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>

                            </table>
                        </div> : ""
                }
            </div>
        </div>
    )
}

export default All_FootSoldiers