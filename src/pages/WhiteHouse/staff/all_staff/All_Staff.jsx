import React from 'react'
import Style from '../all_staff/All_Staff.module.css'
import rise from '../../../../assets/svg/rise.svg'
import arrow_side from '../../../../assets/svg/arrow_side.svg'

const All_Staff = () => {
  return (
    <div>
        <div id={Style.All_Staff_Card_wrapper}>
                    <div className={Style.All_Staff_CardDiv}>
                        <img src={rise} alt="" />
                        <div>
                            <p className={Style.Card_figure}>200k</p>
                            <p className={Style.Card_text}>Bet Placed</p>
                        </div>
                        <img src={arrow_side} alt="" />
                    </div>
                    <div className={Style.All_Staff_CardDiv}>
                        <img src={rise} alt="" />
                        <div>
                            <p className={Style.Card_figure}>200k</p>
                            <p className={Style.Card_text}>Bet Placed</p>
                        </div>
                        <img src={arrow_side} alt="" />
                    </div>
                    <div className={Style.All_Staff_CardDiv}>
                        <img src={rise} alt="" />
                        <div>
                            <p className={Style.Card_figure}>200k</p>
                            <p className={Style.Card_text}>Bet Placed</p>
                        </div>
                        <img src={arrow_side} alt="" />
                    </div>
                    <div className={Style.All_Staff_CardDiv}>
                        <img src={rise} alt="" />
                        <div>
                            <p className={Style.Card_figure}>200k</p>
                            <p className={Style.Card_text}>Bet Placed</p>
                        </div>
                        <img src={arrow_side} alt="" />
                    </div>
                </div>
    </div>
  )
}

export default All_Staff