import { RouterProvider } from 'react-router-dom'
 import router from './router'
import Payroll from './pages/staff/payroll/Payroll'
import Move_to_bank from './popUps/move_to_bank/Move_to_bank'
import Ticket_Winners from './pages/transaction/winners/Ticket_Winners'

function App() {
 

  return (
    <> 
      <RouterProvider router={router}/>

      {/* <Move_to_bank/> */}
      
      {/* <Payroll/> */}
      {/* <Ticket_Winners/> */}
    </>
  )
}

export default App
