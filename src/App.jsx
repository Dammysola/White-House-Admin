import { RouterProvider } from 'react-router-dom'
import router from './router'
import NewAgent_Success from './popUps/whitehouse/newAgent_Success/NewAgent_Success'



function App() {


  return (
    <>
      {/* <RouterProvider router={router} /> */}
      <NewAgent_Success/>

    </>
  )
}

export default App
