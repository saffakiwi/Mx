import React from 'react';
import Button from '@material-ui/core/Button';
import LoginButton from './LoginButton.js';
import './Dialog.css';
import axios from 'axios';
import {useState} from 'react';
import Projects from '..//Project.js';
import {useHistory, Route} from 'react-router-dom'


function LoginForm() {

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

let history = useHistory()

const handleLogin = () => {
  axios.post('http://localhost:4000/login', {
    "email": email,
    "password": password,
  })
  .then(response => {
    history.push('/progresstracker/')
    console.log(response.status)
    console.log("Login Successful")
    alert("Successfully logged in")
    
  })
  .catch(err => {
    console.log(err)
    alert("Incorrect email or password")
  })
}
  
return(
 
  <form className="form">
    <input className="inputbox" 
      value={email} 
      type="email" 
      label="Email Address" 
      onChange={(e) => setEmail(e.target.value)} 
      placeholder="  Email Address"/><br/>
    <input className="inputbox" 
      value={password} 
      type="password" label="Password" 
      onChange={(e) => setPassword(e.target.value)} 
      placeholder="  Password"/><br/>
     <Button onClick={handleLogin} >
      <LoginButton />
     </Button>
  </form>
)}

export default LoginForm;