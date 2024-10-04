import React, { useState } from 'react'
// import '../app_Pagination/App_Pagination.css'
import Style from ".//App_Pagination.module.css"
import arrow_left from "../../assets/svg/arrow_up.svg"
import arrow_right from "../../assets/svg/arrow_down2.svg"



const App_Pagination = ({ postsPerPage, totalPosts, paginate, back }) => {

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  // Generate page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // Handle pagination with arrows
  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      paginate(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      paginate(currentPage + 1);
    }
  };

  return (

    <div id={Style.App_Pagination_mainDiv}>

      <div id={Style.pagination_Div}>

        {/* Previous Arrow */}
        <button onClick={handlePrevious} disabled={currentPage === 1} >
          <img src={arrow_left} alt="Previous" />
        </button>

        {/* Page Numbers */}
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => {
              setCurrentPage(number);
              paginate(number);
            }}
            style={{
              backgroundColor: currentPage === number ? "#0E093C" : "transparent",
              color: currentPage === number ? "#FFFFFF" : "#000000",
              // margin: "0 5px"
            }}
          >
            {number}
          </button>
        ))}

        {/* Next Arrow */}
        <button onClick={handleNext} disabled={currentPage === totalPages} >
          <img src={arrow_right} alt="Next" />
        </button>

      </div>

      {/* Display 1 of X */}
      <div className="pagination-info" style={{ color: "#000000" }}>

        Page {currentPage} of {totalPages}
      </div>
    </div>
  )
}




export default App_Pagination