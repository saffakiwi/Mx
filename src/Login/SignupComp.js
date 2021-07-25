import React from 'react'
import Button from '@material-ui/core/Button';
import SignupButton from './SignupButton.js'
import './Dialog.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function SignupForm() {

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [name, setName] = useState('')
const [surname, setSurname] = useState('')
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
        "email": email,
        "password": password,
        "first_name": name,
        "last_name": surname
    })
    .then(response => {
        console.log(response.data)
        console.log("User signed up")
    })
    .catch(err => {
        console.log(err)
    })
}

return (

    <form className="form">
        <input className="inputbox" value={name} type="text" label="name" 
            onChange={(e) => setName(e.target.value)} placeholder="  Full Name" /><br />
        <input className="inputbox" value={email} type="email" label="email" 
            onChange={(e) => setEmail(e.target.value)} placeholder="  Email Address" /><br />
        <input className="inputbox" value={password} type="Password" label="Password" 
            onChange={(e) => setPassword(e.target.value)} placeholder="  Password" /><br />
        <input className="inputbox" type="password" label="Password" placeholder="  Confirm Password" /><br />

        <Button onClick={handleSignup}>
            <SignupButton  />
        </Button>

    </form>

)}

export default SignupForm;