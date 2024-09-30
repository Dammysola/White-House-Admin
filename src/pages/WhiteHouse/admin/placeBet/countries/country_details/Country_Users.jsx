import React, { useState } from 'react'
import Style from "./Country_Users.module.css"
import flag from "../../../../../../assets/svg/nig_flag.svg"
import arrow_down from "../../../../../../assets/svg/arrow_down-dark.svg"
import person from "../../../../../../assets/images/Person1.png"
import search from "../../../../../../assets/svg/Search.svg"
import InputField from "../../../../../../components/input/InputField"
import Header from '../../../../../../components/header/Header'
import Staff_Card from '../../../staff/all_staff/component/Staff_Card'
import App_Pagination from '../../../../../../components/app_Pagination/App_Pagination'
import arrow_up from "../../../../../../assets/svg/arrow_up.svg"
import arrow_down2 from "../../../../../../assets/svg/arrow_down2.svg"




const Country_Users = () => {

    // const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(6)



    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    const footSoldiers_arr = [

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
            status: "Offline"
        },
        {
            img: person,
            name: "John Doe",
            position: "Nigeria",
            status: "Offline"
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

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = footSoldiers_arr.slice(indexOfFirstPost, indexOfLastPost);

    console.log(currentPosts);


    const back = () => {
        setCurrentPage(currentPage - 1)
    }

    const add = ()=>{
        setCurrentPage(currentPage + 1)
    }

    return (

        <div id={Style.FootSoldiers_mainDiv}>
            <Header
                headerText={"Foot Soldiers"}
                headerInfo={"Here’s an information on all Foot Soldiers"} />

            <div id={Style.FootSoldiers_wrapperDiv}>

                <div id={Style.flag_Div}>
                    <img id={Style.flag_img} src={flag} alt="" />
                </div>

                <div id={Style.FootSoldiers_header_dateDiv}>

                    <p id={Style.headerText}>All Foot Soldiers Nigeria</p>

                    <div id={Style.input_FilterDiv}>

                        <p>3rd July, 2024 <img src={arrow_down} alt="" /></p>
                        <div id={Style.searchDiv}>
                            <img src={search} alt="" />
                            <InputField
                                placeholder={"A-Z"} />
                        </div>

                    </div>
                </div>

                <div id={Style.footSoldiers_Card}>
                    {
                        currentPosts.map((object) => {
                            let statusColor =  object.status === "Online" ? true : false

                            return (
                                <Staff_Card
                                    img={object.img}
                                    status={object.status}
                                    name={object.name}
                                    position={object.position}
                                    to={object.to}
                                    statusColor= {statusColor} />
                            )
                        })
                    }
                </div>

                <div id={Style.pagination_mainDiv}>

                    <div id={Style.App_PaginationDiv}>

                       {
                       currentPage !== 1 ?
                       <div className={Style.imgDiv}>
                            <img onClick={back} src={arrow_up} alt="" />
                        </div>: ""
                        }
                        <App_Pagination postsPerPage={postsPerPage} totalPosts={footSoldiers_arr.length} paginate={paginate} />

                        
                            <div className={Style.imgDiv}>
                            <img onClick={add} src={arrow_down2} alt="" />
                        </div>

                    </div>

                    <p id={Style.paginationText}>Showing {currentPage} of {} pages</p>
                </div>


            </div>
        </div>
    )
}

export default Country_Users