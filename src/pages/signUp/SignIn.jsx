import React, { useState } from 'react'
import Style from '../signUp/SignIn.module.css'
import Alpha_bet from '../../assets/svg/Alpha_Bet_Black_Logo.svg'
import Input from '../../components/SignUp_input/Input'
import image from '../../assets/svg/SignIn_Image.svg'
import Button from '../../components/button/Button'
import { Link } from 'react-router-dom'


const SignUp = () => {
  const [signIn, setSignIn] = useState({
    email: '',
    password: ''
  })

  const Details = (e)=>{
    const name = e.target.name
    const value = e.target.value

    setSignIn(
      (prev)=>({
        ...prev,
        [name]: value
      })
    )
  }

  const handleSubmit = (e) =>{
    e.preventDefault(e)
  }
  return (
    <div id={Style.SignIn_mainDiv}>
      <div id={Style.SignIn_formWrapper}>
        <div id={Style.SignIn_inputWrapper}>
          <div id={Style.TextDiv}>
            <img src={Alpha_bet} alt="" />
            <p>Sign in to your account</p>
          </div>

          <div>
            <form onSubmit={handleSubmit}>
              <div>
                <div id={Style.inputDiv}>
                  <Input
                    label={"Director Email/Username"}
                    placeholder={"account@email.com"}
                    type={"email"}
                    name={"email"}
                   value={signIn.email}
                  // error={validation.email}
                   OnChange={Details}
                  />
                  <Input
                    label={"Password"}
                    placeholder={"......."}
                    type={"password"}
                    name={"password"}
                   value={signIn.password}
                  // error={validation.email}
                   OnChange={Details}
                  />
                </div>
                <div id={Style.ButtonDiv}>
                  <Link to={'/create'}>
                  <Button
                    type={"submit"}
                    text={"Sign In"}
                    onSubmit ={handleSubmit} />
                  </Link>
                  
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div id={Style.SignUp_imageDiv}>
        <img src={image} alt="" />
      </div>
    </div>
  )
}

export default SignUp