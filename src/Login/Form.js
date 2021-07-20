import React from 'react';
import {useState} from 'react';
import LoginForm from './LoginComp.js';
import SignupForm from './SignupComp.js'
import './Dialog.css';


function Form({ formSelection }){

    if (formSelection === 1){
    return <LoginForm/>
    } else {
     return <SignupForm />
    };
}

export default Form;