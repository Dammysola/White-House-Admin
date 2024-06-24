import { RouterProvider } from 'react-router-dom'
 import router from './router'
import Payroll from './pages/staff/payroll/Payroll'

function App() {
 

  return (
    <> 
      <RouterProvider router={router}/>
      
      {/* <Payroll/> */}
    </>
  )
}

export default App
