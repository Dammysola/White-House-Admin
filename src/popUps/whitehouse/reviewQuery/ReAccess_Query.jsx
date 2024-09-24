import React from 'react'
import Style from "./Review_Query.module.css"


const ReAccess_Query = () => {
  return (
    <div id={Style.Query_mainDiv}>
    <div id={Style.Query_wrapperDiv}>
        <p>Reaccess this query?</p>
        <div id={Style.btnDiv}>
            <button>Yes</button>
            <button>Cancel</button>
        </div>
    </div>
</div>
  )
}

export default ReAccess_Query