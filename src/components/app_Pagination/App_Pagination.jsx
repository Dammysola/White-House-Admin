import React from 'react'
import '../app_Pagination/App_Pagination.css'




const App_Pagination = ({postsPerPage, totalPosts, paginate}) => {

  let pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  }
  return (

    <div id="Style2">
      {/* <ul> */}
        {pageNumbers.map(number =>(
          <button key={number}>
            <a onClick={()=>paginate(number)} href="!#">{number}</a>
            
          </button>
        ))}
      {/* </ul> */}
    </div>
  )
}

export default App_Pagination