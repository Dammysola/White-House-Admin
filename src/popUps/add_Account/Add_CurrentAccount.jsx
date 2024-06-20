import React from 'react'
import Style from '../add_Account/Add_CurrentAccount.module.css'
import Add_Card from '../../components/add_Card/Add_Card'
import { PopupContextHook } from '../../PopupContext '



const Add_CurrentAccount = () => {
  const { updateSuccessProductPopup, updateAdd_AccountPopup } = PopupContextHook()

  const createAccount_success = () => {
    updateAdd_AccountPopup(false)
    updateSuccessProductPopup(true)
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
        onSubmit={createAccount_success} />
    </div>
  )
}

export default Add_CurrentAccount