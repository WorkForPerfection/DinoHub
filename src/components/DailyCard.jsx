import React from 'react';
import DionsaurCard from './DinosaurCard'
import Card from 'react-bootstrap/Card'

function DailyCard() {
    return (
        <Card>
            <Card.Header className='text-center'>
                <h6>November 10th</h6>
                <h5>Dinosaur of the Day</h5>
            </Card.Header>
            <Card.Body>
                <DionsaurCard/>
            </Card.Body>
        </Card>
    )
}

export default DailyCard;