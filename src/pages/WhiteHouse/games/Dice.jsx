import React from 'react'
import Style from '../games/Dice.module.css'
import dice from '../../../assets/svg/Dice.svg'


const DiceGame = () => {
  return (
    <div>
      <div id={Style.PlaceBet_HeaderDiv}>

        <div>
          <div id={Style.PlaceBet_header}>Dice</div>
          <p>Here’s an information on Dice</p>
        </div>
        <img src={dice} alt="" />
      </div>

    </div>
  )
}

export default DiceGame