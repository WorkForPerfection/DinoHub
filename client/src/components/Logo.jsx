import React from "react"
import Container from "react-bootstrap/Container"

import { MINT } from "../css/colors"
import '../css/Dino.css'

function Logo(props) {
    var logoSize = props.size ? props.size : 2
    var color1 = props.color1 ? props.color1 : 'white'
    var color2 = props.color2 ? props.color2 : MINT
    var shadow = props.shadow ? props.shadow : '0.3rem 0.3rem 0.05rem #000000'
    var border = props.border ? props.border : '0rem'
    return (
        <Container style={{ textShadow: shadow }}>
            <h1 style={{ fontSize: logoSize*1.5+'rem', fontFamily: 'dinopia-l', borderStyle: 'solid', borderWidth: border }}>
                <span style={{ fontSize: logoSize*5/3+'rem', color: color1, fontFamily: 'dino-font' }}>D</span>
                <span style={{ color: color2 }}>ino</span>
                <span style={{ fontSize: logoSize*5/3+'rem', color: color1, fontFamily: 'dino-font' }}>H</span>
                <span style={{ color: color2 }}>ub</span>
            </h1>
        </Container>
    )
}

export default Logo