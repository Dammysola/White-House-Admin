import React from 'react'
import Style from '../total_Card/Total_Card.module.css'
import { Link } from 'react-router-dom'



const Total_Card = (props) => {
  const { image1, text, divText, price, to, isBlack, onClick } = props
  return (
    <div id={Style.Total_Card_mainDiv} onClick={onClick}>
      <div id={Style.Total_Card_Wrapper} style={{ backgroundColor: isBlack ? "#0E093C" : "#FFFFFF" }}>
        <div id={Style.Total_Card_firstLine_Div}>
          <div id={Style.Total_Card_firstLine_ImgDiv}>
            <img src={image1} alt="" />
            <div id={Style.Total_CardText} style={{ color: isBlack ? "#FFFFFF" : "#777777", }}>{text}</div>
          </div>
          <div id={Style.Total_Card_imgDiv} style={{ borderColor: isBlack ? "#ffffff" : "#0E093C", backgroundColor: isBlack ? "#FFFFFF" : "transparent" }}>
            <Link to={to}>
              <div>{divText}</div>
            </Link>
          </div>
        </div>
        <p style={{ color: isBlack ? "#FFFFFF" : "#0E093C", }}>
          {price}
        </p>
      </div>
    </div>
  )
}

export default Total_Card