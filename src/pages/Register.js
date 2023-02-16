import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Register() {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [cpassword, setcpassword] = useState('')
    async function register(){
        
        if(password===cpassword){
            const user={
                name,
                email,
                password,
                cpassword
            }
            try {
                const result=(await axios.post('/api/users/register',user)).data
                console.log(result)
                alert("user registration succeffuuly")
                setname("")
                setemail("")
                setpassword("")
                setcpassword("")
            } catch (error) {
                console.log("error")
                
            }
        }
        else{
            alert("password notmatched")
        }
    }

    return (
        <div>
            <div className='row justify-content-center mt-5'>
                <div className='col-md-5'>
                    <div className='bs'>
                        <h1>register page</h1>
                        <input type='text' className='form-control' placeholder='name' value={name} onChange={(e) => { setname(e.target.value) }}></input><br/>
                        <input type='text' className='form-control' placeholder='email' value={email} onChange={(e) => { setemail(e.target.value) }}></input><br/>
                        <input type='text' className='form-control' placeholder='password' value={password} onChange={(e) => { setpassword(e.target.value) }}></input><br/>
                        <input type='text' className='form-control' placeholder='confirm password' value={cpassword} onChange={(e) => { setcpassword(e.target.value) }}></input><br/>

                          <button className='btn btn-primary mt-3' onClick={register}> register</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Register

