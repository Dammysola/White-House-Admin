import React from 'react'
import Style from '../newAgent_Success/NewAgent_Success.module.css'
import copy from '../../../assets/svg/copy.svg'

const NewAgent_Success = () => {
  return (
    <div id={Style.NewAgent_Success_mainDiv}>
      <div id={Style.NewAgent_Success_wrapperDiv}>
        <p id={Style.NewAgent_Success_headerText}>Staff account created successfully</p>
        <div id={Style.NewAgent_Success_tablewrapperDiv}>
          <table>
            <tr>
              <td className={Style.detailsText}>Full Name</td>
              <td className={Style.detailsBold}>John Doe</td>
            </tr>
            < tr>
              <td className={Style.detailsText}>Email</td>
              <td className={Style.detailsBold}>Johndoe@gmail.com</td>
            </tr>
            <tr>
              <td className={Style.detailsText}>Password</td>
              <td className={Style.detailsBold}>KLM34Skmd</td>
            </tr>
          </table>
          <p id={Style.copyText}><img src={copy} alt="" /> Copy Details</p>
        </div>
      </div>
    </div>
  )
}

export default NewAgent_Success