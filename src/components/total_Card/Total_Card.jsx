import React from 'react'
import Style from '../total_Card/Total_Card.module.css'
import { Link } from 'react-router-dom'



const Total_Card = (props) => {
  const { image1, text, divText, price, link } = props
  return (
    <div>
      <div id={Style.Total_Card_Wrapper}>
        <div id={Style.Total_Card_firstLine_Div}>
          <div id={Style.Total_Card_firstLine_ImgDiv}>
            <img src={image1} alt="" />
            <div id={Style.Total_CardText}>{text}</div>
          </div>
          <div id={Style.Total_Card_imgDiv}>
           <Link to={'/allStaffs'}>
           <div>
              {divText}
            </div>
           </Link>
          </div>
        </div>
        <div id={Style.Total_Card_line}></div>
        <p>
          {price}
        </p>
      </div>
    </div>
  )
}

export default Total_Card