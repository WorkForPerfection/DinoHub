import React, { useEffect, useState } from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import DailyCard from '../components/DailyCard'
import TodayCard from '../components/TodayCard'

import '../css/Dino.css';
import { Button } from 'react-bootstrap';

function DailyDinoPage() {

    
    // [name, setName] = useState("dino")
    // [age, setAge] = useState(0)

    // setName("bruce")

    // useEffect(() => {
    //     fetch("localhost://9000/DailyDino")
    //     res.then()
    // }, [])

    var names = ["yubo1", "laoli2", "bruce3"];
    return(
        <Container>
            <h1 style={{ fontFamily: "dinopia-r", textAlign: 'center'}}>THE DAILY DINO</h1>
            <h5 style={{ fontFamily: "dinopia-l", textAlign: 'center', padding: '0.25rem'}}>Wednseday, September 16th, 2022</h5>
            <TodayCard />
            <Row xs="auto" md="auto" className="g-4" style={{ alignItems: 'center' }}>
                {names.map((name) => (
                    <Col md="auto" >
                        <DailyCard name={name}/>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default DailyDinoPage;