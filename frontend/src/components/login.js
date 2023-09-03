import React,{useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'


function Login() {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const history=useHistory();

  useEffect(() => {
    if (localStorage.getItem('user-info')) {
      history.push('/profile');
    }
  }, []);

async function login(){
    
    let item={email, password}
    let result = await fetch("http://localhost:8000/api/login",{
      method:"POST",
      headers:{
        "Content-Type":'application/json',
        "Accept":'application/json'
      },
      body:JSON.stringify(item)
    })

    result = await result.json()
    // Check if the user is trying to log in as an admin
  if (email === "admin@localhost.local" && password === "admin") {
    localStorage.setItem("user-info", JSON.stringify(result));
    history.push("/admin"); // Redirect to admin page
  } else {
    localStorage.setItem("user-info", JSON.stringify(result));
    history.push("/profile"); // Redirect to profile page
  }
    //localStorage.setItem("user-info", JSON.stringify(result))
    //history.push("/profile")
    
  }

  return (
    <div className='col-sm-6 offset-sm-3'>
      <h1>Login Panel</h1>
      <br/>
      <input type='text' onChange={(e)=>setEmail(e.target.value)} className='form-control' placeholder='Email'/>
      <br/>
      <input type='text' onChange={(e)=>setPassword(e.target.value)} className='form-control' placeholder='Password'/>
      <br/>
      <button onClick={login} className='btn btn-primary'>Login</button>
    </div>
  )
}

export default Login