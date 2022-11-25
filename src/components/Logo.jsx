import React from "react"
import Container from "react-bootstrap/Container"

import {MINT} from "../css/colors"

function Logo(props) {
    var logoSize = props.size ? props.size : 2
    var color1 = props.primaryColor ? props.primaryColor : 'white'
    var color2 = props.secondaryColor ? props.secondaryColor : MINT
    return (
        <Container style={{ padding: logoSize/6+'rem', textShadow: '0.3rem 0.3rem 0.1rem #000000' }}>
            <h1 style={{ fontSize: logoSize*5/3+'rem', fontFamily: 'dinopia-l' }}>
                <text style={{ fontSize: logoSize*5/3+'rem', color: color1, fontFamily: 'dino-font' }}>D</text>
                <text style={{ color: color2 }}>ino</text>
                <text style={{ fontSize: logoSize*5/3+'rem', color: color1, fontFamily: 'dino-font' }}>H</text>
                <text style={{ color: color2 }}>ub</text>
            </h1>
        </Container>
    )
}

export default Logo