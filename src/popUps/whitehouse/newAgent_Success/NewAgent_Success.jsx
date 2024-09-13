import React from 'react'
import Style from '../newAgent_Success/NewAgent_Success.module.css'
import copy from '../../../assets/svg/copy.svg'
import success from '../../../assets/svg/success_icon.svg'





const NewAgent_Success = () => {
  return (
    <div id={Style.NewAgent_Success_mainDiv}>
      <div id={Style.NewAgent_Success_wrapperDiv}>
        <img id={Style.success_img} src={success} alt="" />
        <p id={Style.NewAgent_Success_headerText}>Staff account created successfully</p>

        <div id={Style.NewAgent_Success_tablewrapperDiv}>
          <table>

              <th>
                <tr>
                  <th></th>
                  <th></th>
                </tr>            
              </th>
            <tbody>

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
            </tbody>
          </table>
          <p id={Style.copyText}><img src={copy} alt="" /> Copy Details</p>
        </div>
      </div>
    </div>
  )
}

export default NewAgent_Success