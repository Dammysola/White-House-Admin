import { createContext, useContext, useState } from "react"

export const myContext = createContext()

export const PopupContextHook = ()=> useContext(myContext)


const PopupContext  = ({ children }) => {

    const [addAccountsPopup, setAddAccountsPopup] = useState(false)
    const [addProductsPopup, setAddProductsPopup] = useState(false)
    const [addSettlementPopup, setAddSettlementPopup] = useState(false)
    const [createProductsPopup, setCreateProductsPopup] = useState(false)
    const [productConfirmPopup, setProductConfirmPopup] = useState(false)
    const [deleteProductsPopup, setDeleteProductsPopup] = useState(false)
    const [successAccountPopup, setsuccessAccountPopup] = useState(false)
    const [successProductPopup, setsuccessProductPopup] = useState(false)


    const updateAdd_AccountPopup = (data)=>{
        setAddAccountsPopup(data)
    }
    const updateAddProductsPopup = (data)=>{
        setAddProductsPopup(data)
    }
    const updateAdd_SettlementPopup = (data)=>{
        setAddSettlementPopup(data)
    }
    const updateCreateProductsPopup = (data)=>{
        setCreateProductsPopup(data)
    } 
    const updateProductConfirmPopup = (data)=>{
        setProductConfirmPopup(data)
    }
    const updateDeleteProductsPopup = (data)=>{
        setDeleteProductsPopup(data)
    }
    const updateSuccessAccountPopup = (data)=>{
        setsuccessAccountPopup(data)
    }

    const updateSuccessProductPopup = (data)=>{
        setsuccessProductPopup(data)
    }

  return (
    <myContext.Provider value={{
        addAccountsPopup,
        updateAdd_AccountPopup,
        addProductsPopup,
        updateAddProductsPopup,
        addSettlementPopup,
        updateAdd_SettlementPopup,
        createProductsPopup,
        updateCreateProductsPopup,
        productConfirmPopup,
        updateProductConfirmPopup,
        deleteProductsPopup,
        updateDeleteProductsPopup,
        successAccountPopup,
        updateSuccessAccountPopup,
        successProductPopup,
        updateSuccessProductPopup

    }}>
        { children }
    </myContext.Provider>
  )
}

export default PopupContext 