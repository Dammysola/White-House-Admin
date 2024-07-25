import React, { useState } from 'react'
import Style from '../accounts/All_Accounts.module.css'
import plus_blue from '../../../assets/svg/Plus_blue.svg'
import category_grid from '../../../assets/svg/Category_Grid.svg'
import document_img from '../../../assets/svg/Document_img.svg'
// import All_AccountCard from '../../../components/all_AccountCard/All_AccountCard'
import No_Documents from '../../../assets/svg/NoDocuments_img.svg'
import Document_white from '../../../assets/svg/Document_white.svg'
import Category_grey from '../../../assets/svg/Category_grey.svg'
import { PopupContextHook } from '../../../PopupContext '
import Acc_Transaction from './account_Transaction/Acc_Transaction'





const All_Accounts = () => {

    let [toggleIndex, setToggleIndex] = useState(0);

    const allAccountToggle = (index) => {

        setToggleIndex(index)

    }


    //     const [active, setActive] = useState(false)

    //   const faqs = document.getElementsByClassName(Style.FAQ_questions)

    //   const faqActive = (index) => {

    //     if (index == 1) {

    //       setActive(!active)

    //     }
    //     }

    const { updateAdd_AccountPopup } = PopupContextHook()

    const createAcc = () => {
        updateAdd_AccountPopup(true)
    }
    const All_Account_Card = [
        {
            accNumber: "780520985"
        },
        {
            accNumber: "780520985"
        },
        {
            accNumber: "780520985"
        },
        {
            accNumber: "780520985"
        },
        {
            accNumber: "780520985"
        },
        {
            accNumber: "780520985"
        },
        {
            accNumber: "780520985"
        },
        {
            accNumber: "780520985"
        }
    ]
    return (
        <div id={Style.AllAccount_WholeTextDiv}>
            <div id={Style.All_Accounts_AccountTextDiv}>
                <div>
                    <div id={Style.homeText}><span>Home</span>{'>'}Accounts</div>
                    <p>Accounts</p>
                    <div id={Style.list_of_AccountText}>Here’s a list of all your accounts on AlphaBet</div>
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
                            <button onClick={() => allAccountToggle(0)} style={{ backgroundColor: toggleIndex == 0 ? "#003E79": "transparent" }}>
                                {toggleIndex == 0 ? <img src={category_grid} alt="" /> : <img src={Category_grey} alt="" />}</button>
                            <button onClick={() => allAccountToggle(1)} style={{ backgroundColor: toggleIndex == 1 ? "#003E79" : "transparent" }}>
                                {toggleIndex == 1 ?
                                 <img src={Document_white} alt="" /> : <img src={document_img} alt="" />} </button>
                        </div>
                    </div>
                    <div>
                        {toggleIndex == 0 ?

                            <div id={Style.All_AccountCardDiv}>
                                {
                                    All_Account_Card.map((object) => {
                                        return (
                                            <All_Account_Card
                                                accNumber={object.accNumber} />
                                        )
                                    })
                                }

                            </div> 
                            : <Acc_Transaction/>

                        }

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

            </div>
        </div>

    )
}

export default All_Accounts