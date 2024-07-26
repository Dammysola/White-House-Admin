import { createContext, useContext, useState } from "react";

export const myContext = createContext()

export const PopupContextHook = ()=> useContext(myContext)




const WhiteHouse_PopupContext = ({children}) => {

    const [filterPopup, setFilterPopup] = useState(false)

    const updateFilterPopup = (data)=>{
        setFilterPopup(data)
    }
  return (
    <myContext.Provider value={{
        filterPopup,
        updateFilterPopup
    }}>
        {children}
    </myContext.Provider>
  )
}

export default WhiteHouse_PopupContext