import React from 'react'
import Style from '../add_Settlement/Add_Settlement.module.css'
import back_arrow from '../../assets/svg/black_arrow_back.svg'
import Select_field from '../../components/select_field/Select_field'
import blue_icon from '../../assets/svg/blue_icon.svg'
import InputField from '../../components/input/InputField'
import Button from '../../components/button/Button'
import { Link } from 'react-router-dom'


const Add_Settlement = () => {
    
    return (
        <div id={Style.Add_Settlement_mainDiv}>
            <div id={Style.Add_Settlement_WrapperDiv}>

                <div id={Style.Add_Settlement_Wrapper}>
                    <div id={Style.Add_Settlement_header}><img src={back_arrow} alt="" />Add Settlement</div>
                </div>

                <form>
                    <div id={Style.Add_Settlement_inputDiv}>
                        <div>
                            <Select_field
                            label={"Bank"}
                            option={"Select Bank"} />
                        <div id={Style.warningDiv}><img src={blue_icon} alt="" /> Your bank not listed? Click <span>here</span> to enter details manually</div>

                        </div>
                        
                        <InputField
                            label={"Account Number"}
                            type={"tel"}
                            // placeholder={"Account No"}
                            // name = {}
                            // value = {}
                        />

                    </div>

                    <div id={Style.btnDiv}>
                       <Link to={'/dashboard'}>
                       <button id={Style.btn1}>Go Back</button>
                       </Link>
                        <Button
                            text={"Validate"} />

                    </div>
                </form>

            </div>
        </div>
    )
}

export default Add_Settlement