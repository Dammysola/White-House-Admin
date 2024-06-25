import { RouterProvider } from 'react-router-dom'
 import router from './router'
import Payroll from './pages/staff/payroll/Payroll'
import Move_to_bank from './popUps/move_to_bank/Move_to_bank'

function App() {
 

  return (
    <> 
      <RouterProvider router={router}/>

      {/* <Move_to_bank/> */}
      
      {/* <Payroll/> */}
    </>
  )
}

export default App
