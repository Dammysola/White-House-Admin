import React from 'react'
import Style from '../add_Account/Add_CurrentAccount.module.css'
import Add_Card from '../../components/add_Card/Add_Card'
import { PopupContextHook } from '../../PopupContext '



const Add_CurrentAccount = () => {
  const { updateSuccessAccountPopup, updateAdd_AccountPopup } = PopupContextHook()

  const createAccount_success = () => {
    updateAdd_AccountPopup(false)
    updateSuccessAccountPopup(true)
  }

  return (
    <div>
      <Add_Card
        cols={"55"}
        rows={"10"}
        placeholder={"Enter Description"}
        name={"Description"}
        AddText={"Add Current Account"}
        btnText={"Add Account"}
        type={"submit"}
        onClick={createAccount_success} />

      {/* <div id={Style.Add_CurrentAccount_mainDiv}>
        <div id={Style.Add_CurrentAccount_WrapperDiv}>
          <div id={Style.Add_CurrentAccount_Text}>Add Current Account</div>
          <div id={Style.Add_CurrentAccount_description}>
            <p></p>
            <textarea name="" id="" cols="55" rows="10" placeholder='Enter Description'></textarea>
          </div>
          <div id={Style.BtnDiv}>
            <button
              onClick={createAccount_success}>Add Account</button>


          </div>
        </div>
      </div>*/}

    </div> 
  )
}

export default Add_CurrentAccount