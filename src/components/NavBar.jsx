import React from 'react';
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';

import Logo from './Logo'

function NavBar(props) {
    return (
        <Navbar style={{ height: '10%', backgroundColor: '#2C466C' }}>
            <Logo size={2.5}/>
        </Navbar>
    )
}


export default NavBar