import React from 'react'




const Payroll_Setup = () => {
    return (
        <div id={Style.Payroll_Setup_mainDiv}>
            <div id={Style.Payroll_Setup_WrapperDiv}>
                <div id={Style.cancelDiv}>
                    <div></div>
                    <button onClick={cancel}><img src={cancel_img} alt="" /></button>
                </div>
                <div id={Style.Payroll_Setup_Wrapper}>
                    <div id={Style.Payroll_Setup_header}><img src={back_arrow} alt="" />Confirmation</div>

                    <div id={Style.Payroll_Setup_TextDiv}>
                        <p>Are you sure you want to delete this product?</p>
                        <div id={Style.BtnDiv}>
                            <button id={Style.discard_Btn}>Discard</button>

                            <Button
                                text={"Delete Product"}
                                type={"submit"}
                            />


                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Payroll_Setup