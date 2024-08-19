import React, { useState } from 'react'
import Style from '../all_transactions/All_Transaction.module.css'
import arrow_down from '../../../../../assets/svg/arrow_down-dark.svg'
import search from '../../../../../assets/svg/Search.svg'
import InputField from '../../../../../components/input/InputField'
import filter from '../../../../../assets/svg/Complete_filter_img.svg'
import download from '../../../../../assets/svg/download_img.svg'




const All_Transaction = () => {

    const [toggleIndex, setToggleIndex] = useState(0)

    const toggle = (index) => {
        setToggleIndex(index)
    }

    
    return (
        <div id={Style.All_Transaction_mainDiv} >
            <div id={Style.All_Transaction_headerDiv}>
                <div>
                    <button onClick={() => toggle(0)} className={toggleIndex == 0 ? Style.toggleDiv_buttonActive : Style.All_Transaction_button}>All</button>
                    <button>WHAgent</button>
                    <button>Onboarding</button>
                </div>

                <div id={Style.Amount_Paid_input_FilterDiv}>
                    <p>3rd October, 2024 <img src={arrow_down} alt="" /></p>

                    <div id={Style.searchDiv}>
                        <img src={search} alt="" />
                        <InputField />
                    </div>
                    <div id={Style.imgDiv}>
                        <img src={filter} alt="" />
                        <img src={download} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default All_Transaction