import React from 'react'
import Style from '../progress_bar/Progress_Bar.module.css'
import smiley from '../../assets/svg/gray_smiley.svg'

const Progress_Bar = () => {
    return (
        <div>
            <div className={Style.Revenue_earningDiv}>

                <p id={Style.averageCall_Text}>Prompt Response</p>
                <p className={Style.priceText}>70%</p>
                <div className={Style.Revenue_progressDiv}>
                    <div className={Style.Revenue_progressBar}></div>
                    <img src={smiley} alt="" />
                </div>
                <p className={Style.Revenue_infoText}>70% more earning than last month, keep
                    watching t find out more</p>
            </div>
        </div>
    )
}

export default Progress_Bar