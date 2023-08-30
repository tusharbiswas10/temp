import React,{useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
function Register() {

  

  const [firstName,setFirstName]=useState("")
  const [lastName,setLastName]=useState("")
  const [address,setAddress]=useState("")
  const [phone,setPhone]=useState("")
  const [email,setEmail]=useState("")
  const [birthday,setBirthday]=useState("")
  const [password,setPassword]=useState("")
  const history=useHistory();

  useEffect(() => {
    if (localStorage.getItem('user-info')) {
      history.push('/profile');
    }
  }, [history]);

  async function signUp(){
    let item={firstName, lastName,address, phone, email, birthday, password}
    console.warn(item)
    let result = await fetch("http://localhost:8000/api/register",{
      method:"POST",
      body:JSON.stringify(item),
      headers:{
        "Content-Type":'application/json',
        "Accept":'application/json'
      }
    })

    result = await result.json()
    localStorage.setItem("user-info", JSON.stringify(result))
    history.push("/profile")


  
  }

  return (
    <div className='col-sm-6 offset-sm-3'>
        <h1>Registration Panel</h1>
        <input type='text' value={firstName} onChange={(e)=>setFirstName(e.target.value)} className='form-control' placeholder='First Name'/>
        <br/>
        <input type='text' value={lastName} onChange={(e)=>setLastName(e.target.value)} className='form-control' placeholder='Last Name'/>
        <br/>
        <input type='text' value={address} onChange={(e)=>setAddress(e.target.value)} className='form-control' placeholder='Address'/>
        <br/>
        <input type='text' value={phone} onChange={(e)=>setPhone(e.target.value)} className='form-control' placeholder='Phone'/>
        <br/>
        <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)} className='form-control' placeholder='Email'/>
        <br/>
        <input type='text' value={birthday} onChange={(e)=>setBirthday(e.target.value)} className='form-control' placeholder='Birthday'/>
        <br/>
        <input type='text' value={password} onChange={(e)=>setPassword(e.target.value)} className='form-control' placeholder='Password'/>
        <br/>
        <button onClick={signUp} className='btn btn-primary'>Register</button>
    </div>
  )
}

export default Register