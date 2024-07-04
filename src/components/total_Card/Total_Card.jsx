import React from 'react'
import Style from '../total_Card/Total_Card.module.css'



const Total_Card = (props) => {
  const { image1, image2, text, divText, price, div } = props
  return (
    <div>
      <div id={Style.Total_Card_Wrapper}>
        <div id={Style.Total_Card_firstLine_Div}>
          <div id={Style.Total_Card_firstLine_ImgDiv}>
              <img src={image1} alt="" />
            <div id={Style.Total_CardText}>{text}</div>
          </div>
          <div id={Style.Total_Card_imgDiv}>
            <div>
              {divText} <img src={image2} alt="" /> </div>
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