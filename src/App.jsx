import { RouterProvider } from 'react-router-dom'
 import router from './router'
import Revenue from './pages/WhiteHouse/revenue/Revenue'
import Logged_sessions from './pages/WhiteHouse/logged_session/Logged_sessions'
import Conversation from './pages/WhiteHouse/conversation/Conversation'



function App() {
  
  return (
    <> 
      <RouterProvider router={router}/>
    </>
  )
}

export default App
