import React, { useState } from "react";
import './style.css'

export const Registration = () => {
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        passwordConfirm: '',
     })

     const handleSubmit = (e) => {
        e.preventDefault()
        alert("registrace proběhla")
     }
     const handleEmail = () => {
    }
         
    return (
    <>
      <h1>REGISTRATION</h1>
      <form onSubmit={handleSubmit}>
        <div id="outer-circle">
            <div id="inner-circle"></div>
        </div>
        <input type='email' placeholder='Email' className='email' autoFocus onChange={(e)=>handleEmail(e.target.value)}></input>
        <input type='text' placeholder='User Name'className='name'></input>
        <input type='password' placeholder='Password' className='password'></input>
        <input type='password' placeholder='Password Confirm' className='confirmPassword'></input>
        <button>REGISTER</button>
      </form>
    </>
    )
}