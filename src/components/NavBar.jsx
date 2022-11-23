import React from 'react';
import Container from 'react-bootstrap/Container'

function NavBar(props) {
    return (
        <Container style={{ padding: '1rem' }}>
            <h1 style={{ fontFamily: 'dino-font', fontSize: '5rem', color: 'tomato'}}>
                <text style={{ fontSize: '7rem' }}>D</text>
                ino
                <text style={{ fontSize: '7rem' }}>H</text>
                ub
            </h1>
        </Container>
    )
}

export default NavBar