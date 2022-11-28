import React from 'react';
import Card from 'react-bootstrap/Card';
import DinosaurCard from './DinosaurCard';

import { MINT } from '../../css/colors';

function DailyCard(props) {
    console.log("props:")
    console.log(props)
    var date = new Date(props.day.date)
    var dinosaur = props.day.dinosaur
    console.log(dinosaur)
    return (
        <Card>
            <Card.Header
                className='text-center'
                style={{ backgroundColor: MINT }}>
                <h6 style={{ fontFamily: 'dinopia-r' }}>
                    {date.toLocaleString('en-US', { weekday: 'long' })},
                    {' '}{date.toLocaleString('en-US', { month: 'long' })}
                    {' '}{date.getDate()}, {date.getFullYear()}
                </h6>
                <h3 style={{
                    fontFamily: 'dinopia-l',
                    color: '#2C466C'
                }}>
                    Dinosaur of the Day
                </h3>
            </Card.Header>
            <Card.Body>
                <DinosaurCard dino={dinosaur} />
            </Card.Body>
        </Card>
    )
}

export default DailyCard;