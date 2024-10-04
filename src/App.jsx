import { RouterProvider } from 'react-router-dom'
import router from './router'
import Testing from './components/Testing'
import Date_Picker from './components/date_picker/Date_Picker'



function App() {


  return (
    <>
      <RouterProvider router={router} />


    {/* <Date_Picker/> */}
    
      {/* <Testing/> */}
{/*       
      <Performance_Popup/> */}

    </>
  )
}

export default App
