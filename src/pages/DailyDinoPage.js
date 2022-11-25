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
    return (
        <div className='bg-page'>
            <Container>
                <div style={{ padding: '2rem 25rem 0rem 25rem' }}>
                    <h1 style={{ fontFamily: "dinopia-r", color: 'white', backgroundColor: '#2C466C', textAlign: 'center', fontSize: '3.5rem', /*padding: '0.5rem 1rem 1rem 1rem'*/ }}>
                        <text className='capital-letter'>T</text>
                        <text style={{ fontSize: '4.2rem' }}>HE</text>
                        <text style={{ fontSize: '4.2rem' }}> D</text>
                        <text className='capital-letter'>A</text>
                        <text style={{ fontSize: '4.2rem' }}>IL</text>
                        <text className='capital-letter'>Y</text>
                        <text style={{ fontSize: '4.2rem' }}> DIN</text>
                        <text className='capital-letter'>O</text>
                    </h1>
                </div>
                <h3 style={{ fontFamily: "dinopia-l", textAlign: 'center', padding: '0.3rem', color: '#2C466C', letterSpacing: '0.11rem' }}>Wednseday, September 16th, 2022</h3>
                <TodayCard />
                <Row xs="auto" md="auto" className="g-4" style={{ alignItems: 'center', padding: '1rem' }}>
                    {names.map((name) => (
                        <Col md="auto" >
                            <DailyCard name={name} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default DailyDinoPage;