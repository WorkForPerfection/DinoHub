import React from 'react';
import Card from 'react-bootstrap/Card'
import DinosaurCard from './DinosaurCard';

function DailyCard(props) {
    return (
        <Card>
            <Card.Header className='text-center'>
                <h6 style={{ fontFamily: 'dinopia-r'}}>November 10th</h6>
                <h3 style={{ fontFamily: 'dinopia-o'}}>Dinosaur of the Day</h3>
            </Card.Header>
            <Card.Body>
                <DinosaurCard name={props.name}/>
            </Card.Body>
        </Card>
    )
}

export default DailyCard;