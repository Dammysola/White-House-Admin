import { RouterProvider } from 'react-router-dom'
import router from './router'
import Testing from './components/Testing'
import Date_Picker from './components/date_picker/Date_Picker'
import Month_Picker from './components/month_picker/Month_Picker'



function App() {


  return (
    <>
      <RouterProvider router={router} />

        {/* <Month_Picker/> */}

    {/* <Date_Picker/> */}
    
      {/* <Testing/> */}
{/*       
      <Performance_Popup/> */}

    </>
  )
}

export default App
