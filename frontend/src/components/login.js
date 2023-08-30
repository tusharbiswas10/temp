import React,{useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'


function Login() {

  const history=useHistory();

  useEffect(() => {
    if (localStorage.getItem('user-info')) {
      history.push('/profile');
    }
  }, [history]);

  return (
    <div>
        <h1>
         log
        </h1>
    </div>
  )
}

export default Login