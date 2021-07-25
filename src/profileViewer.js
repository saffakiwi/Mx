import React from 'react';
import Footer from './componentspf/footer';
import Body from './componentspf/body.js';
import Header1 from './componentspf/header1';
import {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


export default function ProfileViewer() {
    const [userInfo, setUserInfo] = useState([])
    const user_id = useParams ();


    useEffect(() => {
        axios.post("http://localhost:4001/getUser", {
          
        })
            .then(response => {
                console.log(response.data)
                setUserInfo(response.data)
            })
            .catch(err => console.log(err))
    }, [])


    return (
     <div>
            <Header1 />  
          
            <Body />
       
            <Footer />
        </div>
    );
}
