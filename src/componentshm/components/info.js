import React, {useState} from 'react'
import Array from './array'
import BoxText from './Box';
import "../componentsCSS/info.css"
import { Container } from '@material-ui/core';



export default function Info() {

    const [activeButton, setActiveButton] = useState('b1')
    var textBox = '';
 
    const handleClick = (e) => {
        console.log(e)
        setActiveButton(e.target.value)
    }
    
    if (activeButton === 'b1') {
        textBox = <BoxText props={Array[0]} />;
    } else if (activeButton === 'b2') {
        textBox = <BoxText props={Array[1]} />;
    } else if (activeButton === 'b3') {
        textBox = <BoxText props={Array[2]} />;
    } else if (activeButton === 'b4') {
        textBox = <BoxText props={Array[3]} />;
    }
 
    return (
        <Container maxWidth="xl">
        <div className="info">
            <h2>How our programmes helps teachers and schools </h2>
            <br/>
            <div className="infoButtons">
              <button value="b1" className={activeButton === 'b1' ? "buttonStyle active" : "buttonStyle"} onClick={handleClick}>LEARNING PATHWAYS</button>
                <button value="b2" className={activeButton === 'b2' ? "buttonStyle active" : "buttonStyle"} onClick={handleClick}>DIGITAL TECHNOLOGY</button>
                <button value="b3" className={activeButton === 'b3' ? "buttonStyle active" : "buttonStyle"} onClick={handleClick}>KEY COMPETENCIES</button>
                <button value="b4" className={activeButton === 'b4' ? "buttonStyle active" : "buttonStyle"} onClick={handleClick}>IR 4.0</button>
            </div>
           
            <div className="infoText">
                <div className="infoTextBox"> {textBox} </div>
                 </div>  
               
        </div>
        </Container>
    )
}