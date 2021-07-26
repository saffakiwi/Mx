import React from 'react';
import Button from '@material-ui/core/Button';
import LoginButton from './LoginButton.js';
import './Dialog.css';
import axios from 'axios';
import {useState} from 'react';
import Projects from '..//Project.js';
import {BrowserRouter as Router ,Switch,Route,Link} from 'react-router-dom'

function LoginForm() {

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

const handleLogin = () => {
  axios.post('http://localhost:4001/login', {
    "email": email,
    "password": password,
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
  <>
  <Router>
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
    <Link to="src/Project.js">
     <Button onClick={handleLogin} >
      <LoginButton />
     </Button>
    </Link>
  </form>
  <Switch>
    <Route exact path="/projects">
    <Projects/>
    </Route>
  </Switch>
  </Router>
  </>
)}

export default LoginForm;