import React from 'react';
import LoginForm from './LoginComp.js';
import SignupForm from './SignupComp.js'
import './Dialog.css';


function Form({ formSelection, setCurrentDialog }){

    if (formSelection === 1){
    return  <LoginForm setCurrentDialog={setCurrentDialog}/>
    } else {
     return <SignupForm />
    };
}

export default Form;