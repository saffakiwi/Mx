import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import LoginButton from './LoginButton.js';
import './Dialog.css';
import axios from 'axios';
import {useState, useEffect} from 'react';

function LoginForm() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [users, setUsers] = useState([])
  
  useEffect(() => {
      axios.get('http://localhost:4000/users')
      .then(response => {
          console.log(response.data)
          setUsers(response.data)
      })
      .catch(err => {
          console.log(err)
      })
  }, [])
  
  const handleLogin = () => {
      axios.post('http://localhost:4000/login', {
          "email": email,
          "password": password
      })
      .then(response => {
          console.log(response.status)
          console.log("Login Successful")
      })
      .catch(err => {
          console.log(err)
      })
  }
  
    return(
  
          <form className="form">
          <input className="inputbox" value={email} type="email" label="Email Address" onChange={(e) => setEmail(e.target.value)} placeholder="  Email Address"/><br/>
          <input className="inputbox" value={password} type="password" label="Password" onChange={(e) => setPassword(e.target.value)} placeholder="  Password"/><br/>
         
          <Button onClick={handleLogin}>
            <LoginButton />
          </Button>
          </form>
    )}

    export default LoginForm;