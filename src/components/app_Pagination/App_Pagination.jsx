import { Box, Pagination } from '@mui/material'
import React from 'react'
// import Style from '../app_Pagination/App_Pagination.module.css'
import '../app_Pagination/App_Pagination.css'




const App_Pagination = ({totalPosts, postsPerPage}) => {

  let pages = []

  for(let i = 1; i<= Math.ceil(totalPosts/postsPerPage); i++){
    pages.push(i)
  }
  return (
    
    <div id="App_Pagination_mainDiv">
        <Box color={"#0095FF"}
    // sx={{
    //     margin: "1.25rem 0"
    // }}
    >
        {/* <h1>Pagination</h1> */}
        <Pagination 
        count={10}
        ></Pagination>
    </Box>
    </div>
  )
}

export default App_Pagination