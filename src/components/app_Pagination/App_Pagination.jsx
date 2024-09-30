import React from 'react'
import '../app_Pagination/App_Pagination.css'




const App_Pagination = ({postsPerPage, totalPosts, paginate}) => {

  let pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  }
  return (

    <div id="Style2">
        {pageNumbers.map(number =>(
          <button key={number} 
          // style={{backgroundColor: number ? "#000" : "transparent", color: paginate ? "#FFFFFF" : ""}}
          >
            <p onClick={()=>paginate(number)} >{number}</p>
            
          </button>
        ))}
    </div>
  )
}

export default App_Pagination