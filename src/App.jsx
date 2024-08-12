import { RouterProvider } from 'react-router-dom'
 import router from './router'
import CustomerCare_SignIn from './pages/WhiteHouse/signIn/customerCare_signIn/CustomerCare_SignIn'
import CustomerCare_NavBar from './components/customerCare_Navbar/CustomerCare_NavBar'




function App() {
  
  return (
    <> 
      <RouterProvider router={router}/>
       {/* <CustomerCare_SignIn/> */}
       {/* <CustomerCare_NavBar/> */}
    </>
  )
}

export default App
