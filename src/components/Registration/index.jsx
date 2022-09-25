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
        
        if (heslo === hesloConf) {
            alert(`Vítejte ${user.username}! Registrace proběhla dobře a váš účet je založen.`)
            console.log(user)
        } else {
            alert("Zadaná hesla se neschodují")
        }
    }
    
    const [subEmail,setSubEmail] = useState("")
    const handleEmail = (email) => {
        setSubEmail(email.substring(0, email.indexOf("@")))
        setUser({...user, username: subEmail, email: email })
    }

    const handleUserName = (uName) => {
        if (uName !== "") {
            setUser({...user, username: uName})
        }

    }

    const [heslo, setHeslo] = useState()
    const [hesloConf, setHesloConf] = useState()

    const handlePassword = (pass) => {
        setUser({...user, password: pass })  
        setHeslo(pass) 
    }

    const handlePasswordConfirm = (passConf) => {
        setUser({...user, passwordConfirm: passConf })
        setHesloConf(passConf) 
    }

    return (
    <>
      <h1>REGISTRATION</h1>
      <form onSubmit={handleSubmit}>
        <div id="outer-circle">
            <div id="inner-circle"></div>
        </div>
        <input type='email' placeholder='Email' className='email' autoFocus onChange={(e)=>handleEmail(e.target.value)}></input>
        <input type='text' placeholder={subEmail==="" ? 'User Name':subEmail} className='name'onChange={(e)=> handleUserName(e.target.value)}></input>
        <input type='password' placeholder='Password' className='password' onChange={(e) => handlePassword(e.target.value)}></input>
        <input type='password' placeholder='Password Confirm' className='confirmPassword' onChange={(e) => handlePasswordConfirm(e.target.value)}></input>
        <button>REGISTER</button>
      </form>
    </>
    )
}