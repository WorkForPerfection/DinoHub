import React from "react"
import Container from "react-bootstrap/Container"

import { MINT } from "../css/colors"
import '../css/Dino.css'

function Logo(props) {
    var logoSize = props.size ? props.size : 2
    var color1 = props.primaryColor ? props.primaryColor : 'white'
    var color2 = props.secondaryColor ? props.secondaryColor : MINT
    return (
        <Container style={{ padding: logoSize/9+'rem', textShadow: '0.3rem 0.3rem 0.05rem #000000'}}>
            <h1 style={{ fontSize: logoSize*1.5+'rem', fontFamily: 'dinopia-l' }}>
                <span style={{ fontSize: logoSize*5/3+'rem', color: color1, fontFamily: 'dino-font' }}>D</span>
                <span style={{ color: color2 }}>ino</span>
                <span style={{ fontSize: logoSize*5/3+'rem', color: color1, fontFamily: 'dino-font' }}>H</span>
                <span style={{ color: color2 }}>ub</span>
            </h1>
        </Container>
    )
}

export default Logo