import React, { useState, useEffect } from 'react'
import axios from 'axios'


 function Loginpage() {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  async function Login() {


    const user = {
      email,
      password

    }
    try {
      const result=( await axios.post('/api/users/login',user)).data
      localStorage.setItem('currentUser',JSON.stringify(result));
      window.location.href='/home'
      
    } catch (error) {
      
      console.log(error)
    }
    console.log(user)
    


  }

  return (
    <div>
      <div className='row justify-content-center mt-5'>
        <div className='col-md-5'>
          <div className='bs'>
            <h1>Login page</h1>
            <input type='text' className='form-control' placeholder='email' value={email} onChange={(e) => { setemail(e.target.value) }}></input><br/>
            <input type='text' className='form-control' placeholder='password' value={password} onChange={(e) => { setpassword(e.target.value) }}></input>

            <button className='btn btn-primary mt-3' onClick={Login}> Login</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Loginpage

