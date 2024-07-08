import Style from '../create_Product/Create_Product.module.css'
import cancel from '../../assets/svg/cancel_img.svg'
import InputField from '../../components/input/InputField'
import Button from '../../components/button/Button'
import Select_field from '../../components/select_field/Select_field'
import { Link } from 'react-router-dom'
import { PopupContextHook } from '../../PopupContext '




const Create_Product = () => {
    const { updateProductConfirmPopup, updateCreateProductsPopup} = PopupContextHook()

    const confirmation = ()=>{
        updateProductConfirmPopup(true)
    }


    return (
        <div id={Style.Create_Product_mainDiv}>
            <div id={Style.Create_Product_WrapperDiv}>
                <div id={Style.cancelDiv}>
                    <div></div>
                    <img onClick={()=>updateCreateProductsPopup(false)} src={cancel} alt="" />
                </div>


                <div id={Style.Create_Product_Wrapper}>
                    <div id={Style.Create_Product_Text}>Create Product</div>
                    <form>
                        <div id={Style.Create_Product_inputDiv}>
                            <p></p>
                            <InputField
                                label={"Product Name"}
                                placeholder={"Product Name"}
                                type={"text"}
                                // value={ }
                                // name={ "productName"}
                                OnChange />
                            <Select_field
                                label={"Wallet Number"}
                                option={"Select Wallet Number"} />

                            <Select_field
                                label={"Settlement Account"}
                                option={"Select Account"} />

                            <Select_field
                                label={"Product Type"}
                                option={"Select Product Type"} />

                            <InputField
                                label={"Price (Optional)"}
                                placeholder={"Amount"}
                                type={"text"}
                                // value={ }
                                // name={ "productName"}
                                OnChange />

                            <Select_field
                                label={"Product Category"}
                                option={"Select Category"} />

                            <Select_field
                                label={"Display For"}
                                option={"Select Product"} />

                            <InputField
                                label={"Success Callback URL"}
                                placeholder={"URL"}
                                type={"text"}
                                // value={ }
                                // name={ "productName"}
                                OnChange />
                        </div>
                    </form>

                    <div id={Style.BtnDiv}>
                        {/* <Link to={'/confirmation'}> */}
                            <Button
                                type={"submit"}
                                text={"Create Product"}
                                onClick = {confirmation}
                            />
                        {/* </Link> */}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Create_Product