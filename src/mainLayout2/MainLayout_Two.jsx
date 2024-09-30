import React from 'react'
import Style from '../mainLayout2/MainLayout_Two.module.css'
import { Outlet, useLocation } from 'react-router-dom'
// import { PopupContextHook } from '../PopupContext '
import NavBar from '../components/navBar/NavBar'
import Filter_Options from '../popUps/whitehouse/filter/Filter_Options'
import { PopupContextHook } from '../WhiteHouse_PopupContext'
import Performance_Details from '../pages/WhiteHouse/customerCare/performance/performance_details/Performance_Details'
import Revenue_Details from '../pages/WhiteHouse/admin/foot_soldiers/revenue_details/Revenue_Details'
import ForgotPassword from '../popUps/whitehouse/forgotPassword/ForgotPassword'
import Performance_Popup from '../popUps/whitehouse/performance/Performance_Popup'
import Online_PlayersCount from '../pages/WhiteHouse/admin/placeBet/totalOnline_players/online_playersCount/Online_PlayersCount'
import Profile_Success from "../popUps/whitehouse/profile/Profile_Success"
import ReAccess_Query from "../popUps/whitehouse/reviewQuery/ReAccess_Query"
import Confirm_Pending from "../popUps/whitehouse/pending_trash/Confirm_Pending"
import Confirm_Trash from "../popUps/whitehouse/pending_trash/Confirm_Trash"
import Approve_Pending from '../popUps/whitehouse/pending_trash/approve/Approve_Pending'
import Approve_Trash from '../popUps/whitehouse/pending_trash/approve/Approve_Trash'
import NewAgent_Success from '../popUps/whitehouse/customerCare_signUp/NewAgent_Success'






const MainLayout_Two = () => {

 const location = useLocation();
  const showNavbar = location.pathname !== '/';

  const {revenuePopup, passwordPopup, onlineCountPopup, profilePopup, reAccessPopup, confirmPendingPopup, approvePendingPopup, approveTrashPopup, confirmTrashPopup, signUpPopup} = PopupContextHook()



  
  return (

    <div id={Style.wrapper}>

      {showNavbar && <NavBar/>}

      {revenuePopup && <Revenue_Details/>}

      {passwordPopup && <ForgotPassword/>}

      {onlineCountPopup && <Online_PlayersCount/>}

      {profilePopup && <Profile_Success/>}

      {reAccessPopup && <ReAccess_Query/>}

      {confirmPendingPopup && <Confirm_Pending/>}

      {approvePendingPopup && <Approve_Pending/>}

      {confirmTrashPopup && <Confirm_Trash/>}

      {approveTrashPopup &&  <Approve_Trash/>}

      {signUpPopup && <NewAgent_Success/>}
      


      <div><Outlet/></div>
    </div>
  )
}

export default MainLayout_Two