import React, { useState } from 'react'
import Style from '../accounts/All_Accounts.module.css'
import plus_blue from '../../assets/svg/Plus_blue.svg'
import category_grid from '../../assets/svg/Category_Grid.svg'
import document_img from '../../assets/svg/Document_img.svg'
// import All_AccountCard from '../components/all_AccountCard/All_AccountCard'
import No_Documents from '../../assets/svg/NoDocuments_img.svg'
import { PopupContextHook } from '../../PopupContext '





const All_Accounts = () => {

    const [active, setActive] = useState(false)

  const faqs = document.getElementsByClassName(Style.FAQ_questions)

  const faqActive = (index) => {

    if (index == 1) {

      setActive(!active)

    }
    }

    const {updateAdd_AccountPopup} = PopupContextHook()

    const createAcc = ()=>{
        updateAdd_AccountPopup(true)
    }
    const All_Account_Card = [
        // {
        //     accNumber: "780520985"
        // },
        // {
        //     accNumber: "780520985"
        // },
        // {
        //     accNumber: "780520985"
        // },
        // {
        //     accNumber: "780520985"
        // },
        // {
        //     accNumber: "780520985"
        // },
        // {
        //     accNumber: "780520985"
        // },
        // {
        //     accNumber: "780520985"
        // },
        // {
        //     accNumber: "780520985"
        // }
    ]
    return (
        <>
            <div id={Style.All_Accounts_AccountTextDiv}>
                <div>
                    <div id={Style.homeText}><span>Home</span>{'>'}Accounts</div>
                    <p>Accounts</p>
                    <div id={Style.list_of_AccountText}>Here’s a list of all your accounts on XCel Merchant</div>
                </div>
                <div id={Style.Add_AccountDiv}>
                    <button onClick={createAcc}><img src={plus_blue} alt="" /> Add Current Account</button>
                </div>
            </div>
            <div id={Style.All_Account_mainDiv}>
                <div id={Style.All_Account_wrapperDiv}>

                    <div id={Style.All_AccountDiv}>
                        <div id={Style.accountText}>All Accounts</div>
                        <div id={Style.gridDiv}>
                            <div><img src={category_grid} alt="" /> Grid</div>
                            <img src={document_img} alt="" />
                        </div>
                    </div>
                    <div id={Style.All_AccountCardDiv}>
                        {/* {
                            All_Account_Card.map((object) => {
                                return (
                                    <All_AccountCard
                                        accNumber={object.accNumber} />
                                )
                            })
                        } */}
                        {
                            // All_Account_Card.map((obj) => {

                            //     return (
                            //         <All_AccountCard
                            //             accNumber={obj.accNumber} />
                            //     )
                            // })
                        }
                    </div>
                    {
                        All_Account_Card.length == 0 ?
                            <div id={Style.No_Account_DisplayDiv}>
                            <img src={No_Documents} alt="" />
                                <p>No User Found!</p>
                                <div>You currently do not have any registered user. Click on the ‘Add Current Account’ button to get started</div>
                            </div> :
                            <>It's Plenty</>
                    }
                </div>
                
            </div>
        </>

    )
}

export default All_Accounts