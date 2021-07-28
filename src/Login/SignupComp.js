import React from 'react'
import Button from '@material-ui/core/Button';
import SignupButton from './SignupButton.js'
import './Dialog.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function SignupForm() {

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [confirmPassword, setConfirmPassword] = useState('')
const [fullName, setFullName] = useState('')
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

function handleSignup() {
    axios.post('http://localhost:4000/signup', {
        firstName: first_name,
        lastName: last_name,
        email: email,
        password: password,
        confirmPassword: confirmPassword
    })
    .then(response => {
        console.log(response.data)
        console.log("User signed up")
    })
    .catch(err => {
        console.log(err)
    })
}

const first_name = fullName.split(' ').slice(0, -1).join(' ');
console.log(first_name);
const last_name = fullName.split(' ').slice(1).join(' ')
console.log(last_name);

return (

    <form className="form">
        <input className="inputbox" value={fullName} type="text" label="name" 
            onChange={(e) => setFullName(e.target.value)} placeholder="  Full Name" /><br />
        <input className="inputbox" value={email} type="email" label="email" 
            onChange={(e) => setEmail(e.target.value)} placeholder="  Email Address" /><br />
        <input className="inputbox" value={password} type="Password" label="Password" 
            onChange={(e) => setPassword(e.target.value)} placeholder="  Password" /><br />
        <input className="inputbox" value={confirmPassword} type="password" label="Password" 
        onChange={(e) => setConfirmPassword(e.target.value)} placeholder="  Confirm Password" /><br />

        <Button onClick={handleSignup}>
            <SignupButton  />
        </Button>

    </form>

)}

export default SignupForm;