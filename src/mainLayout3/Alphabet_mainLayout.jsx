import React from 'react'
import Style from '../mainLayout3/Alphabet_mainLayout.module.css'
import All_AccountNav from '../components/all_Account_Nav/Account_Nav'
import { Outlet } from 'react-router-dom'

const Alphabet_mainLayout = () => {
  return (
    <div id={Style.wrapper}>
        <All_AccountNav/>
     
      <div><Outlet/></div>

    </div>
  )
}

export default Alphabet_mainLayout