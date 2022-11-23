import React from 'react';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import Dino from './Dino.webp'

function TodayCard(props) {
    return (
        <Card style={{ width: '100%' }}>
            <Card.Header>
                <h3 style={{ fontFamily: 'dinopia-o'}}>Dinosaur of the Day</h3>
            </Card.Header>
            <Container style={{ height: '10rem', width: '10rem' }}>
                <Card.Img variant="top" src={Dino} style={{ textAlign: 'left' }} alt="image" />
            </Container>
            <Card.Body>
            </Card.Body>
        </Card>
    )
}

export default TodayCard;