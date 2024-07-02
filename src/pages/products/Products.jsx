import React from 'react'
import Style from '../products/Products.module.css'
import plus_blue from '../../assets/svg/Plus_blue.svg'
import plus_white from '../../assets/svg/plus_white.svg'
import filter_img from '../../assets/svg/Complete_filter_img.svg'
import download from '../../assets/svg/download_img.svg'
import No_Documents from '../../assets/svg/NoDocuments_img.svg'
import Search from '../../assets/svg/Search.svg'
import { PopupContextHook } from '../../PopupContext '
import InputField from '../../components/input/InputField'


const Products = () => {
    const { updateAddProductsPopup, updateCreateProductsPopup } = PopupContextHook()

    const addProduct = () => {
        updateAddProductsPopup(true)
    }
    const createProduct = () => {
        updateCreateProductsPopup(true)
    }

    let arr = [];
    return (
        <div id={Style.ProductsMainDiv}>

            <div id={Style.ProductsTextDiv}>
                <div>
                    <div id={Style.homeText}><span>Home</span>{'>'}Products</div>
                    <p>Products</p>
                    <div id={Style.list_of_AccountText}>Here’s a list of all your Products on AlphaBet</div>
                </div>
                <div id={Style.Products_additionDiv}>
                    <button id={Style.Products_CreateProductDiv} onClick={createProduct}><img src={plus_blue} alt="" />Create Product</button>
                    <button id={Style.Products_AddproductDiv} onClick={addProduct}><img src={plus_white} alt="" /> Add Product Category</button>
                </div>
            </div>

            <div id={Style.Products_mainDiv}>
                <div id={Style.Products_wrapperDiv}>
                    <div id={Style.ProductsDiv}>
                        <div id={Style.ProductsText}>All Products</div>
                        <div id={Style.input_FilterDiv}>
                            <div id={Style.searchDiv}>
                                <img src={Search} alt="" />
                                {/* <input type="text" /> */}
                                <InputField/>
                            </div>

                            <img src={filter_img} alt="" />
                            <img src={download} alt="" />
                        </div>

                    </div>

                    <table>
                        <tr id={Style.headerTable}>
                            <th><input type="checkbox" name="" id="" /></th>
                            <th>S/N</th>
                            <th>Product Name</th>
                            <th>Wallet Type</th>
                            <th>Bank Details</th>
                            <th id={Style.priceText}>Price</th>
                            <th>Action</th>
                        </tr>
                        {/* <tr>
                            <td><input type="checkbox" name="" id="" /></td>
                            <td>1</td>
                            <td>My Product 1</td>
                            <td>Current</td>
                            <td>789756442423</td>
                            <td></td>
                            <td>
                                <div id={Style.action_field}>
                                    <img src={product_edit} alt="" />
                                    <img src={product_delete} alt="" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" name="" id="" /></td>
                            <td>1</td>
                            <td>My Product 1</td>
                            <td>Current</td>
                            <td>789756442423</td>
                            <td></td>
                            <td>
                                <div id={Style.action_field}>
                                    <img src={product_edit} alt="" />
                                    <img src={product_delete} alt="" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th><input type="checkbox" name="" id="" /></th>
                            <td>1</td>
                            <td>My Product 1</td>
                            <td>Current</td>
                            <td>789756442423</td>
                            <td></td>
                            <td>
                                <div id={Style.action_field}>
                                    <img src={product_edit} alt="" />
                                    <img src={product_delete} alt="" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" name="" id="" /></td>
                            <td>1</td>
                            <td>My Product 1</td>
                            <td>Current</td>
                            <td>789756442423</td>
                            <td></td>
                            <td>
                                <div id={Style.action_field}>
                                    <img src={product_edit} alt="" />
                                    <img src={product_delete} alt="" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" name="" id="" /></td>
                            <td>1</td>
                            <td>My Product 1</td>
                            <td>Current</td>
                            <td>789756442423</td>
                            <td></td>
                            <td>
                                <div id={Style.action_field}>
                                    <img src={product_edit} alt="" />
                                    <img src={product_delete} alt="" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" name="" id="" /></td>
                            <td>1</td>
                            <td>My Product 1</td>
                            <td>Current</td>
                            <td>789756442423</td>
                            <td></td>
                            <td>
                                <div id={Style.action_field}>
                                    <img src={product_edit} alt="" />
                                    <img src={product_delete} alt="" />
                                </div>
                            </td>
                        </tr>
                        <tr id= {Style. last_Table_Line}>
                            <td><input type="checkbox" name="" id="" /></td>
                            <td>1</td>
                            <td>My Product 1</td>
                            <td>Current</td>
                            <td>789756442423</td>
                            <td></td>
                            <td>
                                <div id={Style.action_field}>
                                    <img src={product_edit} alt="" />
                                    <img src={product_delete} alt="" />
                                </div>
                            </td>
                        </tr> */}
                    </table>
                    {
                        arr.length == 0 ?
                            <div id={Style.No_Account_DisplayDiv}>
                                <img src={No_Documents} alt="" />
                                <p>No Product Found!</p>
                                <div>You currently do not have any product. Click on the ‘Create Product’ button to get started</div>
                            </div> :
                            <>It's Plenty</>
                    }
                </div>
            </div>
        </div>
    )
}

export default Products