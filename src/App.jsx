import { RouterProvider } from 'react-router-dom'
 import router from './router'
import Payroll from './pages/staff/payroll/Payroll'
import Move_to_bank from './popUps/move_to_bank/Move_to_bank'
import Ticket_Winners from './pages/transaction/winners/Ticket_Winners'
import Confirm_Suspension from './popUps/whitehouse/Suspend_Users/Confirm_Suspension'
import Suspended from './popUps/whitehouse/Suspend_Users/Suspended'
import Winner_loser from './pages/WhiteHouse/placeBet/winner/Winner_loser'
import Staff from './pages/WhiteHouse/staff/CustomerCare'
import All_Staff from './pages/WhiteHouse/staff/all_staff/All_Staff'
import Staff_Card from './pages/WhiteHouse/staff/all_staff/component/Staff_Card'

function App() {
 

  return (
    <> 
      {/* <RouterProvider router={router}/> */}
      {/* <All_Staff/> */}
      <Staff_Card/>
    </>
  )
}

export default App
