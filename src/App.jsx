import { RouterProvider } from 'react-router-dom'
import router from './router'
import Testing from './components/Testing'



function App() {


  return (
    <>
      <RouterProvider router={router} />

      {/* <Testing/> */}
{/*       
      <Performance_Popup/> */}

    </>
  )
}

export default App
