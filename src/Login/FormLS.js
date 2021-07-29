import {useState} from 'react';
import './Dialog.css';
import LoginForm from './LoginComp';
import SignupForm from './SignupComp';

export default function FormLS ( {setCurrentUser}) {

const [formSelection, setFormSelection] = useState(1)
const handleChange = (prop) => {
    console.log(prop)
    setFormSelection(prop)
}

function Form({ setCurrentDialog }){

    if (formSelection === 1){
    return  <LoginForm setCurrentDialog={setCurrentDialog}/>
    } else {
     return <SignupForm />
    };
}

return (
    <div className="lsbuttons">
        <div className="selectbuttons">

 {/*.................................Login Form and button rendering...................................*/}
            <div className= {formSelection === (1) ? "loginLink loginActive" : "loginLink"} 
            value="login button"
            onClick={() => handleChange(1)}>
            LOG IN </div>

{/*.................................Signup Form and button rendering...................................*/}
            <div className= {formSelection === (0) ? "signupLink signupActive" : "signupLink"}
            value="signup button"
            onClick={() => handleChange(0)}>
            SIGN UP </div>
        </div>
        
{/*.................................Main form conditional rendering...................................*/}
        <div className="main">
            {Form(formSelection)}
        </div>
    </div>
)}

