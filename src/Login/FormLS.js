import {useState} from 'react';
import './Dialog.css';
import Form from './Form.js';


export default function FormLS () {

const [formSelection, setFormSelection] = useState(1)
const handleChange = (prop) => {
    console.log(prop)
    setFormSelection(prop)
}

return (
    <div className="lsbuttons">
        <div className="selectbuttons">

 {/*.................................Login Form and button rendering...................................*/}
            <a className= {formSelection === "LoginForm" ? "loginLink loginActive" : "loginLink"}
            value="login button"
            href='#'
            onClick={() => handleChange(1)}>
            LOG IN </a>

{/*.................................Signup Form and button rendering...................................*/}
            <a className= {formSelection === "SignupForm" ? "signupLink signupActive" : "signupLink"}
            value="signup button"
            href='#'
            onClick={() => handleChange(0)}>
            SIGN UP </a>
        </div>
        
{/*.................................Main form conditional rendering...................................*/}
        <div>
            <Form className="main" formSelection={formSelection}/>
        </div>
    </div>
)}

