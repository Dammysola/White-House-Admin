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
import Button from '../../../../../components/button/Button'



const All_FootSoldiers = () => {
    const [viewChange, setViewChange] = useState(0)

    const view = ()=>{
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
    return (
        <div id={Style.All_FootSoldiers_mainDiv}>
            <Header
                headerText={"All Foot Soldiers"}
                headerInfo={"Here’s an information of all Foot Soldiers"} />


            <div id={Style.All_FootSoldiers_wrapperDiv}>
                <div id={Style.All_Users_toggle_dateDiv}>
                    <p id={Style.All_FootSoldiers_headerText}>All Foot Soldiers</p>
                    <div id={Style.All_Users_input_FilterDiv}>
                        <p id={Style.grid_text}><img src={Category_Grid} alt="" /> Grid View</p>
                        <p>3rd July, 2024 <img src={arrow_down} alt="" /></p>
                        <div id={Style.searchDiv}>
                            <img src={search} alt="" />
                            <InputField
                                placeholder={"A-Z"} />
                        </div>

                    </div>
                </div>

{
    view == !viewChange ? 

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

</div>: ""
}


                <div id={Style.All_FootSoldiers_table_WrapperDiv}>
                    <div id={Style.Winner_loser_tableDiv}>
                        <table>
                            <tr id={Style.headerTable}>
                                <th>S/N</th>
                                <th>Name</th>
                                <th>Countries</th>
                                <th id={Style.amount_TableText}>Flag</th>
                                <th>Action</th>
                            </tr>
                            <tr id={Style}>
                                <td className={Style.number}>1</td>
                                <td > <div className={Style.person_name_td}><img src={person_img} alt="" /> John Doe</div></td>
                                <td>Nigeria</td>
                                <td><img src={nig_flag} alt="" /></td>
                                <td>
                                    <Button
                                        text={"View Users"} />
                                </td>
                            </tr>

                            <tr>
                                <td className={Style.number}>2</td>
                                <td > <div className={Style.person_name_td}><img src={person_img} alt="" /> John Doe</div></td>
                                <td>Nigeria</td>
                                <td><img src={country_flag2} alt="" /></td>
                                <td>
                                    <Button
                                        text={"View Users"} />
                                </td>
                            </tr>

                            <tr>
                                <td className={Style.number}>3</td>
                                <td > <div className={Style.person_name_td}><img src={person_img} alt="" /> John Doe</div></td>
                                <td>Nigeria</td>
                                <td><img src={country_flag2} alt="" /></td>
                                <td>
                                    <Button
                                        text={"View Users"} />
                                </td>
                            </tr>
                            <tr>
                                <td className={Style.number}>4</td>
                                <td> <div className={Style.person_name_td}><img src={person_img} alt="" /> John Doe</div></td>
                                <td>Nigeria</td>
                                <td><img src={nig_flag} alt="" /></td>
                                <td>
                                    <Button
                                        text={"View Users"} />
                                </td>
                            </tr>
                            <tr>
                                <td className={Style.number}>5</td>
                                <td> <div className={Style.person_name_td}><img src={person_img} alt="" /> John Doe</div></td>
                                <td>Nigeria</td>
                                <td><img src={country_flag} alt="" /></td>
                                <td>
                                    <Button
                                        text={"View Users"} />
                                </td>
                            </tr>
                            <tr>
                                <td className={Style.number}>6</td>
                                <td> <div className={Style.person_name_td}><img src={person_img} alt="" /> John Doe</div></td>
                                <td>Nigeria</td>
                                <td><img src={country_flag2} alt="" /></td>
                                <td>
                                    <Button
                                        text={"View Users"} />
                                </td>
                            </tr>
                            <tr>
                                <td className={Style.number}>7</td>
                                <td> <div className={Style.person_name_td}><img src={person_img} alt="" /> John Doe</div></td>
                                <td>Nigeria</td>
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

export default All_FootSoldiers