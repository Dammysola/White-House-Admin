import { RouterProvider } from 'react-router-dom'
import router from './router'
import Review_Query from './popUps/whitehouse/reviewQuery/Review_Query'
import ReAccess_Query from './popUps/whitehouse/reviewQuery/ReAccess_Query'
import Confirm_Pending from './popUps/whitehouse/pending_trash/Confirm_Pending'
import Confirm_Trash from './popUps/whitehouse/pending_trash/Confirm_Trash'
import Approve_Trash from './popUps/whitehouse/pending_trash/approve/Approve_Trash'
import Approve_Pending from './popUps/whitehouse/pending_trash/approve/Approve_Pending'
import NewAgent_Success from "./popUps/whitehouse/customerCare_detail/NewAgent_Success"
import PasswordReset_success from './popUps/whitehouse/customerCare_detail/PasswordReset_success'
import Suspended from './popUps/whitehouse/Suspend_Users/Suspended'
import Suspend_CC from './popUps/whitehouse/suspend/Suspend_CC'
import Suspend_Success from './popUps/whitehouse/suspend/Suspend_Success'
import Profile_Success from './popUps/whitehouse/profile/Profile_Success'
import Change_Password from './popUps/whitehouse/forgotPassword/changePassword/Change_Password'
import Confirm_Resolution from './popUps/whitehouse/resolution/Confirm_Resolution'
import Successful_Resolution from './popUps/whitehouse/resolution/successful_resolution/Successful_Resolution'
import Escalate_Query from './popUps/whitehouse/escalateQuery/Escalate_Query'
import Successful_escalation from './popUps/whitehouse/escalateQuery/Successful_escalation'


function App() {


  return (
    <>
      {/* <RouterProvider router={router} /> */}

      {/* <Successful_Resolution/> */}

      <Successful_escalation/>
    </>
  )
}

export default App
