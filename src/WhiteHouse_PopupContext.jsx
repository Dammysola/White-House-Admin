import { createContext, useContext, useState } from "react"

export const myContext = createContext()

export const PopupContextHook = ()=> useContext(myContext)




const WhiteHouse_PopupContext = ({children}) => {

    const [filterPopup, setFilterPopup] = useState(false)
    const [revenuePopup, setRevenuePopup] = useState(false)
    const [passwordPopup, setPasswordPopup] = useState(false)

    const updateFilterPopup = (data)=>{
        setFilterPopup(data)
    }

        const updateRevenuePopup = (data)=>{
        setRevenuePopup(data)
    }

    const updatePasswordPopup = (data)=>{
        setPasswordPopup(data)
    }


  return (
    <myContext.Provider value={{
        filterPopup,
        updateFilterPopup,
        revenuePopup,
        updateRevenuePopup,
        passwordPopup,
        updatePasswordPopup
    }}>
        {children}
    </myContext.Provider>
  )
}

export default WhiteHouse_PopupContext