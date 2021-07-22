import React from 'react'
import logoWorks from '../homepageIMG/headerIMGS/logoWorks.png';
import NZFlag from '../homepageIMG/headerIMGS/NZFlag.png';
import MaoriFlag from '../homepageIMG/headerIMGS/MaoriFlag.png';
import { Container } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import User from '../homepageIMG/headerIMGS/UserCircle.png'
import "../componentsCSS/header.css"

export default function Header() {
    return (
        <div>
            <Container maxWidth="xl">
                <div className="header">
                    <div className="logo">
                        <img className="logoPic" src={logoWorks} alt="level up logo" /> </div>

                    <div className="middleButtons">
                        <a href="#"> HOME</a>
                        <a href="#"> FEATURES</a>
                        <a href="#">TEACHERS </a> </div>

                    <div className="flags">
                        <div className="lang"> LANG </div>
                        <img src={NZFlag} alt="nz flag" />
                        <img src={MaoriFlag} alt="maori flag" /> </div>

                    <div className="avatar">
                        <IconButton style={{ height: "20px", width: "3px" }} >
                            <img src={User} style={{ height: "20px", width: "20px" }} /></IconButton> </div>

                    <div className="loginButtons">
                        <a className="register" href="#">REGISTER </a><p>|</p>
                        <a className="login" href="#">    LOGIN </a>
                    </div>
                </div>
            </Container>
        </div>
    )
}