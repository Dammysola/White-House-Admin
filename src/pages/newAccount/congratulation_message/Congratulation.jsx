import React from 'react'
import Style from '../congratulation_message/Congratulation.module.css'
import merchant_Logo from '../../../assets/svg/Merchant_logo.svg'
import arrow_black from '../../../assets/svg/arrow_down-dark.svg'
import green_tick from '../../../assets/svg/Green_tick.svg'
import Button from '../../../components/button/Button'
import alpha_logo from '../../../assets/svg/Alpha_Bet_Black_Logo.svg'
import { Link } from 'react-router-dom'


const Congratulation = () => {
  return (
    <div>
      <div id={Style.Congratulation_contentDiv}>
        <img src={green_tick} alt="" />
        <div>Congratulations</div>

        <p>Your merchant account was created successfully.  Click on the button below to login in to your account to continue</p>
        <Link to={'/allAccounts'}>
          <Button
            type={"submit"}
            text={"Sign in to your account"} />
        </Link>

      </div>
    </div>
  )
}

export default Congratulation