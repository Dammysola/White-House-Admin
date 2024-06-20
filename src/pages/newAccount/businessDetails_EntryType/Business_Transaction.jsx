import React from 'react'
import Style from '../businessDetails_EntryType/Business_Details.module.css'
import business_logo from '../../../assets/svg/Business_Logo.svg'
import Button from '../../../components/button/Button'
import { Link } from 'react-router-dom'


const Business_Transaction = () => {
  return (
    <div>

      <div id={Style.BusinessDetails_form_MainDiv}>
        <div id={Style.BusinessDetails_LineDiv}>
          <div className={Style.BusinessDetails_Line} id={Style.line}></div>
          <div className={Style.BusinessDetails_Line} id={Style.line}></div>
          <div className={Style.BusinessDetails_Line} id={Style.line}></div>
          <div className={Style.BusinessDetails_Line}></div>
        </div>
        <div>
          <div id={Style.BusinessDetails_Logo_headerDiv}>
            <img src={business_logo} alt="" />
            <div>Business Details and Entity Type</div>
          </div>
          <form>
            <div id={Style.Select_OptionDiv}>
              <label>Transaction Type</label>
              <select name="" className={Style.Select_Option} >
                <option value="">Select Type</option>
                <option value="">Feb</option>
                <option value="">Mar</option>
                <option value="">Apr</option>
                <option value="">May</option>
                <option value="">Jun</option>
                <option value="">Jul</option>
              </select>
              <label>Estimated Volume</label>
              <select name="" id='' className={Style.Select_Option}>
                <option value="">Select Volume</option>
                <option value="">Jan</option>
                <option value="">Feb</option>
                <option value="">Mar</option>
                <option value="">Apr</option>
                <option value="">May</option>
                <option value="">Jun</option>
                <option value="">Jul</option>
              </select>
              <label>Estimateed Value</label>
              <select name="" id='' className={Style.Select_Option}>
                <option value="">Estimated Value</option>
                <option value="">Jan</option>
                <option value="">Feb</option>
                <option value="">Mar</option>
                <option value="">Apr</option>
                <option value="">May</option>
                <option value="">Jun</option>
                <option value="">Jul</option>
              </select>
            </div>
            <div id={Style.BtnDiv}>
              <button id={Style.Cancel_Btn}>Cancel</button>

              <Link to={'/directorDetails'}>
                <Button
                  type={"submit"}
                  text={"Proceed"} />
              </Link>

            </div>
          </form>
        </div>
      </div>
    </div>
  )
}



export default Business_Transaction