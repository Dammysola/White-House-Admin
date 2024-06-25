import React from 'react'
import Style from '../move_to_bank/Move_to_bank.module.css'
import cancel from '../../assets/svg/cancel_img.svg'
import Select_field from '../../components/select_field/Select_field'
import InputField from '../../components/input/InputField'
import Button from '../../components/button/Button'


const Move_to_bank = () => {
  return (
    <div id={Style.Create_Product_mainDiv}>
    <div id={Style.Create_Product_WrapperDiv}>
        <div id={Style.cancelDiv}>
            <div></div>
            <img src={cancel} alt="" />
        </div>


        <div id={Style.Create_Product_Wrapper}>
            <div id={Style.Create_Product_Text}>Move to Bank</div>
            <form>
                <div id={Style.Create_Product_inputDiv}>
                    <p></p>
                   
                    <Select_field
                        label={"Recipient Country"}
                        option={"Select Country"} />

                    <Select_field
                        label={"Account Type"}
                        option={"Select Account Type"} />

                    <InputField
                        label={"Amount"}
                        placeholder={"Amount"}
                        type={"text"}
                        // value={ }
                        // name={ "productName"}
                        OnChange />

                    <InputField
                        label={"Description"}
                        placeholder={"Description"}
                        type={"text"}
                        // value={ }
                        // name={ "productName"}
                        OnChange />
                </div>
                <div id={Style.BtnDiv}>
                {/* <Link to={'/confirmation'}> */}
                    <Button
                        type={"submit"}
                        text={"Move to Bank"}
                        // onClick = {confirmation}
                    />
                {/* </Link> */}
            </div>
            </form>

            

        </div>
    </div>
</div>
  )
}

export default Move_to_bank