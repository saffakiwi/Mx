import React from 'react';
import { Container } from '@material-ui/core';
import "../componentsCSS/box.css"
import { makeStyles } from '@material-ui/core';
 
const useStyles = makeStyles({
infoBoxMain: {
    marginLeft:"10%",
    display:"flex",
    alignItems: "centre",
    flexDirection:"column",
},
});

export default function BoxText({props}) {
    const classes = useStyles();
    console.log(props)
    return (
        <>
            <Container maxWidth="xl" className="bkcolor">
                <div className={classes.infoBoxMain}>
            <h1 className="boxName">{props.main}</h1>
            <br/>
            <p className="boxTitle">{props.title}</p>
            <br /> 
            <div  style={{display:"flex"}} >
            <div><img  src={props.imgURL} alt="logo" /></div>
            <div><h3>{props.subtitle1}</h3>
                    <p> {props.contents1}</p>
            <br /></div></div>

            <div className="content">
                <div className="contentText"> 
                <div  style={{display:"flex"}} >
                     <div><img src={props.imgURL} alt="logo" /> </div>
                     <div><h3>{props.subtitle2}</h3>
                    <p>{props.contents2}</p></div>
                </div>
            </div> </div>   
            <br />

            <div className="content">
                <div className="contentText">
                <div style={{display:"flex"}} >
                <div> <img src={props.imgURL} alt="logo" /> </div>  
                <div><h3>{props.subtitle3}</h3>         
                 <p>{props.contents3}</p></div>
                </div>
            </div></div>  
            <br />
 
            <div className="content">
                <div className="contentText">
                <div style={{display:"flex"}} >
                <div><img src={props.imgURL} alt="logo" /> </div>
                <div><h3>{props.subtitle4}</h3>                
                    <p>{props.contents4}</p></div>
                </div>
            </div></div>      
            <br />
 
            <div className="infoContent">
                <div className="infoContentText">
                <div  style={{display:"flex"}} >
                    <div><img style={{objectFit: 'contain'}} src={props.imgURL} alt="logo" /></div>
                    <div><h3>{props.subtitle5}</h3>
                    <p>{props.contents5}</p></div>
                </div>
            </div>
            </div> 
            </div>
            </Container>     
        </>
    )
}
            