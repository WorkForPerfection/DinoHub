import React from 'react';
import DionsaurCard from './DinosaurCard'
import Card from 'react-bootstrap/Card'

function DailyCard() {
    return (
        <Card style={{ width: '22rem' }}>
            <Card.Header className='text-center'>Dinosaur of the Day</Card.Header>
            <Card.Body>
                <DionsaurCard style={{ alignItems: 'center' }}/>
            </Card.Body>
        </Card>
    )
}

export default DailyCard;