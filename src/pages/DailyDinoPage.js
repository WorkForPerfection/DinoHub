import React from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import DailyCard from '../components/DailyCard'

import '../css/dinofonts.css';

function DailyDinoPage() {
    return(
        <Container>
            <h1 className='dino-font'>The Daily Dino</h1>
            <Row xs="auto" md="auto" className="g-4">
                {Array.from({ length: 3 }).map((_, idx) => (
                    <Col md="auto" >
                        <DailyCard />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default DailyDinoPage;