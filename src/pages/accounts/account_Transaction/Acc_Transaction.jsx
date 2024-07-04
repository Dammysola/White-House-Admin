import React from 'react'
import Style from '../account_Transaction/Acc_Transaction.module.css'


const Acc_Transaction = () => {
  return (
    <>
      <div id={Style.mainDiv}>
       
        <div id={Style.No_Account_mainDiv}>
          <div id={Style.No_Account_wrapperDiv}>
           
            <table>
              <tr id={Style.headerTable}>
                <th><input type="checkbox" name="" id="" /></th>
                <th>S/N</th>
                <th>Account Number</th>
                <th>Account Type</th>
                <th id={Style.descriptionText}>Description</th>
                <th id={Style.actionDiv}>Action</th>
              </tr>
              <tr>
                <td><input type="checkbox" name="" id="" /></td>
                <td>1</td>
                <td>789756442423</td>
                <td>Current</td>
                <td>789756442423</td>
                <td>
                  <div id={Style.action_field}>
                    <button className={Style.Acc_Transaction_btn1}>View Balance</button>
                    <button className={Style.Acc_Transaction_btn2} >View Transaction</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td><input type="checkbox" name="" id="" /></td>
                <td>2</td>
                <td>789756442423</td>
                <td>Current</td>
                <td>789756442423</td>
                <td>
                  <div id={Style.action_field}>
                    <button className={Style.Acc_Transaction_btn1}>View Balance</button>
                    <button className={Style.Acc_Transaction_btn2}>View Transaction</button>
                  </div>
                </td>
              </tr>
              <tr>
                <th><input type="checkbox" name="" id="" /></th>
                <td>3</td>
                <td>789756442423</td>
                <td>Current</td>
                <td>789756442423</td>
                <td>
                  <div id={Style.action_field}>
                    <button className={Style.Acc_Transaction_btn1}>View Balance</button>
                    <button className={Style.Acc_Transaction_btn2}>View Transaction</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td><input type="checkbox" name="" id="" /></td>
                <td>4</td>
                <td>789756442423</td>
                <td>Current</td>
                <td>789756442423</td>
                <td>
                  <div id={Style.action_field}>
                    <button className={Style.Acc_Transaction_btn1}>View Balance</button>
                    <button className={Style.Acc_Transaction_btn2}>View Transaction</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td><input type="checkbox" name="" id="" /></td>
                <td>5</td>
                <td>789756442423</td>
                <td>Current</td>
                <td>789756442423</td>
                <td>
                  <div id={Style.action_field}>
                    <button className={Style.Acc_Transaction_btn1}>View Balance</button>
                    <button className={Style.Acc_Transaction_btn2}>View Transaction</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td><input type="checkbox" name="" id="" /></td>
                <td>6</td>
                <td>789756442423</td>
                <td>Current</td>
                <td>789756442423</td>
                <td>
                  <div id={Style.action_field}>
                    <button className={Style.Acc_Transaction_btn1}>View Balance</button>
                    <button className={Style.Acc_Transaction_btn2}>View Transaction</button>
                  </div>
                </td>
              </tr>
              <tr id={Style.last_Table_Line}>
                <td><input type="checkbox" name="" id="" /></td>
                <td>7</td>
                <td>789756442423</td>
                <td>Current</td>
                <td>789756442423</td>
                <td>
                  <div id={Style.action_field}>
                    <button className={Style.Acc_Transaction_btn1}>View Balance</button>
                    <button className={Style.Acc_Transaction_btn2}>View Transaction</button>
                  </div>
                </td>
              </tr>
            </table>
          </div>

        </div>
      </div>
    </>
  )
}

export default Acc_Transaction