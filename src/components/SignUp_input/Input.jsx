import React from 'react'
import Style from './Input.module.css'


const Input = (props) => {
  const { label, placeholder, type, value, name, OnChange, style } = props
  return (

    <div className={Style.InputDiv}>
      <input
        className={Style.input}
        placeholder={placeholder}
        type={type}
        value={value}
        name={name}
        onChange={OnChange}
      // style={{border: `${error ? "1px solid red" : "none"}`}}
      />
      <label className={Style.label}>{label}</label>
    </div>

  )
}

export default Input