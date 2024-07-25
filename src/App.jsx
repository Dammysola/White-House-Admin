import { RouterProvider } from 'react-router-dom'
 import router from './router'
import Revenue from './pages/WhiteHouse/revenue/Revenue'
import Logged_sessions from './pages/WhiteHouse/logged_session/Logged_sessions'
import Conversation from './pages/WhiteHouse/conversation/Conversation'
import { Pagination } from '@mui/material'
import Stats_Card from './components/stats_card/Stats_Card'




function App() {
  
  return (
    <> 
      <RouterProvider router={router}/>
      {/* <Stats_Card/> */}
    </>
  )
}

export default App
