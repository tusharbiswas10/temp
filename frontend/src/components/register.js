import React,{useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
function Register() {

  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');
  const [password, setPassword] = useState('');
  const [emailAvailable, setEmailAvailable] = useState(true); // State to track email availability
  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem('user-info')) {
      history.push('/profile');
    }
  }, [history]);

  // Function to check email availability
  async function checkEmailAvailability(email) {
    try {
      const response = await fetch(`http://localhost:8000/api/check-email?email=${email}`);
      const data = await response.json();
      return data.available;
    } catch (error) {
      console.error('Error checking email availability:', error);
      return false;
    }
  }

  // Function to handle registration
  async function signUp() {
    const isEmailAvailable = await checkEmailAvailability(email);

    if (!isEmailAvailable) {
      alert('Email is already registered. Please use a different email.');
      return;
    }

    const item = { firstName, lastName, address, phone, email, birthday, password };

    try {
      let result = await fetch('http://localhost:8000/api/register', {
        method: 'POST',
        body: JSON.stringify(item),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });

      result = await result.json();
      localStorage.setItem('user-info', JSON.stringify(result));

      if (email === 'admin@localhost.local' && password === 'admin') {
        history.push('/admin');
      } else {
        history.push('/profile');
      }
    } catch (error) {
      console.error('Error registering user:', error);
    }
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
        <input
        type="text"
        value={email}
        onChange={async (e) => {
          setEmail(e.target.value);
          const isAvailable = await checkEmailAvailability(e.target.value);
          setEmailAvailable(isAvailable);
        }}
        className={`form-control ${!emailAvailable ? 'is-invalid' : ''}`}
        placeholder="Email"
      />
      {!emailAvailable && (
        <div className="invalid-feedback">Email is already registered. Please use a different email.</div>
      )}
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