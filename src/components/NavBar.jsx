import React from 'react';
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';

import Logo from './Logo'
import '../css/Dino.css'
import { MINT } from "../css/colors"

function NavBar(props) {
    return (
        <Navbar style={{ backgroundColor: "#2C466C", boxShadow: '0rem 0.3rem 0.05rem ' + MINT }}>
            <Navbar.Brand className='ms-4'>
                <Logo size={2} href='#'/>
            </Navbar.Brand>
        </Navbar>
    )
}


export default NavBar